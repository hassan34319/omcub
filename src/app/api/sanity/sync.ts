import { NextApiRequest, NextApiResponse } from "next";
import { sanityAdminClient } from "../../../lib/sanity-client";
import {
  PrintfulSyncProductResult,
  PrintfulWebhookReqBody,
} from "../../../types/printful-types";
import { nanoid } from "nanoid";
import { deleteProductByPrintfulId } from "../../../utils/sanity/deleteProduct";
import { fetchProductByPrintfulId } from "../../../utils/sanity/getExistingProduct";

export default async function handleWebhook(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const payload: PrintfulWebhookReqBody = req.body;

  switch (payload.type) {
    case "product_updated":
      // case "product_synced": // * disabled for synced event because printful sends both synced and updated events when a product is added to the store
      try {
        const printfulBaseUrl = `https://api.printful.com`;
        // Fetch sync product details from Printful
        const API_ENDPOINT = `${printfulBaseUrl}/store/products/${payload.data.sync_product.id}`;
        const response = await fetch(API_ENDPOINT, {
          headers: {
            Authorization: `Bearer ${process.env.PRINTFUL_PRIVATE_TOKEN}`,
          },
        });

        const syncProductData = await response.json();
        const syncProductResult =
          syncProductData.result as PrintfulSyncProductResult;
        const syncProduct = syncProductResult.sync_product;
        const existingProduct = await fetchProductByPrintfulId(
          payload.data.sync_product.id
        );

        if (
          syncProductResult.sync_variants &&
          syncProductResult.sync_variants.length > 0
        ) {
          const variants = syncProductResult.sync_variants.map((variant) => {
            let existingVariant = {};
            if (existingProduct) {
              existingVariant =
                existingProduct.variants.find(
                  (v) => v.printfulVariantId === variant.id
                ) || {};
            }
            return {
              ...existingVariant,
              _key: nanoid(),
              printfulVariantId: variant.id,
              printfulVariantName: variant.name,
            };
          });

          if (!existingProduct) {
            await sanityAdminClient.create({
              _id: `drafts.${nanoid()}`,
              _type: "product",
              printfulProductId: syncProduct.id,
              printfulProductName: syncProduct.name,
              variants: variants,
            });
          } else {
            await sanityAdminClient
              .patch(existingProduct._id)
              .set({
                printfulProductName: syncProduct.name,
                variants: variants,
              })
              .commit();
          }
        } else {
          await deleteProductByPrintfulId(payload.data.sync_product.id);
        }

        return res.status(200).json({
          success: true,
          message: "Product updated/created successfully.",
        });
      } catch (error) {
        console.error("Error:", error.message);
        return res.status(500).json({ success: false, message: error.message });
      }

    case "product_deleted":
      try {
        await deleteProductByPrintfulId(payload.data.sync_product.id);
        return res.status(200).json({
          success: true,
          message: "Product deleted successfully.",
        });
      } catch (error) {
        console.error("Error:", error.message);
        return res.status(500).json({ success: false, message: error.message });
      }

    default:
      return res
        .status(400)
        .json({ success: false, message: "Invalid webhook type." });
  }
}
