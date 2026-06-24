import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/preview/", "/studio/"],
      },
    ],
    sitemap: "https://fxcrm.fivitechnologies.com/sitemap.xml",
  };
}
