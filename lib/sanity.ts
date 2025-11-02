import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
console.log("Sanity ID: ", process.env.SANITY_PROJECT_ID)
export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: true,
    apiVersion: "2025-10-28",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);