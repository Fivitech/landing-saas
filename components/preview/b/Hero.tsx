"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Activity, TrendingUp } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pb-24 pt-36 sm:px-6 lg:pt-44"
    >
      {/* Editorial asymmetric layout: oversized left column + off-canvas mockup right */}
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        {/* LEFT — oversized, left-aligned */}
        <div className="max-w-2xl">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 rounded-full border border-[#00E676]/30 bg-[#00E676]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#00b85f] dark:text-[#00E676]"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00E676]" />
            Fivi Technologies
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-7 text-[clamp(2.75rem,6vw,5rem)] font-extrabold leading-[0.98] tracking-tight text-neutral-900 dark:text-white"
          >
            The Complete{" "}
            <span className="bg-gradient-to-r from-[#00E676] via-[#00ffa3] to-[#00E676] bg-clip-text text-transparent [text-shadow:0_0_40px_rgba(0,230,118,0.25)]">
              Forex Brokerage
            </span>{" "}
            Solution
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-7 max-w-xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400"
          >
            Fivi Technologies streamlines your forex brokerage operations with
            our all-in-one platform. Manage clients, IBs, and trading all in
            one place.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/pricing"
              className="group inline-flex items-center gap-2 rounded-full bg-[#00E676] px-7 py-3.5 text-sm font-bold text-black shadow-[0_0_30px_rgba(0,230,118,0.45)] transition hover:shadow-[0_0_44px_rgba(0,230,118,0.7)]"
            >
              View Pricing
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-7 py-3.5 text-sm font-bold text-neutral-900 transition hover:border-[#00E676] hover:text-[#00b85f] dark:border-white/15 dark:text-white dark:hover:border-[#00E676] dark:hover:text-[#00E676]"
            >
              Request Demo
            </Link>
          </motion.div>
        </div>

        {/* RIGHT — abstract CSS/SVG product mockup, pushed off-canvas */}
        <motion.div
          initial={{ opacity: 0, x: 60, rotateY: 8 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:-mr-24 lg:translate-x-8"
          style={{ perspective: 1200 }}
        >
          <HeroMockup />
        </motion.div>
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="relative">
      {/* glow */}
      <div className="absolute -inset-10 -z-10 rounded-full bg-[#00E676]/20 blur-[90px]" />

      <div className="rotate-[-2deg] rounded-2xl border border-black/10 bg-white/80 p-5 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-[#0b0b0b]/80">
        {/* window chrome */}
        <div className="mb-4 flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#00E676]/80" />
          <span className="ml-3 text-[11px] font-medium text-neutral-400">
            fivitech · brokerage dashboard
          </span>
        </div>

        {/* stat row */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-black/5 bg-neutral-50 p-4 dark:border-white/5 dark:bg-white/[0.03]">
            <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wide text-neutral-400">
              <Activity className="h-3.5 w-3.5 text-[#00E676]" /> Volume 24h
            </div>
            <div className="mt-1.5 text-2xl font-extrabold text-neutral-900 dark:text-white">
              $4.2B
            </div>
            <div className="text-xs font-semibold text-[#00b85f] dark:text-[#00E676]">
              +12.4%
            </div>
          </div>
          <div className="rounded-xl border border-black/5 bg-neutral-50 p-4 dark:border-white/5 dark:bg-white/[0.03]">
            <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wide text-neutral-400">
              <TrendingUp className="h-3.5 w-3.5 text-[#00E676]" /> Clients
            </div>
            <div className="mt-1.5 text-2xl font-extrabold text-neutral-900 dark:text-white">
              18,402
            </div>
            <div className="text-xs font-semibold text-[#00b85f] dark:text-[#00E676]">
              +862 today
            </div>
          </div>
        </div>

        {/* chart */}
        <div className="mt-3 rounded-xl border border-black/5 bg-neutral-50 p-4 dark:border-white/5 dark:bg-white/[0.03]">
          <svg viewBox="0 0 320 110" className="h-28 w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="bArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00E676" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#00E676" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,80 C40,70 60,40 90,48 C120,56 140,20 175,30 C210,40 235,14 270,24 C295,31 310,18 320,22"
              fill="none"
              stroke="#00E676"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M0,80 C40,70 60,40 90,48 C120,56 140,20 175,30 C210,40 235,14 270,24 C295,31 310,18 320,22 L320,110 L0,110 Z"
              fill="url(#bArea)"
            />
          </svg>
        </div>

        {/* bars */}
        <div className="mt-3 flex items-end gap-1.5">
          {[40, 65, 35, 80, 55, 92, 48, 70, 60, 88].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-gradient-to-t from-[#00E676]/30 to-[#00E676]"
              style={{ height: `${h * 0.5}px` }}
            />
          ))}
        </div>
      </div>

      {/* floating glass badge */}
      <div className="absolute -bottom-5 -left-6 rotate-[3deg] rounded-xl border border-black/10 bg-white/85 px-4 py-2.5 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-[#0b0b0b]/85">
        <div className="text-[10px] font-medium uppercase tracking-wide text-neutral-400">
          IB Commission
        </div>
        <div className="text-sm font-bold text-neutral-900 dark:text-white">
          $128,940 <span className="text-[#00b85f] dark:text-[#00E676]">paid</span>
        </div>
      </div>
    </div>
  );
}
