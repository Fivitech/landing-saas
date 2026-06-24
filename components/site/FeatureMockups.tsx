"use client";

import { motion } from "framer-motion";
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

/** Multi-level referral tree + tiered-commission illustration. */
export function IbPortalMockup() {
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
            <path d="M160 28 L80 84" stroke="currentColor" strokeWidth="1.5" />
            <path d="M160 28 L160 84" stroke="currentColor" strokeWidth="1.5" />
            <path d="M160 28 L240 84" stroke="currentColor" strokeWidth="1.5" />
            <path d="M80 108 L48 162" stroke="currentColor" strokeWidth="1.5" />
            <path d="M80 108 L112 162" stroke="currentColor" strokeWidth="1.5" />
            <path d="M240 108 L240 162" stroke="currentColor" strokeWidth="1.5" />
          </svg>

          {/* root */}
          <Node className="left-1/2 top-2 -translate-x-1/2" label="Master IB" accent />
          {/* tier 2 */}
          <Node className="left-[14%] top-[40%]" label="Sub-IB" />
          <Node className="left-1/2 top-[40%] -translate-x-1/2" label="Sub-IB" />
          <Node className="right-[14%] top-[40%]" label="Sub-IB" />
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
}: {
  className: string;
  label: string;
  accent?: boolean;
}) {
  return (
    <div className={`absolute ${className}`}>
      <div
        className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[11px] font-semibold shadow-sm ${
          accent
            ? "border-primary/40 bg-primary/15 text-primary"
            : "border-border bg-card/80 text-foreground"
        }`}
      >
        <span
          className={`h-1.5 w-1.5 rounded-full ${accent ? "bg-primary" : "bg-primary/50"}`}
        />
        {label}
      </div>
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
          <p className="mt-1 text-2xl font-black tracking-tight">$22,821</p>
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
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
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
