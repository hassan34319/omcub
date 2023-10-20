import { printfulAPIUrl } from ".";
import {
  SanityProductWithImageUrl,
  fetchSanityProductsByPrintfulIDs,
} from "../sanity/fetchProducts";
import {
  OmcubSyncProduct,
  OmcubSyncProductWithSanityData,
  PrintfulSyncProductsResponse,
} from "./allSyncProductTypes";
import {
  SingleProductSyncVariant,
  SingleSyncProduct,
  SingleSyncProductResponse,
} from "./singleSyncProductType";

export const getSyncProductsWithSanityData = async (categoryIds?: number[]) => {
  // * get all products from printful by category id
  const categoryIdParam = categoryIds
    ? `category_id=${encodeURIComponent(categoryIds.join(", "))}`
    : "";
  const response = await fetch(
    `${printfulAPIUrl}/store/products?${categoryIdParam}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.PRINTFUL_PRIVATE_TOKEN}`,
      },
    }
  );
  let data = (await response.json()) as PrintfulSyncProductsResponse;

  // * get all products from sanity by printful product id
  const sanityProducts = await fetchSanityProductsByPrintfulIDs(
    data.result.map((p) => p.id)
  );

  // * filter out products that are not existing in sanity
  const dataWithSanityData = data.result.filter((p) =>
    sanityProducts.some((s) => s.printfulProductId === p.id)
  );
  data.result = dataWithSanityData;
  
  // * merge printful thumbnail urls with sanity image urls
  const dataWithSanityThumbnailUrls = await mergeSanityThumbnailUrls(
    data,
    sanityProducts
    );

  return dataWithSanityThumbnailUrls;
};

export const getSingleSyncProductWithSanityData = async (
  printfulProductId: number
) => {
  // * get single product from printful by product id
  const response = await fetch(
    `${printfulAPIUrl}/sync/products/${printfulProductId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.PRINTFUL_PRIVATE_TOKEN}`,
      },
    }
  );
  let data = (await response.json()) as SingleSyncProductResponse;

  // * get all products from sanity by printful product id
  const sanityProducts = await fetchSanityProductsByPrintfulIDs([
    data.result.sync_product.id,
  ]);

  // * merge printful thumbnail urls with sanity image urls
  // const dataWithSanityThumbnailUrls = await mergeSanityThumbnailUrls(
  //   data,
  //   sanityProducts
  // );

  // * merge printful variant image urls with sanity image urls
  const dataWithSanityVariantImageUrls = await mergeSanityVariantImageUrls(
    data,
    sanityProducts
  );

  return dataWithSanityVariantImageUrls;
};

async function mergeSanityThumbnailUrls(
  printfulResponse: PrintfulSyncProductsResponse,
  sanityProducts: SanityProductWithImageUrl[]
): Promise<OmcubSyncProductWithSanityData> {
  const products: OmcubSyncProduct[] = printfulResponse.result.map(
    ({ thumbnail_url, ...rest }) => {
      let thumbnailUrls: string[];
      const matchingSanityProduct = sanityProducts.find(
        (s) => s.printfulProductId === rest.id
      );

      if (
        matchingSanityProduct &&
        matchingSanityProduct.thumbnails.length > 0
      ) {
        thumbnailUrls = matchingSanityProduct.thumbnails
          .map((t) => t.imageUrl)
          .filter(Boolean) as string[];
      } else {
        thumbnailUrls = [thumbnail_url];
      }
      return {
        ...rest,
        thumbnail_urls: thumbnailUrls,
      };
    }
  );

  return {
    ...printfulResponse,
    result: products,
  };
}

async function mergeSanityVariantImageUrls(
  printfulResponse: SingleSyncProductResponse,
  sanityProducts: SanityProductWithImageUrl[]
): Promise<SingleSyncProductResponse> {
  printfulResponse.result.sync_variants.map((variant) => {
    let thumbnailUrl: string;
    const matchingSanityProduct = sanityProducts.find(
      (s) => s.printfulProductId === variant.sync_product_id
    );

    if (matchingSanityProduct && matchingSanityProduct.variants.length > 0) {
      const matchingSanityVariant = matchingSanityProduct.variants.find(
        (v) => v.printfulVariantId === variant.id
      );
      if (matchingSanityVariant && matchingSanityVariant.image.imageUrl) {
        variant.product.image = matchingSanityVariant.image.imageUrl;
      }
    }
  });

  return printfulResponse;
}
