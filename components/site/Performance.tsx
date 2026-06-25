"use client";

import { motion, type Variants } from "framer-motion";
import { Zap, Globe, ShieldCheck } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] },
  }),
};

const pillars = [
  {
    icon: Zap,
    title: "Ultra-low latency execution",
    body: "Sub-millisecond response times for optimal order routing — every microsecond counts when markets move.",
  },
  {
    icon: Globe,
    title: "Distributed architecture",
    body: "Multiple data centers deliver redundancy and continuous uptime so your brokerage never goes dark.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-grade security",
    body: "DDoS protection, advanced encryption, and 24/7 monitoring keep client data and funds protected at all times.",
  },
] as const;

export function Performance() {
  return (
    <section id="performance" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
            Performance &amp; security
          </p>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3.25rem)] font-extrabold tracking-tight">
            Built for{" "}
            <span className="bg-gradient-text bg-clip-text text-transparent">enterprise scale</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            High-throughput infrastructure designed to match the demands of regulated, global
            brokerage operations.
          </p>
        </motion.div>

        {/* Pillar cards + animated visual */}
        <div className="mt-20 grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          {/* Cards column */}
          <div className="space-y-6">
            {pillars.map(({ icon: Icon, title, body }, index) => (
              <motion.div
                key={title}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="glass-panel flex gap-5 rounded-2xl p-6"
              >
                <span className="mt-0.5 grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-base font-bold sm:text-lg">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Animated visual column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <InfraVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/** Pure CSS/JSX animated visual showing latency + uptime metrics. */
function InfraVisual() {
  const bars = [62, 80, 55, 90, 72, 95, 78, 100, 85, 92, 70, 88];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-card/70 p-6 shadow-2xl backdrop-blur-xl">
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-primary/20 blur-[70px]" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-cyan-accent/10 blur-[60px]" />

      {/* Grid lines overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--primary)/0.07) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--primary)/0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Header row */}
      <div className="relative mb-5 flex items-center gap-2">
        <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
          System Status · Live
        </span>
        <span className="ml-auto rounded-full bg-primary/15 px-2.5 py-1 text-[10px] font-bold text-primary">
          All systems operational
        </span>
      </div>

      {/* Stat tiles */}
      <div className="relative grid grid-cols-3 gap-3">
        {[
          { label: "Avg latency", value: "<0.8ms", accent: "text-primary" },
          { label: "Uptime SLA", value: "99.99%", accent: "text-primary" },
          { label: "Data centers", value: "5 regions", accent: "text-muted-foreground" },
        ].map(({ label, value, accent }) => (
          <div
            key={label}
            className="rounded-xl border border-border bg-background/60 px-3 py-3 text-center"
          >
            <div className={`text-lg font-extrabold leading-none ${accent}`}>{value}</div>
            <div className="mt-1 text-[10px] font-medium text-muted-foreground">{label}</div>
          </div>
        ))}
      </div>

      {/* Throughput bar chart */}
      <div className="relative mt-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[11px] font-semibold text-muted-foreground">
            Order throughput — last 24h
          </span>
          <span className="text-[11px] font-bold text-primary">Peak: 142K/min</span>
        </div>
        <div className="flex h-20 items-end gap-1">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm bg-primary/30 transition-all"
              style={{
                height: `${h}%`,
                background:
                  h >= 90
                    ? "hsl(var(--primary)/0.7)"
                    : h >= 75
                      ? "hsl(var(--primary)/0.45)"
                      : "hsl(var(--primary)/0.25)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Security badges */}
      <div className="relative mt-5 flex flex-wrap gap-2">
        {["TLS 1.3", "AES-256", "DDoS Shield", "SOC 2", "ISO 27001"].map((badge) => (
          <span
            key={badge}
            className="rounded-full border border-border bg-muted/50 px-3 py-1 text-[11px] font-semibold text-muted-foreground"
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}
