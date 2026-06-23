"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Users, Wallet } from "lucide-react";

const fadeUp = {
  initial: { y: 24, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pt-24">
      {/* duotone ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-[-10%] h-[480px] w-[680px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,0.18),transparent)] dark:bg-[radial-gradient(closest-side,rgba(99,102,241,0.32),transparent)]" />
        <div className="absolute right-[8%] top-[24%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(closest-side,rgba(34,211,238,0.14),transparent)] dark:bg-[radial-gradient(closest-side,rgba(34,211,238,0.24),transparent)]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* copy */}
        <div>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/[0.06] px-3.5 py-1.5 text-xs font-medium text-indigo-700 dark:border-indigo-400/20 dark:bg-indigo-400/[0.08] dark:text-indigo-200"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Fivi Technologies
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="mt-5 font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight text-slate-900 dark:text-white sm:text-6xl"
          >
            The Complete{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-500 to-cyan-400 bg-clip-text text-transparent dark:from-indigo-400 dark:via-violet-400 dark:to-cyan-300">
              Forex Brokerage
            </span>{" "}
            Solution
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg"
          >
            Fivi Technologies streamlines your forex brokerage operations with
            our all-in-one platform. Manage clients, IBs, and trading all in one
            place.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/pricing"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:shadow-xl hover:shadow-indigo-500/35"
            >
              View Pricing
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-900/10 bg-white/60 px-5 py-3 text-sm font-semibold text-slate-800 backdrop-blur transition hover:border-slate-900/20 hover:bg-white dark:border-white/15 dark:bg-white/[0.04] dark:text-white dark:hover:bg-white/[0.08]"
            >
              Request Demo
            </Link>
          </motion.div>
        </div>

        {/* abstract product mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="relative"
        >
          <ProductMockup />
        </motion.div>
      </div>
    </section>
  );
}

function ProductMockup() {
  return (
    <div className="relative rounded-[1.75rem] border border-slate-900/[0.08] bg-white/80 p-4 shadow-2xl shadow-indigo-500/10 backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.03] dark:shadow-black/40">
      {/* top stat row */}
      <div className="mb-3 grid grid-cols-3 gap-3">
        {[
          { icon: Users, label: "Active clients", value: "4,820", tint: "indigo" },
          { icon: Wallet, label: "Deposits", value: "$1.2M", tint: "cyan" },
          { icon: TrendingUp, label: "Volume", value: "+18%", tint: "violet" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-slate-900/[0.06] bg-slate-50/80 p-3 dark:border-white/[0.06] dark:bg-white/[0.03]"
          >
            <s.icon
              className={
                "h-4 w-4 " +
                (s.tint === "indigo"
                  ? "text-indigo-500"
                  : s.tint === "cyan"
                  ? "text-cyan-500"
                  : "text-violet-500")
              }
            />
            <p className="mt-2 font-display text-lg font-bold text-slate-900 dark:text-white">
              {s.value}
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* chart panel */}
      <div className="rounded-2xl border border-slate-900/[0.06] bg-gradient-to-b from-slate-50/80 to-white/40 p-4 dark:border-white/[0.06] dark:from-white/[0.04] dark:to-transparent">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">
            Trading volume
          </p>
          <span className="rounded-md bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
            Live
          </span>
        </div>
        <Sparkline />
      </div>

      {/* floating IB chip */}
      <motion.div
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute -right-3 bottom-6 rounded-2xl border border-slate-900/[0.08] bg-white/90 px-3.5 py-2.5 shadow-xl backdrop-blur dark:border-white/[0.1] dark:bg-[#13131c]/90"
      >
        <p className="text-[10px] uppercase tracking-wide text-slate-400">
          IB network
        </p>
        <p className="font-display text-sm font-bold text-slate-900 dark:text-white">
          5 levels deep
        </p>
      </motion.div>
    </div>
  );
}

function Sparkline() {
  const pts = [22, 30, 26, 38, 34, 48, 44, 58, 62, 56, 70, 78];
  const w = 320;
  const h = 88;
  const max = Math.max(...pts);
  const step = w / (pts.length - 1);
  const line = pts
    .map((p, i) => `${i * step},${h - (p / max) * (h - 8) - 4}`)
    .join(" ");
  const area = `0,${h} ${line} ${w},${h}`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-[88px] w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="cAreaFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgb(99,102,241)" stopOpacity="0.32" />
          <stop offset="100%" stopColor="rgb(34,211,238)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="cLineStroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgb(99,102,241)" />
          <stop offset="100%" stopColor="rgb(34,211,238)" />
        </linearGradient>
      </defs>
      <polygon points={area} fill="url(#cAreaFill)" />
      <polyline
        points={line}
        fill="none"
        stroke="url(#cLineStroke)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
