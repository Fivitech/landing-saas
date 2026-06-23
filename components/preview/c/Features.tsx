"use client";

import { motion } from "framer-motion";
import {
  Network,
  LayoutDashboard,
  Database,
  CreditCard,
  Copy,
  Wallet,
  LineChart,
  Layers,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
  /** bento span on lg */
  span: string;
  /** accent end of the duotone for this card's icon */
  tone: "indigo" | "cyan" | "violet";
  feature?: boolean;
};

const FEATURES: Feature[] = [
  {
    icon: Network,
    title: "Multi-level IB system",
    desc: "Build unlimited partner hierarchies with automated commission splits across every level.",
    span: "lg:col-span-2 lg:row-span-2",
    tone: "indigo",
    feature: true,
  },
  {
    icon: LayoutDashboard,
    title: "Client portal",
    desc: "A branded self-service hub for deposits, withdrawals and account management.",
    span: "lg:col-span-2",
    tone: "cyan",
  },
  {
    icon: Database,
    title: "Backoffice CRM",
    desc: "Every client, lead and ticket in one operational cockpit.",
    span: "",
    tone: "violet",
  },
  {
    icon: CreditCard,
    title: "Payment gateways",
    desc: "Plug in cards, crypto and local rails out of the box.",
    span: "",
    tone: "indigo",
  },
  {
    icon: Copy,
    title: "Copy trading",
    desc: "Let clients mirror your best strategists in a click.",
    span: "lg:col-span-2",
    tone: "cyan",
  },
  {
    icon: Wallet,
    title: "Wallet management",
    desc: "Internal wallets that move money instantly between accounts.",
    span: "",
    tone: "violet",
  },
  {
    icon: LineChart,
    title: "Performance analytics",
    desc: "Real-time dashboards on volume, retention and revenue.",
    span: "",
    tone: "indigo",
  },
  {
    icon: Layers,
    title: "White-label",
    desc: "Ship the whole stack under your own brand and domain.",
    span: "lg:col-span-2",
    tone: "cyan",
  },
];

const toneIcon = {
  indigo: "text-indigo-500 dark:text-indigo-400",
  cyan: "text-cyan-500 dark:text-cyan-400",
  violet: "text-violet-500 dark:text-violet-400",
};

export function Features() {
  return (
    <section id="features" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400">
            Platform
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Powerful Tools for Modern Forex Brokers
          </h2>
        </div>

        <div className="mt-12 grid auto-rows-[minmax(0,1fr)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.05 }}
              className={
                "group relative flex flex-col overflow-hidden rounded-3xl border p-6 transition-colors " +
                f.span +
                " " +
                (f.feature
                  ? "border-indigo-500/20 bg-gradient-to-br from-indigo-500/[0.07] via-transparent to-cyan-500/[0.07] dark:border-indigo-400/20 dark:from-indigo-500/[0.12] dark:to-cyan-500/[0.1]"
                  : "border-slate-900/[0.07] bg-white/70 hover:border-slate-900/[0.14] dark:border-white/[0.07] dark:bg-white/[0.03] dark:hover:border-white/[0.14]")
              }
            >
              <span
                className={
                  "inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900/[0.04] ring-1 ring-inset ring-slate-900/[0.06] dark:bg-white/[0.06] dark:ring-white/[0.08] " +
                  toneIcon[f.tone]
                }
              >
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-slate-900 dark:text-white">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {f.desc}
              </p>
              {f.feature && (
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,0.25),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
