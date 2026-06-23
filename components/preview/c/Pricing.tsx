"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

type Tier = {
  name: string;
  price: string;
  period?: string;
  blurb: string;
  features: string[];
  cta: string;
  href: string;
  highlight?: boolean;
};

const TIERS: Tier[] = [
  {
    name: "Starter",
    price: "$1,500",
    period: "/mo",
    blurb: "Everything a new brokerage needs to launch.",
    features: [
      "Up to 500 active clients",
      "Multi-level IB",
      "Client portal",
      "Backoffice CRM",
    ],
    cta: "Get started",
    href: "/contact",
  },
  {
    name: "Advanced",
    price: "$3,000",
    period: "/mo",
    blurb: "Scale operations with the full toolkit.",
    features: [
      "Up to 5,000 active clients",
      "Multi-level IB",
      "Client portal",
      "Copy trading + wallets",
      "Priority support",
    ],
    cta: "Request Demo",
    href: "/contact",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    blurb: "White-label, dedicated infra and SLAs.",
    features: [
      "Unlimited active clients",
      "Full white-label",
      "Dedicated environment",
      "Custom integrations",
    ],
    cta: "Talk to sales",
    href: "/contact",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400">
            Pricing
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Plans that grow with your brokerage
          </h2>
        </div>

        <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">
          {TIERS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={
                "relative flex flex-col rounded-3xl border p-7 " +
                (t.highlight
                  ? "border-transparent bg-gradient-to-br from-indigo-600 to-cyan-500 shadow-2xl shadow-indigo-500/30 lg:-translate-y-3 lg:scale-[1.02]"
                  : "border-slate-900/[0.08] bg-white/70 dark:border-white/[0.08] dark:bg-white/[0.03]")
              }
            >
              {t.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-indigo-600 shadow-md">
                  Best Value
                </span>
              )}

              <h3
                className={
                  "font-display text-lg font-semibold " +
                  (t.highlight ? "text-white" : "text-slate-900 dark:text-white")
                }
              >
                {t.name}
              </h3>
              <p
                className={
                  "mt-1 text-sm " +
                  (t.highlight
                    ? "text-white/85"
                    : "text-slate-600 dark:text-slate-400")
                }
              >
                {t.blurb}
              </p>

              <div className="mt-5 flex items-baseline gap-1">
                <span
                  className={
                    "font-display text-4xl font-bold tracking-tight " +
                    (t.highlight
                      ? "text-white"
                      : "text-slate-900 dark:text-white")
                  }
                >
                  {t.price}
                </span>
                {t.period && (
                  <span
                    className={
                      "text-sm font-medium " +
                      (t.highlight
                        ? "text-white/70"
                        : "text-slate-500 dark:text-slate-400")
                    }
                  >
                    {t.period}
                  </span>
                )}
              </div>

              <ul className="mt-6 space-y-3">
                {t.features.map((feat) => (
                  <li
                    key={feat}
                    className={
                      "flex items-start gap-2.5 text-sm " +
                      (t.highlight
                        ? "text-white/90"
                        : "text-slate-700 dark:text-slate-300")
                    }
                  >
                    <span
                      className={
                        "mt-0.5 flex h-[18px] w-[18px] flex-none items-center justify-center rounded-full " +
                        (t.highlight
                          ? "bg-white/20 text-white"
                          : "bg-gradient-to-br from-indigo-500 to-cyan-400 text-white")
                      }
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>

              <Link
                href={t.href}
                className={
                  "mt-7 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition " +
                  (t.highlight
                    ? "bg-white text-indigo-700 hover:bg-white/90"
                    : "border border-slate-900/10 bg-slate-900/[0.03] text-slate-900 hover:bg-slate-900/[0.06] dark:border-white/15 dark:bg-white/[0.04] dark:text-white dark:hover:bg-white/[0.08]")
                }
              >
                {t.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
