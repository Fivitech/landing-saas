"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/**
 * Shared reveal-on-scroll wrapper for Variant A.
 * Soft upward fade, staggered when used as a list.
 */
export const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Translucent glass surface — the core Variant A card look. */
export function Glass({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-black/[0.06] bg-white/60 backdrop-blur-xl",
        "dark:border-white/[0.08] dark:bg-white/[0.04]",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Small pill badge with accent dot. */
export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-black/[0.07] bg-white/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-600 backdrop-blur dark:border-white/[0.1] dark:bg-white/[0.05] dark:text-neutral-300">
      <span className="h-1.5 w-1.5 rounded-full bg-[hsl(210_100%_56%)] shadow-[0_0_8px_hsl(210_100%_56%)]" />
      {children}
    </span>
  );
}
