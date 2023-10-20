import { sanityAdminClient } from "../../lib/sanity-client";

export const fetchProductByPrintfulId = async (printfulProductId) => {
  const documents = await sanityAdminClient.fetch(
    `*[_type == "product" && printfulProductId == $printfulProductId]`,
    {
      printfulProductId,
    }
  );

  const draft = documents.find((doc) => doc._id.startsWith("drafts."));
  const published = documents.find((doc) => !doc._id.startsWith("drafts."));

  return draft || published || null;
};
