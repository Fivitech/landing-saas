"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Check, Globe, Palette, Rocket, Upload } from "lucide-react";

/**
 * Styled, on-brand white-label / brand-customization illustration — a
 * brand-settings panel (custom domain, logo slot, color swatches) beside a LIVE
 * branded-portal preview that re-themes on a loop to communicate "your brand,
 * your colors." Built from divs/SVG on the token system (primary neon, glass,
 * grid texture) so it renders LIGHT in light mode and DARK in dark mode. Not a
 * screenshot. Mirrors the FeatureMockups conventions; all motion respects
 * `prefers-reduced-motion`.
 */

const panelGrid = {
  backgroundImage:
    "linear-gradient(to right, hsl(var(--primary)/0.07) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--primary)/0.07) 1px, transparent 1px)",
  backgroundSize: "32px 32px",
} as const;

/**
 * Brand accents the preview cycles through. The first uses the site's own
 * primary token (neon green) so the loop always returns "home" to the brand;
 * the rest are fixed hues so the re-theme reads clearly in both light + dark.
 */
const brandColors = [
  { name: "Emerald", color: "hsl(var(--primary))", swatch: "hsl(var(--primary))" },
  { name: "Azure", color: "hsl(var(--cyan-accent))", swatch: "hsl(var(--cyan-accent))" },
  { name: "Violet", color: "#8b5cf6", swatch: "#8b5cf6" },
  { name: "Amber", color: "#f59e0b", swatch: "#f59e0b" },
] as const;

/** Domain string typed out character-by-character on a loop. */
const DOMAIN = "app.yourbrokerage.com";

function DomainTyper({ reduce }: { reduce: boolean | null }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { margin: "-40px" });
  const [len, setLen] = useState(reduce ? DOMAIN.length : 0);

  useEffect(() => {
    if (!inView || reduce) {
      setLen(DOMAIN.length);
      return;
    }
    let stopped = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let i = 0;
    const type = () => {
      if (stopped) return;
      i += 1;
      setLen(i);
      if (i < DOMAIN.length) {
        timer = setTimeout(type, 90);
      } else {
        // hold the full domain, then reset and retype
        timer = setTimeout(() => {
          i = 0;
          setLen(0);
          timer = setTimeout(type, 700);
        }, 3600);
      }
    };
    timer = setTimeout(type, 600);
    return () => {
      stopped = true;
      if (timer) clearTimeout(timer);
    };
  }, [inView, reduce]);

  return (
    <span ref={ref} className="font-mono text-sm font-semibold tabular-nums">
      {DOMAIN.slice(0, len)}
      {!reduce && (
        <motion.span
          aria-hidden
          className="ml-px inline-block h-3.5 w-px translate-y-0.5 bg-primary"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      )}
    </span>
  );
}

