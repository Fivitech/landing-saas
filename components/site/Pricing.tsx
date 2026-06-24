"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import pricing from "@/data/pricing.json";

export function Pricing({ compact = false }: { compact?: boolean }) {
  const plans = compact ? pricing.plans.slice(0, 3) : pricing.plans;

  return (
    <section id="pricing" className="px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Pricing</p>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3.25rem)] font-extrabold tracking-tight">Simple plans that scale with you</h2>
          <p className="mt-4 text-lg text-muted-foreground">Transparent monthly pricing for launch, growth, and enterprise brokerage teams.</p>
        </div>
        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const highlighted = plan.id === "advanced";
            const price = plan.priceDisplay ?? (plan.price ? `$${plan.price.toLocaleString()}` : "Custom");
            return (
              <motion.div key={plan.id} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay: index * 0.12 }} className={`relative ${highlighted ? "lg:-mt-4 lg:mb-4" : ""}`}>
                <div className={highlighted ? "rounded-3xl bg-gradient-accent p-[1.5px] shadow-[var(--shadow-glow)]" : ""}>
                  <div className={`flex h-full flex-col rounded-3xl p-8 ${highlighted ? "bg-card" : "border border-border bg-card/70"}`}>
                    {highlighted && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3.5 py-1 text-[11px] font-bold uppercase tracking-wide text-primary-foreground shadow-[var(--shadow-glow)]">Best Value</span>}
                    <h3 className="text-lg font-bold">{plan.name}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{plan.description}</p>
                    <div className="mt-6 flex items-end gap-1">
                      <span className="text-5xl font-black tracking-tight">{price}</span>
                      {plan.interval && <span className="mb-1.5 text-sm font-medium text-muted-foreground">/{plan.interval}</span>}
                    </div>
                    {plan.billingNote && <p className="mt-2 text-xs font-medium text-primary">{plan.billingNote}</p>}
                    <ul className="mt-8 space-y-3.5">
                      {plan.features.filter((feature) => feature.included).slice(0, 6).map((feature) => <li key={feature.text} className="flex items-center gap-3 text-sm text-muted-foreground"><span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/15 text-primary"><Check className="h-3 w-3" strokeWidth={3} /></span>{feature.text}</li>)}
                    </ul>
                    <Link href="/contact" className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition ${highlighted ? "bg-primary text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-[1.02]" : "border border-border hover:border-primary hover:text-primary"}`}>
                      Request Demo
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
