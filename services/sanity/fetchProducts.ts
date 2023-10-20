import { sanityClient, urlFor } from "../../src/lib/sanity-client";

export type SanityProductWithImageUrl = {
  printfulProductId: number;
  printfulProductName: string;
  thumbnails?: Array<{
    asset: { _ref: string };
    imageUrl?: string | null;
  }>;
  variants?: Array<{
    printfulVariantId: number;
    printfulVariantName: string;
    image?: {
      asset: { _ref: string };
      imageUrl?: string | null;
    };
  }>;
};

export async function fetchSanityProductsByPrintfulIDs(
  printFulProductIds: number[]
): Promise<SanityProductWithImageUrl[]> {
  try {
    const products: SanityProductWithImageUrl[] = await sanityClient.fetch(
      `*[_type == "product" && printfulProductId in $ids]`,
      { ids: printFulProductIds }
      );

    // Add image URLs to the fetched products
    const productsWithImageUrls = products.map((product) => {
      let thumbnailsWithUrls =
        product.thumbnails?.map((thumbnail) => ({
          ...thumbnail,
          imageUrl: thumbnail.asset ? urlFor(thumbnail.asset._ref).url() : null,
        })) || [];

      let variantsWithImageUrls =
        product.variants?.map((variant) => ({
          ...variant,
          image: {
            ...variant.image,
            imageUrl:
              variant.image && variant.image.asset
                ? urlFor(variant.image.asset._ref).url()
                : null,
          },
        })) || [];

      return {
        ...product,
        thumbnails: thumbnailsWithUrls,
        variants: variantsWithImageUrls,
      };
    });

    return productsWithImageUrls;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
