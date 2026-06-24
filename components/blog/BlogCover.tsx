import {
  CandlestickChart,
  ShieldCheck,
  Share2,
  CreditCard,
  LayoutDashboard,
  TrendingUp,
  Layers,
  Coins,
  Network,
  Headphones,
  Megaphone,
  Workflow,
  type LucideIcon,
} from "lucide-react";

// Pure CSS/SVG blog cover — renders instantly with no <img> and no network
// fetch, so the listing (up to 10 cards) and post hero stay fast. Server-render
// safe: no client hooks, just markup + inline styles seeded off the post.
//
// The visual is carried by a large topic glyph + abstract geometry on a dark,
// on-brand scene; the title rides along as gradient text. Each cover is a
// self-contained dark surface, so it reads well in both light and dark themes.

type CoverCategory = { title?: string; color?: string };

// Topic → glyph + a couple of keywords we match against the slug/title/category.
// First match wins, so order from most-specific to most-generic.
const TOPICS: { icon: LucideIcon; keys: string[] }[] = [
  { icon: ShieldCheck, keys: ["kyc", "aml", "complian", "regulat", "licen", "fraud", "security", "verif"] },
  { icon: Network, keys: ["ib", "introduc", "affiliat", "rebate", "partner", "referr"] },
  { icon: CreditCard, keys: ["payment", "deposit", "withdraw", "psp", "billing", "gateway", "wallet"] },
  { icon: Coins, keys: ["gold", "xau", "commod", "liquid", "spread", "pricing", "fee"] },
  { icon: LayoutDashboard, keys: ["crm", "dashboard", "client portal", "back office", "backoffice", "admin"] },
  { icon: TrendingUp, keys: ["growth", "scal", "churn", "retention", "convert", "acquisi", "revenue", "kpi"] },
  { icon: Layers, keys: ["white label", "white-label", "whitelabel", "multi-tier", "infrastructure", "stack"] },
  { icon: Headphones, keys: ["support", "service", "onboard", "experience", "ticket"] },
  { icon: Megaphone, keys: ["market", "campaign", "brand", "lead", "funnel", "promo"] },
  { icon: Workflow, keys: ["automat", "workflow", "integrat", "api", "process", "ops"] },
  { icon: CandlestickChart, keys: ["trad", "forex", "fx", "mt5", "mt4", "broker", "market", "chart", "candle"] },
];

const FALLBACK_ICON = CandlestickChart;

