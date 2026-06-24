// Branded, deterministic cover art for blog posts that have no real mainImage.
// Pure CSS/markup (server-renderable, no client hooks) so it can render inside
// cards and the post header. The hue is seeded from the post's primary category
// color when available, otherwise from a stable hash of the slug — so every
// post looks distinct but stays on-brand (neon green / cyan / violet on near-black).

type BlogCoverProps = {
  title: string;
  slug: string;
  /** Primary category color (hex like "#00E676"), used to seed the hue. */
  categoryColor?: string;
  /** Short category label rendered as a kicker on the hero variant. */
  categoryLabel?: string;
  /** "card" for list/related thumbnails, "hero" for the post header. */
  variant?: "card" | "hero";
  /** Suppress the foreground title/kicker when the surrounding layout already shows it. */
  showTitle?: boolean;
  className?: string;
};

// Stable string hash → 0..359 hue. Same slug always yields the same hue.
function hueFromString(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h * 31 + s.charCodeAt(i)) % 360;
  }
  return h;
}

// Pull a hue out of a hex color so a curated category color can drive the art.
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

// First two "word-initial" letters of the title for the monogram.
function monogram(title: string): string {
  const words = title.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return "FX";
  const letters = (words[0][0] + (words[1]?.[0] ?? words[0][1] ?? "")).toUpperCase();
  return letters.replace(/[^A-Z0-9]/g, "") || "FX";
}

export function BlogCover({
  title,
  slug,
  categoryColor,
  categoryLabel,
  variant = "card",
  showTitle = true,
  className = "",
}: BlogCoverProps) {
  const seededHue =
    (categoryColor ? hueFromHex(categoryColor) : null) ?? hueFromString(slug || title);

  // Two analogous accent hues flank the seed; the brand's neon green (~145) is
  // always blended in so every cover reads as the same family of art.
  const h1 = seededHue;
  const h2 = (seededHue + 48) % 360;
  const brandGreen = 145;

  // Layered mesh on near-black — echoes app/opengraph-image.tsx and --gradient-mesh.
  const background =
    `radial-gradient(120% 120% at 0% 0%, hsl(${h1} 90% 22% / 0.95) 0%, transparent 55%),` +
    `radial-gradient(90% 90% at 100% 0%, hsl(${h2} 85% 28% / 0.55) 0%, transparent 50%),` +
    `radial-gradient(120% 120% at 100% 100%, hsl(${brandGreen} 100% 30% / 0.45) 0%, transparent 55%),` +
    `linear-gradient(135deg, #070707 0%, #06120d 100%)`;

  const isHero = variant === "hero";
  const mono = monogram(title);

  return (
    <div
      aria-hidden="true"
      className={`relative h-full w-full overflow-hidden ${className}`}
      style={{ background }}
    >
      {/* Fine dot grid for texture, matching the card fallback that preceded this. */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(hsl(0 0% 100% / 0.18) 1px, transparent 1px)",
          backgroundSize: isHero ? "30px 30px" : "22px 22px",
        }}
      />

      {/* Oversized monogram as a watermark — distinct per post, low contrast. */}
      <span
        className="pointer-events-none absolute select-none font-extrabold leading-none tracking-tighter"
        style={{
          right: isHero ? "-2%" : "-4%",
          bottom: isHero ? "-18%" : "-22%",
          fontSize: isHero ? "clamp(180px, 34vw, 420px)" : "190px",
          color: `hsl(${h1} 90% 70% / 0.10)`,
        }}
      >
        {mono}
      </span>

      {/* Brand mark: the "F" tile from the OG image, plus the wordmark on hero. */}
      <div
        className="absolute flex items-center gap-3"
        style={{ left: isHero ? 40 : 18, top: isHero ? 40 : 18 }}
      >
        <span
          className="flex items-center justify-center rounded-xl font-extrabold"
          style={{
            width: isHero ? 44 : 30,
            height: isHero ? 44 : 30,
            fontSize: isHero ? 26 : 17,
            background: "#00E676",
            color: "#06170f",
          }}
        >
          F
        </span>
        {isHero && (
          <span className="text-base font-bold tracking-tight text-[#00E676]">
            Fivitech FXCRM
          </span>
        )}
      </div>

      {/* Foreground text: title (hero) or category kicker (card). */}
      {showTitle &&
        (isHero ? (
          <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
            {categoryLabel && (
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.32em] text-[#00E676]">
                {categoryLabel}
              </p>
            )}
            <p className="max-w-3xl text-2xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
              {title}
            </p>
          </div>
        ) : (
          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="line-clamp-2 text-base font-bold leading-snug text-white/95">
              {title}
            </p>
          </div>
        ))}

      {/* Top sheen for depth. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(0 0% 100% / 0.06) 0%, transparent 22%, transparent 60%, hsl(0 0% 0% / 0.45) 100%)",
        }}
      />
    </div>
  );
}
