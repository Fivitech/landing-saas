import type { MetadataRoute } from "next";

const routes = ["", "/features", "/pricing", "/contact", "/privacy-policy", "/terms-of-service", "/cookie-policy", "/blog"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://fxcrm.fivitechnologies.com";
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date("2026-06-24"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
