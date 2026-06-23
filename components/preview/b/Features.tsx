"use client";

import { motion } from "framer-motion";
import {
  Network,
  LayoutDashboard,
  Database,
  CreditCard,
  Copy,
  Palette,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  body: string;
  bullets: string[];
};

const FEATURES: Feature[] = [
  {
    icon: Network,
    title: "Multi-level IB System",
    body: "Build unlimited partner hierarchies with automated, per-tier commission calculation and transparent payout tracking down every branch.",
    bullets: ["Unlimited tiers", "Auto commissions", "Sub-IB tracking"],
  },
  {
    icon: LayoutDashboard,
    title: "Client Portal",
    body: "Give traders a fast, branded space to deposit, withdraw, verify documents and open accounts — without ever calling support.",
    bullets: ["Self-service KYC", "Account opening", "Funding & history"],
  },
  {
    icon: Database,
    title: "Backoffice CRM",
    body: "Run the whole desk from one screen: leads, conversions, retention, ticketing and a full audit trail across every client touchpoint.",
    bullets: ["Lead pipeline", "Audit trail", "Role-based access"],
  },
  {
    icon: CreditCard,
    title: "Payment Gateways",
    body: "Connect the processors your region needs and reconcile deposits and withdrawals automatically against trading accounts.",
    bullets: ["Multi-PSP", "Auto reconcile", "Wallet ledger"],
  },
  {
    icon: Copy,
    title: "Copy Trading",
    body: "Let clients mirror your best strategy providers with configurable allocation, risk limits and performance leaderboards.",
    bullets: ["Strategy leaderboard", "Risk limits", "Live allocation"],
  },
  {
    icon: Palette,
    title: "White-label",
    body: "Ship the entire platform under your own brand — domain, colors, logo and emails — and launch in days, not quarters.",
    bullets: ["Your domain", "Custom theming", "Branded emails"],
  },
];

export function Features() {
  return (
    <section id="features" className="relative px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#00b85f] dark:text-[#00E676]">
            Capabilities
          </p>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-tight tracking-tight text-neutral-900 dark:text-white">
            Powerful Tools for Modern Forex Brokers
          </h2>
        </motion.div>

        <div className="mt-20 space-y-20 lg:space-y-28">
          {FEATURES.map((f, i) => (
            <FeatureRow key={f.title} feature={f} index={i} reversed={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureRow({
  feature,
  index,
  reversed,
}: {
  feature: Feature;
  index: number;
  reversed: boolean;
}) {
  const Icon = feature.icon;
  const num = String(index + 1).padStart(2, "0");

  return (
    <div
      className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${
        reversed ? "lg:[direction:rtl]" : ""
      }`}
    >
      {/* TEXT */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="[direction:ltr]"
      >
        <div className="flex items-center gap-4">
          <span className="text-5xl font-black text-neutral-200 dark:text-white/10">
            {num}
          </span>
          <span className="grid h-12 w-12 place-items-center rounded-xl border border-[#00E676]/30 bg-[#00E676]/10 text-[#00b85f] dark:text-[#00E676]">
            <Icon className="h-6 w-6" />
          </span>
        </div>
        <h3 className="mt-6 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">
          {feature.title}
        </h3>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
          {feature.body}
        </p>
        <ul className="mt-6 flex flex-wrap gap-2.5">
          {feature.bullets.map((b) => (
            <li
              key={b}
              className="rounded-full border border-black/10 bg-black/[0.03] px-3.5 py-1.5 text-sm font-medium text-neutral-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-neutral-300"
            >
              {b}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* VISUAL */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="[direction:ltr]"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:border-white/10 dark:from-white/[0.05] dark:to-transparent">
          <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-[#00E676]/20 blur-3xl" />
          <div className="absolute inset-0 grid place-items-center">
            <Icon
              className="h-28 w-28 text-[#00E676] drop-shadow-[0_0_30px_rgba(0,230,118,0.5)]"
              strokeWidth={1.1}
            />
          </div>
          {/* faint grid texture */}
          <div
            className="absolute inset-0 opacity-[0.5] dark:opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0,230,118,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,230,118,0.08) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
