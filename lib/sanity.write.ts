import { createClient } from "@sanity/client";
import { projectId, dataset, apiVersion } from "./sanity";

// SERVER-ONLY write client. This module must ONLY be imported from server code
// (route handlers / server components) — never a client component — so the
// write token never ships to the browser. The token is read from a non-public
// env var (NOT prefixed NEXT_PUBLIC_) and must be set in Netlify (and a local
// .env.local). The defensive check below throws if this somehow runs in a
// browser bundle, since the `server-only` package is not installed here to
// enforce it at build time.
if (typeof window !== "undefined") {
  throw new Error("lib/sanity.write.ts must never be imported by client code.");
}
export const writeClient = createClient({
  projectId: projectId || "placeholder",
  dataset,
  useCdn: false,
  apiVersion,
  token: process.env.SANITY_API_WRITE_TOKEN,
});
