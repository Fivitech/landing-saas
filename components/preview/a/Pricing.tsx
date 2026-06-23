"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./primitives";

const TIERS = [
  {
    name: "Starter",
    price: "$1,500",
    cadence: "/mo",
    blurb: "For new brokers getting their first desk live.",
    features: [
      "Up to 500 active clients",
      "Client portal",
      "Single-tier IB",
      "Core CRM & KYC",
      "2 payment gateways",
    ],
    highlight: false,
  },
  {
    name: "Advanced",
    price: "$3,000",
    cadence: "/mo",
    blurb: "For scaling brokers that need partners and automation.",
    features: [
      "Up to 5,000 active clients",
      "Multi-level IB",
      "Copy trading",
      "Wallet management",
      "Unlimited gateways",
    ],
    highlight: true,
    tag: "Best Value",
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    blurb: "For established brokers needing white-label and SLAs.",
    features: [
      "Unlimited clients",
      "Full white-label",
      "Dedicated infrastructure",
      "Priority 24/7 support",
      "Custom integrations",
    ],
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
          Simple, scalable pricing
        </h2>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400">
          Pick a plan that matches your desk today — upgrade the moment you
          outgrow it.
        </p>
      </Reveal>

      <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
        {TIERS.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.07} className="h-full">
            <div
              className={cn(
                "relative flex h-full flex-col rounded-3xl p-7 backdrop-blur-xl transition",
                t.highlight
                  ? "border-transparent bg-white/70 shadow-[0_24px_70px_-24px_hsl(225_95%_60%/0.65)] dark:bg-white/[0.05]"
                  : "border border-black/[0.06] bg-white/55 hover:border-black/[0.12] dark:border-white/[0.08] dark:bg-white/[0.03] dark:hover:border-white/[0.16]",
              )}
            >
              {/* gradient border for highlighted tier */}
              {t.highlight && (
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-[hsl(210_100%_56%)] to-[hsl(265_90%_66%)] p-px [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] [mask-composite:exclude]" />
              )}

              {t.tag && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[hsl(210_100%_56%)] to-[hsl(265_90%_66%)] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-[0_4px_16px_-2px_hsl(225_95%_60%/0.8)]">
                  {t.tag}
                </span>
              )}

              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                {t.name}
              </h3>
              <p className="mt-1.5 text-sm text-neutral-600 dark:text-neutral-400">
                {t.blurb}
              </p>

              <div className="mt-5 flex items-end gap-1">
                <span className="text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                  {t.price}
                </span>
                <span className="pb-1 text-sm font-medium text-neutral-500">
                  {t.cadence}
                </span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[hsl(210_100%_56%/0.15)] text-[hsl(210_100%_50%)] dark:text-[hsl(210_100%_68%)]">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-neutral-700 dark:text-neutral-300">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                className={cn(
                  "mt-7 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition",
                  t.highlight
                    ? "bg-gradient-to-r from-[hsl(210_100%_56%)] to-[hsl(225_95%_60%)] text-white shadow-[0_8px_30px_-6px_hsl(210_100%_56%/0.8)] hover:shadow-[0_10px_40px_-6px_hsl(210_100%_56%/1)]"
                    : "border border-black/[0.1] bg-white/60 text-neutral-800 hover:bg-white/90 dark:border-white/[0.14] dark:bg-white/[0.05] dark:text-neutral-100 dark:hover:bg-white/[0.1]",
                )}
              >
                {t.price === "Custom" ? "Contact Sales" : "Start Now"}
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