export function WhiteLabelMockup() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-40px" });

  // Index into brandColors that the live preview is currently themed with.
  const [brand, setBrand] = useState(0);
  const active = brandColors[brand];

  useEffect(() => {
    if (!inView || reduce) return;
    const id = setInterval(() => {
      setBrand((b) => (b + 1) % brandColors.length);
    }, 2200);
    return () => clearInterval(id);
  }, [inView, reduce]);

  return (
    <div
      ref={ref}
      className="glass-panel relative h-full w-full overflow-hidden rounded-2xl text-foreground"
    >
      <div className="absolute inset-0 opacity-60" style={panelGrid} />
      <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative flex h-full flex-col p-6 sm:p-7">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
              <Palette className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                Brand studio
              </p>
              <p className="text-sm font-semibold">White-label setup</p>
            </div>
          </div>
          {/* "Published" pulse pill */}
          <motion.span
            className="flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/15 px-2.5 py-1 text-[11px] font-semibold text-primary shadow-[var(--shadow-glow)]"
            animate={reduce ? undefined : { opacity: [1, 0.6, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Check className="h-3 w-3" strokeWidth={3} />
            Published
          </motion.span>
        </div>

        {/* Body: settings panel + live preview */}
        <div className="mt-6 grid flex-1 gap-3 sm:grid-cols-[1.05fr_0.95fr]">
          {/* Settings panel */}
          <div className="flex flex-col gap-2.5">
            {/* Custom domain */}
            <div className="rounded-xl border border-border bg-card/60 p-3">
              <p className="mb-1.5 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                <Globe className="h-3 w-3" />
                Custom domain
              </p>
              <div className="flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/[0.06] px-2.5 py-2">
                <DomainTyper reduce={reduce} />
              </div>
            </div>

            {/* Logo slot */}
            <div className="rounded-xl border border-border bg-card/60 p-3">
              <p className="mb-1.5 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                <Upload className="h-3 w-3" />
                Logo
              </p>
              <div className="flex items-center gap-2.5">
                <motion.span
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border text-[11px] font-black"
                  animate={
                    reduce
                      ? undefined
                      : { borderColor: active.color, color: active.color }
                  }
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  style={
                    reduce
                      ? { borderColor: active.color, color: active.color }
                      : undefined
                  }
                >
                  YB
                </motion.span>
                <div className="min-w-0 flex-1 leading-tight">
                  <p className="truncate text-xs font-semibold">yourbrokerage.svg</p>
                  <p className="text-[10px] text-muted-foreground">Vector · transparent</p>
                </div>
              </div>
            </div>

            {/* Brand color swatches */}
            <div className="rounded-xl border border-border bg-card/60 p-3">
              <p className="mb-2 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                <Palette className="h-3 w-3" />
                Brand color
              </p>
              <div className="flex items-center gap-2">
                {brandColors.map((b, i) => (
                  <motion.button
                    key={b.name}
                    type="button"
                    tabIndex={-1}
                    aria-hidden
                    className="relative grid h-7 w-7 place-items-center rounded-full"
                    style={{ backgroundColor: b.swatch }}
                    animate={
                      reduce
                        ? undefined
                        : {
                            scale: brand === i ? 1.12 : 1,
                            boxShadow:
                              brand === i
                                ? `0 0 0 2px hsl(var(--background)), 0 0 0 4px ${b.color}`
                                : "0 0 0 0px transparent",
                          }
                    }
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {brand === i && (
                      <Check className="h-3.5 w-3.5 text-white drop-shadow" strokeWidth={3} />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Live branded-portal preview */}
          <div className="relative overflow-hidden rounded-xl border border-border bg-background/70">
            {/* preview top bar */}
            <div className="flex items-center justify-between border-b border-border/70 px-3 py-2">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
                <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
                <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
              </span>
              <span className="flex items-center gap-1 text-[9px] font-semibold text-muted-foreground">
                <Globe className="h-2.5 w-2.5" />
                Live preview
              </span>
            </div>

            {/* preview content — a branded login/portal that re-themes */}
            <div className="flex flex-col gap-2.5 p-3.5">
              {/* branded logo + name row */}
              <div className="flex items-center gap-2">
                <motion.span
                  className="grid h-6 w-6 place-items-center rounded-md text-[10px] font-black text-white"
                  animate={reduce ? undefined : { backgroundColor: active.color }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  style={reduce ? { backgroundColor: active.color } : undefined}
                >
                  YB
                </motion.span>
                <span className="text-xs font-bold tracking-tight">Your Brokerage</span>
              </div>

              {/* "balance" hero tile, themed */}
              <motion.div
                className="rounded-lg border p-2.5"
                animate={
                  reduce
                    ? undefined
                    : {
                        backgroundColor: `color-mix(in srgb, ${active.color} 12%, transparent)`,
                        borderColor: `color-mix(in srgb, ${active.color} 35%, transparent)`,
                      }
                }
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <p className="text-[8px] font-bold uppercase tracking-wider text-muted-foreground">
                  Equity balance
                </p>
                <motion.p
                  className="mt-0.5 text-base font-black tracking-tight tabular-nums"
                  animate={reduce ? undefined : { color: active.color }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  style={reduce ? { color: active.color } : undefined}
                >
                  $48,210
                </motion.p>
              </motion.div>

              {/* faux nav chips */}
              <div className="flex gap-1.5">
                <motion.span
                  className="rounded-md px-2 py-1 text-[9px] font-semibold text-white"
                  animate={reduce ? undefined : { backgroundColor: active.color }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  style={reduce ? { backgroundColor: active.color } : undefined}
                >
                  Deposit
                </motion.span>
                <span className="rounded-md border border-border bg-muted/60 px-2 py-1 text-[9px] font-semibold text-muted-foreground">
                  Trade
                </span>
                <span className="rounded-md border border-border bg-muted/60 px-2 py-1 text-[9px] font-semibold text-muted-foreground">
                  Wallet
                </span>
              </div>

              {/* themed CTA button */}
              <motion.div
                className="mt-0.5 grid place-items-center rounded-md py-1.5 text-[10px] font-bold text-white"
                animate={reduce ? undefined : { backgroundColor: active.color }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={reduce ? { backgroundColor: active.color } : undefined}
              >
                Open account
              </motion.div>
            </div>

            {/* re-theme sweep across the preview as the brand changes */}
            {!reduce && (
              <motion.span
                aria-hidden
                key={brand}
                className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3"
                style={{
                  background: `linear-gradient(to right, transparent, color-mix(in srgb, ${active.color} 22%, transparent), transparent)`,
                }}
                initial={{ x: 0, opacity: 0.9 }}
                animate={{ x: "400%", opacity: 0.9 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            )}
          </div>
        </div>

        {/* Deploy footer — progress to launch */}
        <div className="mt-3 flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/10 px-4 py-2.5">
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
            <Rocket className="h-3.5 w-3.5" />
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Deploying to {active.name.toLowerCase()} theme
              </p>
              <span className="text-[10px] font-semibold text-primary">Ready</span>
            </div>
            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <motion.div
                className="h-full rounded-full bg-primary"
                initial={{ width: reduce ? "100%" : "0%" }}
                animate={
                  reduce ? undefined : { width: ["0%", "100%", "100%", "0%"] }
                }
                transition={{
                  duration: 5,
                  times: [0, 0.45, 0.85, 1],
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
