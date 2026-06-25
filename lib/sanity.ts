import { createClient } from "@sanity/client";
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";

// Env-driven read client. When no project id is set (the default state until a
// dedicated Sanity project exists), the placeholder keeps `createClient` from
// throwing at import time — callers must still gate every fetch on
// `isSanityConfigured()` so the build stays green with no env vars.
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2025-08-15";

/** Whether a real Sanity project is wired up via env. */
export function isSanityConfigured(): boolean {
  return projectId.length > 0;
}

// Optional server-side read token. Anonymous reads of this dataset return the
// blog posts but NOT the referenced category/author docs (so the blog filter
// only showed "All" and authors/related posts were empty). A Viewer token makes
// the server-side fetches authenticated, which resolves every reference. The var
// is server-only (no NEXT_PUBLIC_ prefix), so Next never ships it to the browser.
const readToken = process.env.SANITY_API_READ_TOKEN || undefined;

export const client = createClient({
  projectId: projectId || "placeholder",
  dataset,
  useCdn: false, // false for SSG correctness (CDN can serve stale/partial data during static export)
  apiVersion,
  token: readToken,
  perspective: "published",
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
