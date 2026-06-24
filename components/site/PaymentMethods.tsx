"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
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

/** Live-ticking deposit counter for the reconcile footer. */
function DepositTicker({ reduce }: { reduce: boolean | null }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { margin: "-40px" });
  const base = 48230;
  const [val, setVal] = useState(base);

  useEffect(() => {
    if (!inView || reduce) {
      setVal(base);
      return;
    }
    let stopped = false;
    let controls: ReturnType<typeof animate> | undefined;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let current = base;
    const tick = () => {
      if (stopped) return;
      const next = current + Math.round(Math.random() * 320 + 40);
      controls = animate(current, next, {
        duration: 0.9,
        ease: "easeOut",
        onUpdate: (v) => setVal(Math.round(v)),
      });
      current = next;
      timer = setTimeout(tick, 2200);
    };
    timer = setTimeout(tick, 1200);
    return () => {
      stopped = true;
      controls?.stop();
      if (timer) clearTimeout(timer);
    };
  }, [inView, reduce]);

  return (
    <span ref={ref} className="tabular-nums">
      ${val.toLocaleString("en-US")}
    </span>
  );
}

export function PaymentMethods() {
  const reduce = useReducedMotion();
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

        {/* Methods grid — a "live" highlight steps through each method */}
        <div className="mt-6 grid flex-1 grid-cols-2 gap-2.5">
          {methods.map((m, i) => {
            // one card is spotlighted at a time, cycling through the grid
            const cycle = methods.length * 0.7;
            const start = i * 0.7;
            return (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * i }}
                className="relative flex items-center gap-3 overflow-hidden rounded-xl border border-border bg-card/60 px-3 py-2.5"
              >
                {/* spotlight wash sweeping through the cards */}
                {!reduce && (
                  <motion.span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-xl bg-primary/[0.08]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      duration: cycle,
                      times: [start / cycle, (start + 0.35) / cycle, (start + 0.7) / cycle],
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
                <motion.span
                  className="relative grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border bg-muted/60"
                  animate={
                    reduce
                      ? undefined
                      : {
                          borderColor: [
                            "hsl(var(--border))",
                            "hsl(var(--primary)/0.6)",
                            "hsl(var(--border))",
                          ],
                          scale: [1, 1.08, 1],
                        }
                  }
                  transition={{
                    duration: cycle,
                    times: [start / cycle, (start + 0.35) / cycle, (start + 0.7) / cycle],
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {m.mark}
                </motion.span>
                <div className="relative min-w-0 leading-tight">
                  <p className="truncate text-sm font-semibold">{m.label}</p>
                  <p className="truncate text-[11px] text-muted-foreground">{m.sub}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Reconcile footer — live deposit volume */}
        <div className="mt-4 flex items-center justify-between rounded-xl border border-primary/20 bg-primary/10 px-4 py-2.5">
          <div className="leading-tight">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Reconciled to wallet · 24h
            </p>
            <p className="text-sm font-black tracking-tight text-primary">
              <DepositTicker reduce={reduce} />
            </p>
          </div>
          <span className="flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground">
            Live
            <motion.span
              className="h-2 w-2 rounded-full bg-primary shadow-[var(--shadow-glow)]"
              animate={reduce ? undefined : { opacity: [1, 0.3, 1], scale: [1, 0.85, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </div>
      </div>
    </div>
  );
}
