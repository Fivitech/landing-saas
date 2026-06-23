"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/preview/ThemeToggle";

const NAV = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-black/10 bg-white/70 px-5 py-3 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
        <Link href="#top" className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#00E676] text-[13px] font-black text-black shadow-[0_0_20px_rgba(0,230,118,0.45)]">
            F
          </span>
          <span className="text-[17px] font-bold tracking-tight text-neutral-900 dark:text-white">
            Fivitech
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.label}
              href={n.href}
              className="group relative text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#00E676] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#00E676] hover:text-black hover:shadow-[0_0_24px_rgba(0,230,118,0.5)] sm:inline-flex dark:bg-white dark:text-black dark:hover:bg-[#00E676]"
          >
            Request Demo
          </Link>
          <ThemeToggle className="!h-9 !w-9 border-black/10 bg-black/[0.04] dark:border-white/15 dark:bg-white/10" />
        </div>
      </div>
    </motion.header>
  );
}
