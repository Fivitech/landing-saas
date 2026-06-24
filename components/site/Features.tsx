"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { features, type SiteFeature } from "@/data/site";

export function Features({ compact = false }: { compact?: boolean }) {
  const rows = compact ? features.slice(0, 4) : features;

  return (
    <section id="features" className="relative px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Capabilities</p>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-tight tracking-tight">Powerful tools for modern forex brokers</h2>
        </motion.div>
        <div className="mt-20 space-y-20 lg:space-y-28">
          {rows.map((feature, index) => <FeatureRow key={feature.title} feature={feature} index={index} reversed={index % 2 === 1} />)}
        </div>
      </div>
    </section>
  );
}

function FeatureRow({ feature, index, reversed }: { feature: SiteFeature; index: number; reversed: boolean }) {
  const Icon = feature.icon;
  const num = String(index + 1).padStart(2, "0");

  return (
    <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${reversed ? "lg:[direction:rtl]" : ""}`}>
      <motion.div initial={{ opacity: 0, x: reversed ? 40 : -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="[direction:ltr]">
        <div className="flex items-center gap-4">
          <span className="text-5xl font-black text-muted/80 dark:text-white/10">{num}</span>
          <span className="grid h-12 w-12 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary"><Icon className="h-6 w-6" /></span>
        </div>
        <h3 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">{feature.title}</h3>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">{feature.body}</p>
        <ul className="mt-6 flex flex-wrap gap-2.5">
          {feature.bullets.map((bullet) => <li key={bullet} className="rounded-full border border-border bg-muted/50 px-3.5 py-1.5 text-sm font-medium text-muted-foreground">{bullet}</li>)}
        </ul>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="[direction:ltr]">
        <FeatureVisual feature={feature} />
      </motion.div>
    </div>
  );
}

function FeatureVisual({ feature }: { feature: SiteFeature }) {
  const Icon = feature.icon;
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card">
      <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-primary/20 blur-3xl" />
      {feature.image ? (
        <Image src={feature.image} alt={`${feature.title} mockup`} width={900} height={650} className="h-full w-full object-cover object-left-top opacity-95" />
      ) : (
        <div className="absolute inset-0 grid place-items-center p-8">
          <div className="w-full max-w-md rounded-2xl border border-border bg-background/70 p-5 shadow-2xl backdrop-blur-xl">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{feature.visualLabel}</span>
            </div>
            <div className="grid gap-3">
              <div className="h-20 rounded-xl border border-primary/20 bg-primary/10" />
              <div className="grid grid-cols-3 gap-3">
                <div className="h-16 rounded-xl bg-muted" />
                <div className="h-16 rounded-xl bg-muted" />
                <div className="h-16 rounded-xl bg-primary/20" />
              </div>
              <div className="h-24 rounded-xl border border-border bg-muted/60" />
            </div>
          </div>
        </div>
      )}
      <Icon className="absolute bottom-6 right-6 h-20 w-20 text-primary/70 drop-shadow-[0_0_30px_hsl(var(--primary)/0.5)]" strokeWidth={1.1} />
      <div className="absolute inset-0 opacity-[0.45]" style={{ backgroundImage: "linear-gradient(to right, hsl(var(--primary)/0.08) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--primary)/0.08) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
    </div>
  );
}
