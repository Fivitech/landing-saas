"use client";

import { motion } from "framer-motion";
import { Banknote, Bitcoin, Smartphone, Wallet } from "lucide-react";

/**
 * Styled, on-brand payment-methods illustration — glass cards/badges for each
 * supported method, built on the token system (primary neon, glass, grid
 * texture). Not a logo dump: brand marks are tasteful text/SVG treatments.
 * Mirrors the FeatureMockups conventions.
 */

const panelGrid = {
  backgroundImage:
    "linear-gradient(to right, hsl(var(--primary)/0.07) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--primary)/0.07) 1px, transparent 1px)",
  backgroundSize: "32px 32px",
} as const;

type Method = {
  label: string;
  sub: string;
  /** Inline mark: short brand wordmark or an icon node. */
  mark: React.ReactNode;
};

/** Compact glyph treatments so cards stay cohesive (no raw logo dump). */
const VisaMark = () => (
  <span className="text-base font-black italic tracking-tight text-foreground">VISA</span>
);
const MastercardMark = () => (
  <span className="flex items-center" aria-hidden>
    <span className="h-4 w-4 rounded-full bg-primary/70" />
    <span className="-ml-1.5 h-4 w-4 rounded-full bg-[hsl(var(--cyan-accent)/0.7)]" />
  </span>
);

const methods: Method[] = [
  { label: "Visa", sub: "Card", mark: <VisaMark /> },
  { label: "Mastercard", sub: "Card", mark: <MastercardMark /> },
  {
    label: "Crypto",
    sub: "BTC · USDT",
    mark: <Bitcoin className="h-5 w-5 text-primary" />,
  },
  {
    label: "Bank transfer",
    sub: "Wire · SEPA",
    mark: <Banknote className="h-5 w-5 text-primary" />,
  },
  {
    label: "UPI",
    sub: "Instant",
    mark: <Smartphone className="h-5 w-5 text-primary" />,
  },
  {
    label: "E-wallets",
    sub: "Skrill · Neteller · Perfect Money",
    mark: <Wallet className="h-5 w-5 text-primary" />,
  },
];

export function PaymentMethods() {
  return (
    <div className="glass-panel relative h-full w-full overflow-hidden rounded-2xl">
      <div className="absolute inset-0 opacity-60" style={panelGrid} />
      <div className="absolute -left-12 -top-12 h-44 w-44 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative flex h-full flex-col p-6 sm:p-7">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
              <Wallet className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                Deposit & withdraw
              </p>
              <p className="text-sm font-semibold">Payment methods</p>
            </div>
          </div>
          <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
            Multi-PSP
          </span>
        </div>

        {/* Methods grid */}
        <div className="mt-6 grid flex-1 grid-cols-2 gap-2.5">
          {methods.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="flex items-center gap-3 rounded-xl border border-border bg-card/60 px-3 py-2.5"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border bg-muted/60">
                {m.mark}
              </span>
              <div className="min-w-0 leading-tight">
                <p className="truncate text-sm font-semibold">{m.label}</p>
                <p className="truncate text-[11px] text-muted-foreground">{m.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reconcile footer */}
        <div className="mt-4 flex items-center justify-between rounded-xl border border-primary/20 bg-primary/10 px-4 py-2.5">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Auto-reconciled to wallet ledger
          </p>
          <span className="h-2 w-2 rounded-full bg-primary shadow-[var(--shadow-glow)]" />
        </div>
      </div>
    </div>
  );
}
