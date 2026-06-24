"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, FileText, IdCard, ScanFace, ShieldCheck, UploadCloud } from "lucide-react";

/**
 * Styled, on-brand KYC verification illustration — a product-UI mockup built
 * from divs/SVG on the token system (primary neon, glass, grid texture), not a
 * real screenshot. Mirrors the FeatureMockups conventions.
 */

const panelGrid = {
  backgroundImage:
    "linear-gradient(to right, hsl(var(--primary)/0.07) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--primary)/0.07) 1px, transparent 1px)",
  backgroundSize: "32px 32px",
} as const;

const steps = [
  { icon: IdCard, label: "Government ID", note: "Front & back" },
  { icon: FileText, label: "Proof of address", note: "Utility bill" },
  { icon: ScanFace, label: "Liveness selfie", note: "Face match" },
] as const;

export function KycMockup() {
  const reduce = useReducedMotion();
  return (
    <div className="glass-panel relative h-full w-full overflow-hidden rounded-2xl">
      <div className="absolute inset-0 opacity-60" style={panelGrid} />
      <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative flex h-full flex-col p-6 sm:p-7">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
              <ShieldCheck className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                Identity check
              </p>
              <p className="text-sm font-semibold">Client onboarding</p>
            </div>
          </div>
          <motion.span
            className="flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/15 px-2.5 py-1 text-[11px] font-semibold text-primary shadow-[var(--shadow-glow)]"
            animate={reduce ? undefined : { opacity: [1, 0.65, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Check className="h-3 w-3" strokeWidth={3} />
            Verified
          </motion.span>
        </div>

        {/* Document upload drop-zone */}
        <div className="mt-6 rounded-xl border border-dashed border-primary/30 bg-primary/[0.06] px-4 py-4">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
              <UploadCloud className="h-5 w-5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">passport-scan.pdf</p>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <motion.div
                  initial={{ width: reduce ? "100%" : "0%" }}
                  animate={
                    reduce
                      ? undefined
                      : { width: ["0%", "100%", "100%", "0%"] }
                  }
                  transition={{
                    duration: 5,
                    times: [0, 0.4, 0.85, 1],
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="h-full rounded-full bg-primary"
                />
              </div>
            </div>
            <span className="text-[11px] font-semibold tabular-nums text-primary">100%</span>
          </div>
        </div>

        {/* Verification steps */}
        <div className="mt-5 flex-1 space-y-2.5">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.08 * i }}
                className="flex items-center gap-3 rounded-xl border border-border bg-card/60 px-3.5 py-3"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-muted/70 text-muted-foreground">
                  <Icon className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1 leading-tight">
                  <p className="truncate text-sm font-semibold">{step.label}</p>
                  <p className="text-[11px] text-muted-foreground">{step.note}</p>
                </div>
                <motion.span
                  className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-primary/40 bg-primary/15 text-primary"
                  animate={reduce ? undefined : { scale: [1, 1.18, 1] }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    repeatDelay: 2.4,
                    delay: 0.4 * i,
                    ease: "easeInOut",
                  }}
                >
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </motion.span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
