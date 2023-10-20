import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityAdminClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_EDITOR_TOKEN,
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-08-15", // use current date (YYYY-MM-DD) to target the latest API version
});

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-08-15", // use current date (YYYY-MM-DD) to target the latest API version
});

export const imageBuilder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return imageBuilder.image(source);
}
