import { printfulAPIUrl } from ".";
import { PrintfulCatalogueProductResponse } from "./catalogueProductType";

export const getPrintfulCatalogueProductById = async (printfulProductId) => {
  const response = await fetch(
    `${printfulAPIUrl}/products/${printfulProductId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.PRINTFUL_PRIVATE_TOKEN}`,
      },
    }
  );
  let data = (await response.json()) as PrintfulCatalogueProductResponse;
  return data;
};
