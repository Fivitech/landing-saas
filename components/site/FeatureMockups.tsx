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

/**
 * Counts up to a dollar value once in view, then (optionally) keeps "live
 * ticking" by drifting +/- a few units on a loop so the figure feels alive.
 * Respects reduced motion.
 */
function CountUpMoney({
  value,
  className,
  live = false,
  drift = 0,
}: {
  value: number;
  className?: string;
  /** When true, keeps re-animating to small drifted targets after the first run. */
  live?: boolean;
  /** Max +/- drift applied to `value` on each live tick. */
  drift?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView || reduce) {
      setDisplay(value);
      return;
    }
    let stopped = false;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });

    let timer: ReturnType<typeof setTimeout> | undefined;
    let liveControls: ReturnType<typeof animate> | undefined;
    if (live && drift > 0) {
      const tick = () => {
        if (stopped) return;
        const target = value + Math.round((Math.random() * 2 - 1) * drift);
        liveControls = animate(display, target, {
          duration: 1,
          ease: "easeInOut",
          onUpdate: (v) => setDisplay(Math.round(v)),
        });
        timer = setTimeout(tick, 2600);
      };
      // start the live drift after the initial count-up settles
      timer = setTimeout(tick, 2000);
    }

    return () => {
      stopped = true;
      controls.stop();
      liveControls?.stop();
      if (timer) clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value, reduce, live, drift]);

  return (
    <span ref={ref} className={className}>
      ${display.toLocaleString("en-US")}
    </span>
  );
}

/**
 * Multi-level referral tree + tiered-commission illustration.
 *
 * Layout strategy: a single coordinate space (0..100 x, 0..100 y) drives BOTH
 * the SVG connectors and the absolutely-positioned node chips, so connector
 * endpoints always land on node centers regardless of container size. Nodes are
 * placed with `left/top` percentages that mirror the SVG point table below.
 */

/** Shared node geometry — percentages within the tree's relative box. */
const ibNodes = {
  master: { x: 50, y: 12, label: "Master IB", rate: "$12", level: "L1" },
  ibA: { x: 22, y: 50, label: "Regional IB", rate: "$8", level: "L2" },
  ibB: { x: 78, y: 50, label: "Regional IB", rate: "$8", level: "L2" },
} as const;

const ibLeaves = [
  { x: 9, y: 90, label: "Sub-IB", rate: "$5" },
  { x: 35, y: 90, label: "Client" },
  { x: 65, y: 90, label: "Client" },
  { x: 91, y: 90, label: "Sub-IB", rate: "$5" },
] as const;

