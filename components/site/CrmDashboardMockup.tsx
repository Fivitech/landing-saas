"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowUpRight,
  LayoutDashboard,
  Search,
  Users,
  Wallet,
  FileCheck2,
  TrendingUp,
} from "lucide-react";

/**
 * Theme-adaptive, animated backoffice CRM dashboard mockup — a stylized
 * brokerage admin UI (sidebar, KPI tiles, equity chart, recent-accounts table)
 * built entirely from divs/SVG on the token system so it renders LIGHT in light
 * mode and DARK in dark mode. Replaces the dark `/accounts.png` screenshot.
 *
 * Mirrors the FeatureMockups conventions (glass, primary neon, grid texture)
 * and animates: a drawing equity chart, KPI count-ups, and a shimmering
 * "live" row. All motion respects `prefers-reduced-motion`.
 */

const panelGrid = {
  backgroundImage:
    "linear-gradient(to right, hsl(var(--primary)/0.06) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--primary)/0.06) 1px, transparent 1px)",
  backgroundSize: "32px 32px",
} as const;

/**
 * Animated number that counts up from 0 to `value` when scrolled into view,
 * then keeps "live ticking" with small +/- drifts so KPI tiles feel alive.
 */
function CountUp({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  drift = 0,
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  /** Max +/- drift applied on each live re-tick (0 disables live ticking). */
  drift?: number;
  className?: string;
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
    let current = 0;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        current = v;
        setDisplay(v);
      },
    });

    let timer: ReturnType<typeof setTimeout> | undefined;
    let liveControls: ReturnType<typeof animate> | undefined;
    if (drift > 0) {
      const tick = () => {
        if (stopped) return;
        const target = value + (Math.random() * 2 - 1) * drift;
        liveControls = animate(current, target, {
          duration: 1,
          ease: "easeInOut",
          onUpdate: (v) => {
            current = v;
            setDisplay(v);
          },
        });
        timer = setTimeout(tick, 2800);
      };
      timer = setTimeout(tick, 2200);
    }

    return () => {
      stopped = true;
      controls.stop();
      liveControls?.stop();
      if (timer) clearTimeout(timer);
    };
  }, [inView, value, reduce, drift]);

  const formatted = display.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Users, label: "Accounts" },
  { icon: Wallet, label: "Payments" },
  { icon: FileCheck2, label: "KYC queue" },
];

const kpis = [
  { label: "Active clients", value: 8420, prefix: "", suffix: "", delta: "+6.2%", drift: 14 },
  { label: "Deposits 24h", value: 312, prefix: "$", suffix: "K", delta: "+12.4%", drift: 6 },
  { label: "Open tickets", value: 47, prefix: "", suffix: "", delta: "-9.1%", drift: 2 },
];

const rows = [
  { name: "Amelia Hart", id: "#48201", status: "Verified", vol: "$184K" },
  { name: "Diego Marin", id: "#48207", status: "Pending", vol: "$92K" },
  { name: "Yuki Tanaka", id: "#48214", status: "Verified", vol: "$61K" },
  { name: "Omar Faruk", id: "#48220", status: "Review", vol: "$38K" },
];

const statusTone: Record<string, string> = {
  Verified: "border-primary/40 bg-primary/15 text-primary",
  Pending: "border-[hsl(var(--cyan-accent)/0.4)] bg-[hsl(var(--cyan-accent)/0.12)] text-[hsl(var(--cyan-accent))]",
  Review: "border-border bg-muted/70 text-muted-foreground",
};

/** Equity area-chart that draws its line + fill on view, then keeps a soft
 *  pulsing leading dot. */
function EquityChart() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();

  const points = "0,46 28,40 56,44 84,30 112,34 140,22 168,26 196,12 224,16 252,6";
  const linePts = points.split(" ");
  const last = linePts[linePts.length - 1].split(",").map(Number);

  return (
    <svg
      ref={ref}
      viewBox="0 0 252 56"
      preserveAspectRatio="none"
      className="h-full w-full overflow-visible"
      aria-hidden
    >
      <defs>
        <linearGradient id="crm-equity-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.28" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* baseline grid */}
      {[14, 28, 42].map((y) => (
        <line
          key={y}
          x1="0"
          y1={y}
          x2="252"
          y2={y}
          stroke="hsl(var(--border))"
          strokeWidth="0.5"
        />
      ))}

      {/* area fill */}
      <motion.polygon
        points={`0,56 ${points} 252,56`}
        fill="url(#crm-equity-fill)"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: reduce ? 1 : [1, 0.55, 1] } : {}}
        transition={
          reduce
            ? { duration: 0.6 }
            : { duration: 6, repeat: Infinity, delay: 1, ease: "easeInOut" }
        }
      />

      {/* drawing line — redraws softly on a loop */}
      <motion.polyline
        points={points}
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: reduce ? 1 : 0 }}
        animate={inView ? { pathLength: reduce ? 1 : [0, 1, 1] } : {}}
        transition={
          reduce
            ? { duration: 0 }
            : { duration: 6, times: [0, 0.25, 1], repeat: Infinity, ease: [0.22, 1, 0.36, 1] }
        }
      />

      {/* pulsing leading dot */}
      <motion.circle
        cx={last[0]}
        cy={last[1]}
        r="3"
        fill="hsl(var(--primary))"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: reduce ? 0 : 1.3 }}
      />
      {!reduce && (
        <motion.circle
          cx={last[0]}
          cy={last[1]}
          r="3"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
          initial={{ opacity: 0.6, scale: 1 }}
          animate={{ opacity: 0, scale: 2.6 }}
          style={{
            transformBox: "fill-box",
            transformOrigin: "center",
          }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut", delay: 1.3 }}
        />
      )}
    </svg>
  );
}

