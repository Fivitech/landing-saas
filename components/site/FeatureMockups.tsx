"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { Network, Repeat2 } from "lucide-react";

/**
 * Styled, on-brand product-UI illustrations for feature sections that have no
 * real screenshot. These are decorative div/SVG mockups built on the token
 * system (primary neon, glass, grid texture) — not screenshots.
 */

const panelGrid = {
  backgroundImage:
    "linear-gradient(to right, hsl(var(--primary)/0.07) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--primary)/0.07) 1px, transparent 1px)",
  backgroundSize: "32px 32px",
} as const;

/** Counts up to a dollar value once in view (respects reduced motion). */
function CountUpMoney({ value, className }: { value: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView || reduce) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, reduce]);

  return (
    <span ref={ref} className={className}>
      ${display.toLocaleString("en-US")}
    </span>
  );
}

/** Multi-level referral tree + tiered-commission illustration. */
export function IbPortalMockup() {
  const reduce = useReducedMotion();
  return (
    <div className="glass-panel relative h-full w-full overflow-hidden rounded-2xl">
      <div className="absolute inset-0 opacity-60" style={panelGrid} />
      <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative flex h-full flex-col p-6 sm:p-7">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
              <Network className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                Partner network
              </p>
              <p className="text-sm font-semibold">Multi-level IB tree</p>
            </div>
          </div>
          <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
            4 tiers
          </span>
        </div>

        {/* Referral tree */}
        <div className="relative mt-7 flex-1">
          {/* connector lines */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full text-primary/35"
            viewBox="0 0 320 200"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden
          >
            {[
              "M160 28 L80 84",
              "M160 28 L160 84",
              "M160 28 L240 84",
              "M80 108 L48 162",
              "M80 108 L112 162",
              "M240 108 L240 162",
            ].map((d, i) => (
              <motion.path
                key={d}
                d={d}
                stroke="currentColor"
                strokeWidth="1.5"
                initial={{ pathLength: reduce ? 1 : 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.12 * i, ease: "easeInOut" }}
              />
            ))}
          </svg>

          {/* root */}
          <Node className="left-1/2 top-2 -translate-x-1/2" label="Master IB" accent pulse={!reduce} pulseDelay={0} />
          {/* tier 2 */}
          <Node className="left-[14%] top-[40%]" label="Sub-IB" pulse={!reduce} pulseDelay={0.5} />
          <Node className="left-1/2 top-[40%] -translate-x-1/2" label="Sub-IB" pulse={!reduce} pulseDelay={0.8} />
          <Node className="right-[14%] top-[40%]" label="Sub-IB" pulse={!reduce} pulseDelay={1.1} />
          {/* tier 3 leaves */}
          <Leaf className="left-[6%] bottom-1" />
          <Leaf className="left-[30%] bottom-1" />
          <Leaf className="right-[16%] bottom-1" />
        </div>

        {/* Commission tiers */}
        <div className="mt-5 grid grid-cols-4 gap-2">
          {[
            { t: "T1", v: "$12" },
            { t: "T2", v: "$7" },
            { t: "T3", v: "$4" },
            { t: "T4", v: "$2" },
          ].map((tier, i) => (
            <motion.div
              key={tier.t}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="rounded-xl border border-border bg-card/60 px-2.5 py-2 text-center"
            >
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                {tier.t}
              </p>
              <p className="mt-0.5 text-sm font-bold text-primary">{tier.v}</p>
              <p className="text-[9px] text-muted-foreground">/ lot</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Node({
  className,
  label,
  accent = false,
  pulse = false,
  pulseDelay = 0,
}: {
  className: string;
  label: string;
  accent?: boolean;
  pulse?: boolean;
  pulseDelay?: number;
}) {
  return (
    <div className={`absolute ${className}`}>
      <motion.div
        className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[11px] font-semibold shadow-sm ${
          accent
            ? "border-primary/40 bg-primary/15 text-primary"
            : "border-border bg-card/80 text-foreground"
        }`}
        animate={
          pulse
            ? { boxShadow: ["0 0 0 0 hsl(var(--primary)/0)", "0 0 0 4px hsl(var(--primary)/0.18)", "0 0 0 0 hsl(var(--primary)/0)"] }
            : undefined
        }
        transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 1.4, delay: pulseDelay, ease: "easeInOut" }}
      >
        <span
          className={`h-1.5 w-1.5 rounded-full ${accent ? "bg-primary" : "bg-primary/50"}`}
        />
        {label}
      </motion.div>
    </div>
  );
}

function Leaf({ className }: { className: string }) {
  return (
    <div className={`absolute ${className}`}>
      <div className="grid h-6 w-6 place-items-center rounded-md border border-border bg-muted/70">
        <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />
      </div>
    </div>
  );
}

/** Rebate / commission payout summary illustration. */
export function RebateMockup() {
  const reduce = useReducedMotion();
  const rows = [
    { ib: "Apex Partners", lots: "1,284", rate: "$9.00", payout: "$11,556" },
    { ib: "Northwind IB", lots: "842", rate: "$7.50", payout: "$6,315" },
    { ib: "Meridian Group", lots: "560", rate: "$6.00", payout: "$3,360" },
    { ib: "Solace Markets", lots: "318", rate: "$5.00", payout: "$1,590" },
  ];

  return (
    <div className="glass-panel relative h-full w-full overflow-hidden rounded-2xl">
      <div className="absolute inset-0 opacity-60" style={panelGrid} />
      <div className="absolute -left-12 -top-12 h-44 w-44 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative flex h-full flex-col p-6 sm:p-7">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
              <Repeat2 className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                Rebate run
              </p>
              <p className="text-sm font-semibold">June payout summary</p>
            </div>
          </div>
          <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
            Auto
          </span>
        </div>

        {/* total */}
        <div className="mt-6 rounded-xl border border-primary/20 bg-primary/10 px-4 py-3">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Total rebates payable
          </p>
          <CountUpMoney
            value={22821}
            className="mt-1 block text-2xl font-black tracking-tight tabular-nums"
          />
        </div>

        {/* table */}
        <div className="mt-5 flex-1 overflow-hidden rounded-xl border border-border">
          <div className="grid grid-cols-[1.4fr_0.7fr_0.7fr_0.9fr] gap-2 border-b border-border bg-muted/50 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            <span>Introducing broker</span>
            <span className="text-right">Lots</span>
            <span className="text-right">Rate</span>
            <span className="text-right">Payout</span>
          </div>
          {rows.map((r, i) => (
            <motion.div
              key={r.ib}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.06 * i }}
              className="grid grid-cols-[1.4fr_0.7fr_0.7fr_0.9fr] items-center gap-2 border-b border-border/60 px-3 py-2.5 text-xs last:border-b-0"
            >
              <span className="flex items-center gap-2 font-medium">
                <motion.span
                  className="h-1.5 w-1.5 rounded-full bg-primary"
                  animate={reduce ? undefined : { scale: [1, 1.9, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: rows.length * 0.55,
                    delay: 0.55 * i,
                    ease: "easeInOut",
                  }}
                />
                <span className="truncate">{r.ib}</span>
              </span>
              <span className="text-right tabular-nums text-muted-foreground">{r.lots}</span>
              <span className="text-right tabular-nums text-muted-foreground">{r.rate}</span>
              <span className="text-right font-semibold tabular-nums text-primary">
                {r.payout}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
