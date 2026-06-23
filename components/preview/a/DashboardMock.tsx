"use client";

import { Glass } from "./primitives";

/**
 * Abstract product/dashboard mockup — pure CSS + SVG, no external images.
 * A faux CRM dashboard: stat tiles, an equity line chart, and an IB tree.
 */
export function DashboardMock() {
  return (
    <Glass className="overflow-hidden p-3 shadow-[0_30px_80px_-30px_rgba(20,40,120,0.45)]">
      {/* window chrome */}
      <div className="flex items-center gap-1.5 px-2 pb-3 pt-1">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        <span className="ml-3 text-[10px] font-medium tracking-wide text-neutral-500">
          app.fivitech.io / dashboard
        </span>
      </div>

      <div className="rounded-xl border border-black/[0.05] bg-white/70 p-4 dark:border-white/[0.06] dark:bg-black/30">
        {/* stat tiles */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { k: "Active Clients", v: "2,481", d: "+12%" },
            { k: "Volume (lots)", v: "184.2k", d: "+8%" },
            { k: "Net Deposits", v: "$1.9M", d: "+21%" },
          ].map((s) => (
            <div
              key={s.k}
              className="rounded-lg border border-black/[0.05] bg-white/80 p-3 dark:border-white/[0.06] dark:bg-white/[0.03]"
            >
              <p className="text-[9px] font-medium uppercase tracking-wide text-neutral-500">
                {s.k}
              </p>
              <p className="mt-1 text-base font-bold text-neutral-900 dark:text-white">
                {s.v}
              </p>
              <p className="text-[10px] font-semibold text-[hsl(210_100%_50%)]">
                {s.d}
              </p>
            </div>
          ))}
        </div>

        {/* equity chart */}
        <div className="mt-3 rounded-lg border border-black/[0.05] bg-white/80 p-3 dark:border-white/[0.06] dark:bg-white/[0.03]">
          <div className="mb-1 flex items-center justify-between">
            <p className="text-[10px] font-semibold text-neutral-600 dark:text-neutral-300">
              Equity curve
            </p>
            <p className="text-[10px] font-medium text-neutral-500">30d</p>
          </div>
          <svg viewBox="0 0 320 80" className="h-20 w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="vaFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(210 100% 56%)" stopOpacity="0.35" />
                <stop offset="100%" stopColor="hsl(210 100% 56%)" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="vaLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="hsl(210 100% 56%)" />
                <stop offset="100%" stopColor="hsl(265 90% 66%)" />
              </linearGradient>
            </defs>
            <path
              d="M0 64 L40 58 L80 60 L120 44 L160 48 L200 30 L240 34 L280 18 L320 12 L320 80 L0 80 Z"
              fill="url(#vaFill)"
            />
            <path
              d="M0 64 L40 58 L80 60 L120 44 L160 48 L200 30 L240 34 L280 18 L320 12"
              fill="none"
              stroke="url(#vaLine)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* IB tree rows */}
        <div className="mt-3 space-y-1.5">
          {[
            { n: "Master IB — Helios Group", w: "92%", v: "$420k" },
            { n: "Sub-IB — North Desk", w: "64%", v: "$210k" },
            { n: "Sub-IB — Pacific", w: "38%", v: "$96k" },
          ].map((r, i) => (
            <div key={r.n} className="flex items-center gap-2" style={{ paddingLeft: i * 10 }}>
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-black/[0.06] dark:bg-white/[0.06]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[hsl(210_100%_56%)] to-[hsl(265_90%_66%)]"
                  style={{ width: r.w }}
                />
              </div>
              <span className="w-12 text-right text-[9px] font-semibold text-neutral-600 dark:text-neutral-300">
                {r.v}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Glass>
  );
}
