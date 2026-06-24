import type { MetadataRoute } from "next";
import { isSanityConfigured } from "@/lib/sanity";
import { getPostSlugs } from "@/lib/sanity.queries";

const routes = ["", "/features", "/pricing", "/contact", "/privacy-policy", "/terms-of-service", "/cookie-policy", "/blog"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://fxcrm.fivitechnologies.com";

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date("2026-06-24"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  // Blog slugs are appended ONLY when Sanity is configured. getPostSlugs is
  // already guarded (returns [] when unconfigured or on error) so this never
  // throws at build time with no env set.
  let blogEntries: MetadataRoute.Sitemap = [];
  if (isSanityConfigured()) {
    const slugs = await getPostSlugs();
    blogEntries = slugs.map((slug) => ({
      url: `${base}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    }));
  }

  return [...staticEntries, ...blogEntries];
}
