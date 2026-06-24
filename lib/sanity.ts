import { createClient } from "@sanity/client";
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";

// Env-driven read client. When no project id is set (the default state until a
// dedicated Sanity project exists), the placeholder keeps `createClient` from
// throwing at import time — callers must still gate every fetch on
// `isSanityConfigured()` so the build stays green with no env vars.
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2024-01-01";

/** Whether a real Sanity project is wired up via env. */
export function isSanityConfigured(): boolean {
  return projectId.length > 0;
}

export const client = createClient({
  projectId: projectId || "placeholder",
  dataset,
  useCdn: true, // public read path; switch to write client for mutations
  apiVersion,
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
