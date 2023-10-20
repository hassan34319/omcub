import { sanityAdminClient } from "../../lib/sanity-client";

export const deleteProductByPrintfulId = async (printfulProductId) => {
  await sanityAdminClient.delete({
    query: `*[_type == "product" && printfulProductId == $printfulProductId]`,
    params: {
      printfulProductId,
    },
  });
};