function pickIcon(haystack: string): LucideIcon {
  const s = haystack.toLowerCase();
  for (const t of TOPICS) {
    if (t.keys.some((k) => s.includes(k))) return t.icon;
  }
  return FALLBACK_ICON;
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

export function BlogCover({
  title,
  slug,
  category,
  className = "",
  showTitle = true,
  chrome = true,
}: {
  title: string;
  slug: string;
  category?: CoverCategory;
  className?: string;
  showTitle?: boolean;
  // When false, hides the category pill + brand mark — for cards/heroes that
  // already render their own title, pills, and branding around the cover.
  chrome?: boolean;
}) {
  const categoryLabel = category?.title;
  const seededHue =
    (category?.color ? hueFromHex(category.color) : null) ?? hueFromString(slug || title);
  const h1 = seededHue;
  const h2 = (seededHue + 48) % 360;

  const Icon = pickIcon(`${categoryLabel || ""} ${slug} ${title}`);

  // A stable, per-post id so multiple covers on one page don't share SVG defs.
  const uid = `bc-${(slug || title).replace(/[^a-z0-9]/gi, "").slice(0, 24) || "x"}`;

  // Layered radial mesh on near-black — echoes the OG cover + site ambient mesh.
  const background =
    `radial-gradient(115% 115% at 0% 0%, hsl(${h1} 85% 26% / 0.95) 0%, transparent 55%),` +
    `radial-gradient(95% 95% at 100% 0%, hsl(${h2} 80% 28% / 0.9) 0%, transparent 52%),` +
    `radial-gradient(125% 125% at 100% 100%, hsl(${BRAND_GREEN} 95% 24% / 0.9) 0%, transparent 55%),` +
    `linear-gradient(135deg, #070707 0%, #06120d 100%)`;

  const accent = `hsl(${h1} 90% 62%)`;
  const accent2 = `hsl(${h2} 88% 64%)`;

  return (
    <div
      className={`relative h-full w-full overflow-hidden ${className}`}
      style={{ background }}
      aria-hidden="true"
    >
      {/* Fine grid + abstract geometry, all vector so it's crisp at any size. */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 250"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id={`${uid}-stroke`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity="0.9" />
            <stop offset="100%" stopColor={accent2} stopOpacity="0.5" />
          </linearGradient>
          <radialGradient id={`${uid}-glow`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.55" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </radialGradient>
          <pattern id={`${uid}-grid`} width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M20 0H0V20" stroke="hsl(0 0% 100% / 0.05)" strokeWidth="0.5" fill="none" />
          </pattern>
        </defs>

        {/* subtle technical grid */}
        <rect width="400" height="250" fill={`url(#${uid}-grid)`} />

        {/* glow blobs for depth */}
        <circle cx="320" cy="60" r="120" fill={`url(#${uid}-glow)`} opacity="0.7" />
        <circle cx="60" cy="220" r="100" fill={`url(#${uid}-glow)`} opacity="0.5" />

        {/* abstract geometric accents — rings + a node-link motif */}
        <circle cx="330" cy="55" r="46" stroke={`url(#${uid}-stroke)`} strokeWidth="1.2" opacity="0.5" />
        <circle cx="330" cy="55" r="70" stroke={`url(#${uid}-stroke)`} strokeWidth="0.8" opacity="0.25" />
        <path
          d="M-10 200 Q 120 150 200 185 T 410 150"
          stroke={`url(#${uid}-stroke)`}
          strokeWidth="1.4"
          opacity="0.55"
        />
        <g opacity="0.7">
          <line x1="36" y1="44" x2="92" y2="70" stroke={accent} strokeWidth="0.8" opacity="0.4" />
          <line x1="92" y1="70" x2="64" y2="118" stroke={accent} strokeWidth="0.8" opacity="0.4" />
          <circle cx="36" cy="44" r="3.5" fill={accent} />
          <circle cx="92" cy="70" r="2.8" fill={accent2} />
          <circle cx="64" cy="118" r="2.4" fill={accent} />
        </g>
      </svg>

      {/* The hero glyph — the graphic that carries the cover. */}
      <div className="absolute right-[6%] top-1/2 -translate-y-1/2">
        <div
          className="grid place-items-center rounded-[1.4rem] border backdrop-blur-sm"
          style={{
            width: "clamp(64px, 30%, 132px)",
            aspectRatio: "1 / 1",
            borderColor: `hsl(${h1} 90% 62% / 0.35)`,
            background: `linear-gradient(135deg, hsl(${h1} 90% 60% / 0.18), hsl(${BRAND_GREEN} 90% 50% / 0.10))`,
            boxShadow: `0 0 60px hsl(${h1} 90% 50% / 0.35)`,
          }}
        >
          <Icon
            className="h-[52%] w-[52%]"
            style={{ color: accent }}
            strokeWidth={1.5}
            absoluteStrokeWidth
          />
        </div>
      </div>

      {/* Category pill + title — text rides along, the glyph leads. */}
      <div className="absolute inset-0 flex flex-col justify-end gap-2 p-5 md:p-6">
        {chrome && categoryLabel && (
          <span
            className="w-fit rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] backdrop-blur-md"
            style={{
              color: accent,
              background: `hsl(${h1} 90% 55% / 0.14)`,
              border: `1px solid hsl(${h1} 90% 60% / 0.4)`,
            }}
          >
            {categoryLabel}
          </span>
        )}
        {showTitle && (
          <h3
            className="max-w-[78%] bg-clip-text text-lg font-extrabold leading-tight tracking-tight text-transparent md:text-xl"
            style={{
              backgroundImage: `linear-gradient(90deg, #ffffff, hsl(${h1} 90% 80%))`,
            }}
          >
            {title}
          </h3>
        )}
      </div>

      {/* Brand mark for a finished, on-brand edge. */}
      {chrome && (
      <div className="absolute left-5 top-5 flex items-center gap-2 md:left-6 md:top-6">
        <span
          className="grid h-6 w-6 place-items-center rounded-md text-[11px] font-black"
          style={{ background: "#00E676", color: "#06170f" }}
        >
          F
        </span>
        <span className="text-[10px] font-bold tracking-wide text-white/70">FXCRM</span>
      </div>
      )}
    </div>
  );
}
