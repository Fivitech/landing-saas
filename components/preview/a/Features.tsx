"use client";

import {
  Network,
  LayoutDashboard,
  Users,
  CreditCard,
  Copy,
  Wallet,
  LineChart,
  PanelsTopLeft,
} from "lucide-react";
import { Glass, Reveal } from "./primitives";

const FEATURES = [
  {
    icon: Network,
    title: "Multi-level IB system",
    desc: "Unlimited partner tiers with automated rebate splits and live downline analytics.",
  },
  {
    icon: LayoutDashboard,
    title: "Client portal",
    desc: "Self-serve onboarding, KYC, deposits and withdrawals in a branded client area.",
  },
  {
    icon: Users,
    title: "Backoffice CRM",
    desc: "A unified desk for sales, retention and compliance to manage every account.",
  },
  {
    icon: CreditCard,
    title: "Payment gateways",
    desc: "Plug in cards, crypto and local rails with reconciliation handled for you.",
  },
  {
    icon: Copy,
    title: "Copy trading",
    desc: "Let clients mirror your strategists with transparent performance feeds.",
  },
  {
    icon: Wallet,
    title: "Wallet management",
    desc: "Multi-currency wallets that move funds between accounts in real time.",
  },
  {
    icon: LineChart,
    title: "Performance analytics",
    desc: "Cohort, volume and PnL dashboards that turn raw flow into decisions.",
  },
  {
    icon: PanelsTopLeft,
    title: "White-label",
    desc: "Ship the entire platform under your own brand, domain and theme.",
  },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
          Powerful Tools for{" "}
          <span className="bg-gradient-to-r from-[hsl(210_100%_56%)] to-[hsl(265_90%_66%)] bg-clip-text text-transparent">
            Modern Forex Brokers
          </span>
        </h2>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400">
          Everything you need to run, scale and white-label a brokerage — in one
          connected platform.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={(i % 4) * 0.05}>
            <Glass className="group h-full p-5 transition duration-300 hover:-translate-y-1 hover:border-[hsl(210_100%_56%/0.4)] hover:shadow-[0_18px_50px_-20px_hsl(210_100%_56%/0.6)]">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[hsl(210_100%_56%/0.15)] to-[hsl(265_90%_66%/0.15)] text-[hsl(210_100%_50%)] ring-1 ring-[hsl(210_100%_56%/0.2)] transition group-hover:scale-105 dark:text-[hsl(210_100%_68%)]">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {f.desc}
              </p>
            </Glass>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