export function CrmDashboardMockup() {
  const reduce = useReducedMotion();

  return (
    <div className="glass-panel relative h-full w-full overflow-hidden rounded-2xl text-foreground">
      <div className="absolute inset-0 opacity-60" style={panelGrid} />
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative flex h-full">
        {/* Sidebar */}
        <aside className="hidden w-40 shrink-0 flex-col gap-1 border-r border-border/70 p-4 sm:flex">
          <div className="mb-4 flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-primary text-primary-foreground shadow-[var(--shadow-glow)]">
              <LayoutDashboard className="h-3.5 w-3.5" />
            </span>
            <span className="text-sm font-bold tracking-tight">Backoffice</span>
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium ${
                  item.active
                    ? "border border-primary/30 bg-primary/10 text-primary"
                    : "text-muted-foreground"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {item.label}
              </div>
            );
          })}
        </aside>

        {/* Main */}
        <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
          {/* Top bar */}
          <div className="flex items-center justify-between gap-3">
            <div className="leading-tight">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                Overview
              </p>
              <p className="text-sm font-semibold">Brokerage dashboard</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden items-center gap-1.5 rounded-lg border border-border bg-muted/50 px-2.5 py-1.5 text-[11px] text-muted-foreground sm:flex">
                <Search className="h-3 w-3" />
                Search
              </span>
              <span className="h-7 w-7 rounded-full border border-border bg-gradient-accent" />
            </div>
          </div>

          {/* KPI tiles */}
          <div className="mt-5 grid grid-cols-3 gap-2.5">
            {kpis.map((kpi, i) => {
              const down = kpi.delta.startsWith("-");
              return (
                <motion.div
                  key={kpi.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.06 * i }}
                  className="rounded-xl border border-border bg-card/60 p-3"
                >
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    {kpi.label}
                  </p>
                  <CountUp
                    value={kpi.value}
                    prefix={kpi.prefix}
                    suffix={kpi.suffix}
                    drift={kpi.drift}
                    className="mt-1 block text-lg font-black tracking-tight tabular-nums"
                  />
                  <span
                    className={`mt-0.5 inline-flex items-center gap-0.5 text-[10px] font-semibold ${
                      down ? "text-muted-foreground" : "text-primary"
                    }`}
                  >
                    <TrendingUp
                      className={`h-2.5 w-2.5 ${down ? "rotate-180" : ""}`}
                    />
                    {kpi.delta}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Chart */}
          <div className="mt-3 rounded-xl border border-border bg-card/40 p-3">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-[11px] font-semibold text-muted-foreground">
                Equity flow · 30d
              </p>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-primary">
                +18.6% <ArrowUpRight className="h-3 w-3" />
              </span>
            </div>
            <div className="h-14">
              <EquityChart />
            </div>
          </div>

          {/* Recent accounts table */}
          <div className="mt-3 flex-1 overflow-hidden rounded-xl border border-border">
            <div className="grid grid-cols-[1.6fr_0.8fr_1fr_0.8fr] gap-2 border-b border-border bg-muted/50 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              <span>Client</span>
              <span>ID</span>
              <span>Status</span>
              <span className="text-right">Volume</span>
            </div>
            {rows.map((r, i) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.06 * i }}
                className="relative grid grid-cols-[1.6fr_0.8fr_1fr_0.8fr] items-center gap-2 overflow-hidden border-b border-border/60 px-3 py-2.5 text-xs last:border-b-0"
              >
                {/* shimmer sweep cascading down the rows, one at a time */}
                {!reduce && (
                  <motion.span
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                    initial={{ x: 0 }}
                    animate={{ x: "400%" }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      repeatDelay: rows.length * 0.5,
                      delay: 0.5 * i,
                      ease: "easeInOut",
                    }}
                  />
                )}
                <span className="flex items-center gap-2 font-medium">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border border-border bg-muted/70 text-[9px] font-bold text-muted-foreground">
                    {r.name.charAt(0)}
                  </span>
                  <span className="truncate">{r.name}</span>
                </span>
                <span className="tabular-nums text-muted-foreground">{r.id}</span>
                <span>
                  <motion.span
                    className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${statusTone[r.status]}`}
                    animate={
                      reduce || r.status !== "Pending"
                        ? undefined
                        : { opacity: [1, 0.55, 1] }
                    }
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {r.status}
                  </motion.span>
                </span>
                <span className="text-right font-semibold tabular-nums">
                  {r.vol}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
