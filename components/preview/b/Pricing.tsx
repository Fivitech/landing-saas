"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

type Tier = {
  name: string;
  price: string;
  period?: string;
  blurb: string;
  bullets: string[];
  cta: string;
  href: string;
  highlight?: boolean;
};

const TIERS: Tier[] = [
  {
    name: "Starter",
    price: "$1,500",
    period: "/mo",
    blurb: "Everything a new brokerage needs to go live.",
    bullets: [
      "Up to 500 active clients",
      "Multi-level IB",
      "Client portal",
      "Backoffice CRM",
    ],
    cta: "Start with Starter",
    href: "/contact",
  },
  {
    name: "Advanced",
    price: "$3,000",
    period: "/mo",
    blurb: "Scale your desk with copy trading and branding.",
    bullets: [
      "Up to 5,000 active clients",
      "Everything in Starter",
      "Copy trading",
      "White-label",
      "Priority support",
    ],
    cta: "Choose Advanced",
    href: "/pricing",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    blurb: "Bespoke infrastructure for established brokers.",
    bullets: [
      "Unlimited clients",
      "Dedicated infrastructure",
      "Custom integrations",
      "SLA & account manager",
    ],
    cta: "Talk to Sales",
    href: "/contact",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#00b85f] dark:text-[#00E676]">
            Pricing
          </p>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3.25rem)] font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Simple plans that scale with you
          </h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            No hidden fees. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3">
          {TIERS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`relative ${t.highlight ? "lg:-mt-4 lg:mb-4" : ""}`}
            >
              {/* gradient border wrapper for the highlighted tier */}
              <div
                className={
                  t.highlight
                    ? "rounded-3xl bg-gradient-to-b from-[#00E676] via-[#00ffa3] to-[#00E676] p-[1.5px] shadow-[0_0_50px_rgba(0,230,118,0.4)]"
                    : ""
                }
              >
                <div
                  className={`flex h-full flex-col rounded-3xl p-8 ${
                    t.highlight
                      ? "bg-white dark:bg-[#0a0a0a]"
                      : "border border-black/10 bg-white dark:border-white/10 dark:bg-white/[0.03]"
                  }`}
                >
                  {t.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#00E676] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wide text-black shadow-[0_0_20px_rgba(0,230,118,0.6)]">
                      Best Value
                    </span>
                  )}

                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                    {t.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-neutral-500 dark:text-neutral-400">
                    {t.blurb}
                  </p>

                  <div className="mt-6 flex items-end gap-1">
                    <span className="text-5xl font-black tracking-tight text-neutral-900 dark:text-white">
                      {t.price}
                    </span>
                    {t.period && (
                      <span className="mb-1.5 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                        {t.period}
                      </span>
                    )}
                  </div>

                  <ul className="mt-8 space-y-3.5">
                    {t.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-3 text-sm text-neutral-700 dark:text-neutral-300"
                      >
                        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#00E676]/15 text-[#00b85f] dark:text-[#00E676]">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={t.href}
                    className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition ${
                      t.highlight
                        ? "bg-[#00E676] text-black shadow-[0_0_24px_rgba(0,230,118,0.5)] hover:shadow-[0_0_36px_rgba(0,230,118,0.7)]"
                        : "border border-neutral-300 text-neutral-900 hover:border-[#00E676] hover:text-[#00b85f] dark:border-white/15 dark:text-white dark:hover:border-[#00E676] dark:hover:text-[#00E676]"
                    }`}
                  >
                    {t.cta}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
