import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "hx3ijj60",
  dataset: "production",
  apiVersion: "2022-08-15",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
