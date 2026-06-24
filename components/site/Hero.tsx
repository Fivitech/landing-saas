"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Activity, ArrowRight, TrendingUp } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-24 pt-36 sm:px-6 lg:pt-44">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-2xl">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show" className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Fivi Technologies
          </motion.div>
          <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="show" className="mt-7 text-[clamp(2.75rem,6vw,5rem)] font-extrabold leading-[0.98] tracking-tight">
            The Complete <span className="bg-gradient-text bg-clip-text text-transparent [text-shadow:0_0_40px_hsl(var(--primary)/0.25)]">Forex Brokerage</span> Solution
          </motion.h1>
          <motion.p custom={2} variants={fadeUp} initial="hidden" animate="show" className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Fivitech streamlines your brokerage operations with one platform for CRM, client area, IB networks, KYC, payments, and trading workflows.
          </motion.p>
          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="show" className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/pricing" className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:scale-[1.02]">
              View Pricing
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-bold transition hover:border-primary hover:text-primary">
              Request Demo
            </Link>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, x: 60, rotateY: 8 }} animate={{ opacity: 1, x: 0, rotateY: 0 }} transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }} className="relative lg:-mr-24 lg:translate-x-8" style={{ perspective: 1200 }}>
          <HeroMockup />
        </motion.div>
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-10 -z-10 rounded-full bg-primary/20 blur-[90px]" />
      <div className="rotate-[-2deg] rounded-2xl border border-border bg-card/80 p-3 shadow-2xl backdrop-blur-xl sm:p-5">
        <div className="mb-4 flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-primary/80" />
          <span className="ml-3 text-[11px] font-medium text-muted-foreground">fivitech · brokerage dashboard</span>
        </div>
        <div className="overflow-hidden rounded-xl border border-border bg-background">
          <Image src="/accounts.png" alt="Fivitech CRM dashboard preview" width={1000} height={600} priority className="h-auto w-full" />
        </div>
      </div>
      <div className="absolute -bottom-5 -left-6 rotate-[3deg] rounded-xl border border-border bg-card/85 px-4 py-2.5 shadow-xl backdrop-blur-xl">
        <div className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">IB Commission</div>
        <div className="text-sm font-bold">$128,940 <span className="text-primary">paid</span></div>
      </div>
      <div className="absolute -right-4 top-10 rounded-xl border border-border bg-card/85 px-4 py-3 shadow-xl backdrop-blur-xl">
        <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wide text-muted-foreground"><Activity className="h-3.5 w-3.5 text-primary" /> Volume 24h</div>
        <div className="text-xl font-extrabold">$4.2B <span className="text-xs text-primary"><TrendingUp className="inline h-3 w-3" /> +12.4%</span></div>
      </div>
    </div>
  );
}
