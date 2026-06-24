import { ImageResponse } from "next/og";
import { groq } from "next-sanity";
import { client, isSanityConfigured } from "@/lib/sanity";
import { getPostSlugs } from "@/lib/sanity.queries";

// Build-time per-post cover image (1200x630). Doubles as the post's OG/social
// image AND the in-app hero/thumbnail (rendered via <img src=".../opengraph-image">).
// Rendered to a static PNG per slug at build (generateStaticParams below), so it
// works on Netlify with no runtime og support. Stays green with no Sanity env —
// it returns a generic branded cover when unconfigured or the post is missing.
export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Fivitech FXCRM";

// One PNG per published post.
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  if (!isSanityConfigured()) return [];
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Minimal fetch — just what the cover needs (title + primary category).
const coverQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    title,
    "category": categories[0]->{ title, color }
  }
`;

type CoverData = {
  title?: string;
  category?: { title?: string; color?: string } | null;
};

async function getCoverData(slug: string): Promise<CoverData | null> {
  if (!isSanityConfigured()) return null;
  try {
    return await client.fetch<CoverData | null>(coverQuery, { slug });
  } catch (error) {
    console.error("opengraph-image getCoverData failed:", error);
    return null;
  }
}

// Stable hash → 0..359 hue, so a category-less post still gets a distinct accent.
function hueFromString(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 360;
  return h;
}

// Pull a hue out of a curated category hex so the cover echoes its category.
function hueFromHex(hex: string): number | null {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex.trim());
  if (!m) return null;
  const n = parseInt(m[1], 16);
  const r = ((n >> 16) & 255) / 255;
  const g = ((n >> 8) & 255) / 255;
  const b = (n & 255) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;
  if (d === 0) return null; // grayscale → fall back to slug hash
  let hue: number;
  if (max === r) hue = ((g - b) / d) % 6;
  else if (max === g) hue = (b - r) / d + 2;
  else hue = (r - g) / d + 4;
  hue = Math.round(hue * 60);
  return ((hue % 360) + 360) % 360;
}

const BRAND_GREEN = 145; // ~#00E676 — always blended in so covers stay on-brand.

export default async function BlogOgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getCoverData(slug);

  const title = data?.title || "The forex brokerage playbook";
  const categoryLabel = data?.category?.title || "Fivitech FXCRM";
  const categoryColor = data?.category?.color;

  const seededHue = (categoryColor ? hueFromHex(categoryColor) : null) ?? hueFromString(slug || title);
  const h1 = seededHue;
  const h2 = (seededHue + 48) % 360;

  // Layered radial mesh on near-black — matches the site OG image (app/opengraph-image.tsx).
  const background =
    `radial-gradient(110% 110% at 0% 0%, hsl(${h1} 85% 24%) 0%, transparent 55%),` +
    `radial-gradient(90% 90% at 100% 0%, hsl(${h2} 80% 26%) 0%, transparent 50%),` +
    `radial-gradient(120% 120% at 100% 100%, hsl(${BRAND_GREEN} 95% 22%) 0%, transparent 55%),` +
    `linear-gradient(135deg, #070707 0%, #06120d 100%)`;

  // next/og rule: any element with >1 child needs explicit display:flex.
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background,
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand mark — the "F" tile + wordmark from the site OG image. */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 30,
            color: "#00E676",
            fontWeight: 700,
            letterSpacing: -0.5,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#00E676",
              color: "#06170f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 800,
            }}
          >
            F
          </div>
          Fivitech FXCRM
        </div>

        {/* Headline block: category pill + post title. */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 22px",
                borderRadius: 999,
                fontSize: 24,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 2,
                color: "#00E676",
                background: "rgba(0, 230, 118, 0.12)",
                border: "1px solid rgba(0, 230, 118, 0.45)",
              }}
            >
              {categoryLabel}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: title.length > 64 ? 64 : 80,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -1.5,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
        </div>

        {/* Footer rule + accent dot for a finished, branded edge. */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 26,
            color: "#9ca3af",
          }}
        >
          <div style={{ display: "flex", width: 14, height: 14, borderRadius: 999, background: "#00E676" }} />
          fxcrm.fivitech.com
        </div>
      </div>
    ),
    { ...size },
  );
}
