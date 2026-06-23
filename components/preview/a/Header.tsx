"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/preview/ThemeToggle";

/** Sticky glass header with wordmark, nav, CTA and theme toggle. */
export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="mx-auto mt-3 flex max-w-6xl items-center justify-between gap-4 rounded-full border border-black/[0.06] bg-white/70 px-4 py-2.5 backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.04] sm:px-5">
        {/* Wordmark */}
        <Link href="#" className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[hsl(210_100%_56%)] to-[hsl(265_90%_66%)] text-sm font-bold text-white shadow-[0_0_16px_-2px_hsl(210_100%_56%/0.6)]">
            F
          </span>
          <span className="text-base font-bold tracking-tight text-neutral-900 dark:text-white">
            Fivitech
          </span>
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-7 text-sm font-medium text-neutral-600 dark:text-neutral-300 md:flex">
          {["Features", "Pricing", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="transition-colors hover:text-neutral-900 dark:hover:text-white"
            >
              {l}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a
            href="#pricing"
            className="hidden rounded-full bg-gradient-to-r from-[hsl(210_100%_56%)] to-[hsl(225_95%_60%)] px-4 py-2 text-sm font-semibold text-white shadow-[0_4px_20px_-4px_hsl(210_100%_56%/0.7)] transition hover:shadow-[0_6px_28px_-4px_hsl(210_100%_56%/0.9)] sm:inline-block"
          >
            Get Started
          </a>
          <ThemeToggle className="!border-slate-900/15 !bg-slate-900/[0.05] !text-slate-700 hover:!bg-slate-900/[0.1] dark:!border-white/15 dark:!bg-white/10 dark:!text-white dark:hover:!bg-white/20" />
        </div>
      </div>
    </header>
  );
}