/** Connector edges drawn in the same 0..100 space (parent -> child). */
const ibEdges = [
  { from: ibNodes.master, to: ibNodes.ibA },
  { from: ibNodes.master, to: ibNodes.ibB },
  { from: ibNodes.ibA, to: ibLeaves[0] },
  { from: ibNodes.ibA, to: ibLeaves[1] },
  { from: ibNodes.ibB, to: ibLeaves[2] },
  { from: ibNodes.ibB, to: ibLeaves[3] },
] as const;

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
            3 levels
          </span>
        </div>

        {/* Level rail + referral tree */}
        <div className="mt-6 flex flex-1 gap-3">
          {/* Level labels rail */}
          <div className="flex w-8 shrink-0 flex-col justify-between py-1 text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
            <span className="text-primary/80">L1</span>
            <span>L2</span>
            <span>L3</span>
          </div>

          {/* Tree canvas */}
          <div className="relative flex-1">
            {/* connector lines — same 0..100 space as the nodes */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full text-primary/40"
              viewBox="0 0 100 100"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden
            >
              {ibEdges.map((e, i) => {
                const d = `M ${e.from.x} ${e.from.y} C ${e.from.x} ${
                  (e.from.y + e.to.y) / 2
                }, ${e.to.x} ${(e.from.y + e.to.y) / 2}, ${e.to.x} ${e.to.y}`;
                return (
                  <motion.path
                    key={`${e.from.x}-${e.to.x}`}
                    d={d}
                    stroke="currentColor"
                    strokeWidth="0.6"
                    vectorEffect="non-scaling-stroke"
                    initial={{ pathLength: reduce ? 1 : 0, opacity: reduce ? 1 : 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: 0.1 + 0.1 * i,
                      ease: "easeInOut",
                    }}
                  />
                );
              })}
              {/* travelling commission pulse along the master -> IB edges */}
              {!reduce &&
                ibEdges.slice(0, 2).map((e, i) => {
                  const d = `M ${e.from.x} ${e.from.y} C ${e.from.x} ${
                    (e.from.y + e.to.y) / 2
                  }, ${e.to.x} ${(e.from.y + e.to.y) / 2}, ${e.to.x} ${e.to.y}`;
                  return (
                    <motion.circle
                      key={`pulse-${i}`}
                      r="1.4"
                      fill="hsl(var(--primary))"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 1, 0] }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        repeatDelay: 1.6,
                        delay: 1 + i * 0.5,
                        ease: "easeInOut",
                      }}
                    >
                      <animateMotion
                        dur="1.8s"
                        begin={`${1 + i * 0.5}s`}
                        repeatCount="indefinite"
                        keyTimes="0;1"
                        path={d}
                      />
                    </motion.circle>
                  );
                })}
            </svg>

            {/* nodes */}
            <Node node={ibNodes.master} accent pulse={!reduce} pulseDelay={0.3} />
            <Node node={ibNodes.ibA} pulse={!reduce} pulseDelay={0.7} />
            <Node node={ibNodes.ibB} pulse={!reduce} pulseDelay={0.95} />

            {/* leaves */}
            {ibLeaves.map((leaf, i) => (
              <Leaf key={`${leaf.x}-${i}`} leaf={leaf} delay={1 + 0.12 * i} reduce={reduce} />
            ))}
          </div>
        </div>

        {/* Tiered commission strip */}
        <div className="mt-5">
          <div className="mb-2 flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            <span>Per-lot rebate by tier</span>
            <span className="tabular-nums text-primary">
              <CountUpMoney value={25} className="font-bold" />/lot total
            </span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[
              { t: "T1", v: "$12", w: "100%" },
              { t: "T2", v: "$7", w: "58%" },
              { t: "T3", v: "$4", w: "34%" },
              { t: "T4", v: "$2", w: "18%" },
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
                <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-muted">
                  <motion.div
                    className="h-full rounded-full bg-primary/70"
                    initial={{ width: reduce ? tier.w : 0 }}
                    whileInView={{ width: tier.w }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 + 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

type IbNode = { x: number; y: number; label: string; rate?: string; level?: string };

/** A tree node chip, centered on its (x,y) percentage point. */
function Node({
  node,
  accent = false,
  pulse = false,
  pulseDelay = 0,
}: {
  node: IbNode;
  accent?: boolean;
  pulse?: boolean;
  pulseDelay?: number;
}) {
  return (
    <motion.div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${node.x}%`, top: `${node.y}%` }}
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: pulseDelay }}
    >
      <motion.div
        className={`flex items-center gap-1.5 whitespace-nowrap rounded-lg border px-2.5 py-1.5 text-[11px] font-semibold shadow-sm ${
          accent
            ? "border-primary/40 bg-primary/15 text-primary"
            : "border-border bg-card/90 text-foreground"
        }`}
        animate={
          pulse
            ? {
                boxShadow: [
                  "0 0 0 0 hsl(var(--primary)/0)",
                  "0 0 0 4px hsl(var(--primary)/0.18)",
                  "0 0 0 0 hsl(var(--primary)/0)",
                ],
              }
            : undefined
        }
        transition={{
          duration: 1.8,
          repeat: Infinity,
          repeatDelay: 1.4,
          delay: pulseDelay,
          ease: "easeInOut",
        }}
      >
        <span className={`h-1.5 w-1.5 rounded-full ${accent ? "bg-primary" : "bg-primary/50"}`} />
        {node.label}
        {node.rate && (
          <span
            className={`ml-0.5 rounded-md px-1 py-px text-[9px] font-bold tabular-nums ${
              accent ? "bg-primary/20 text-primary" : "bg-primary/10 text-primary"
            }`}
          >
            {node.rate}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}

/** A leaf (sub-IB or end client), centered on its (x,y) percentage point. */
function Leaf({
  leaf,
  delay,
  reduce,
}: {
  leaf: { x: number; y: number; label: string; rate?: string };
  delay: number;
  reduce: boolean | null;
}) {
  const isSub = Boolean(leaf.rate);
  return (
    <motion.div
      className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
      style={{ left: `${leaf.x}%`, top: `${leaf.y}%` }}
      initial={{ opacity: 0, y: reduce ? 0 : 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay }}
    >
      <span
        className={`grid h-6 w-6 place-items-center rounded-md border ${
          isSub
            ? "border-primary/30 bg-primary/10"
            : "border-border bg-muted/70"
        }`}
      >
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            isSub ? "bg-primary/70" : "bg-muted-foreground/60"
          }`}
        />
      </span>
      <span className="text-[8px] font-semibold uppercase tracking-wide text-muted-foreground">
        {leaf.label}
      </span>
    </motion.div>
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
        <div className="relative mt-6 overflow-hidden rounded-xl border border-primary/20 bg-primary/10 px-4 py-3">
          {/* slow shimmer sweep across the total card */}
          {!reduce && (
            <motion.span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-primary/15 to-transparent"
              initial={{ x: 0 }}
              animate={{ x: "500%" }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2.4, ease: "easeInOut" }}
            />
          )}
          <div className="relative flex items-end justify-between">
            <div>
              <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Total rebates payable
                <motion.span
                  className="h-1.5 w-1.5 rounded-full bg-primary"
                  animate={reduce ? undefined : { opacity: [1, 0.3, 1], scale: [1, 0.8, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                />
              </p>
              <CountUpMoney
                value={22821}
                live
                drift={140}
                className="mt-1 block text-2xl font-black tracking-tight tabular-nums"
              />
            </div>
            {/* tiny live sparkline */}
            <svg viewBox="0 0 64 24" className="h-7 w-16 overflow-visible" aria-hidden>
              <motion.polyline
                points="0,18 11,14 22,16 33,8 44,11 55,4 64,6"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: reduce ? 1 : 0 }}
                animate={reduce ? undefined : { pathLength: [0, 1, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1.6, ease: "easeInOut" }}
              />
            </svg>
          </div>
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
              className="relative grid grid-cols-[1.4fr_0.7fr_0.7fr_0.9fr] items-center gap-2 overflow-hidden border-b border-border/60 px-3 py-2.5 text-xs last:border-b-0"
            >
              {/* shimmer sweep cascading down the rows, one at a time */}
              {!reduce && (
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                  initial={{ x: 0 }}
                  animate={{ x: "400%" }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    repeatDelay: rows.length * 0.6,
                    delay: 0.6 * i,
                    ease: "easeInOut",
                  }}
                />
              )}
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
