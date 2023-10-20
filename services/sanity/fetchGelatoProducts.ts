import { sanityClient } from "../../src/lib/sanity-client";

export async function getProduct(productId: string[]) {
  try {
    const sanityProduct = await sanityClient.fetch(
      `*[_type == "productList" && id in $ids]`,
      { ids: productId }
    );

    const data = await fetch(
      `https://ecommerce.gelatoapis.com/v1/stores/${process.env.NEXT_PUBLIC_GELATO_STORE_ID}/products/${productId}`,
      {
        headers: {
          "X-API-KEY": process.env.NEXT_PUBLIC_GELATO_API_KEY,
        },
      }
      );
      const gelatoProduct = await data.json();
      console.log("🚀 ~ file: fetchGelatoProducts.ts:18 ~ getProduct ~ data:", sanityProduct, gelatoProduct)

    sanityProduct[0].productImages = gelatoProduct.productImages;

    return {
      productDetail: sanityProduct[0],
      variantDetail: gelatoProduct.variants,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getCategoryProducts(categoryId: number) {
  try {
    const category = await sanityClient.fetch(
      `*[_type == "categories" && id == $id]`,
      { id: categoryId },
    );
    const products = await sanityClient.fetch(
      `*[_type == "productList" && id in $ids]`,
      { ids: category[0].productIds }
    );

    return products;
  } catch (error) {
    console.log(error);
  }
}
