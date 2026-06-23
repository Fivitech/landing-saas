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
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-40 border-b border-slate-900/[0.06] bg-white/70 backdrop-blur-xl dark:border-white/[0.06] dark:bg-[#0a0a0f]/70"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="#" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-[15px] font-bold text-white shadow-lg shadow-indigo-500/25">
            F
          </span>
          <span className="font-display text-[17px] font-semibold tracking-tight text-slate-900 dark:text-white">
            Fivitech
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-900/[0.04] hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/[0.06] dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <Link
            href="/contact"
            className="hidden rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-indigo-500/20 transition hover:shadow-lg hover:shadow-indigo-500/30 sm:inline-flex"
          >
            Request Demo
          </Link>
          <ThemeToggle className="!h-9 !w-9 !border-slate-900/10 !bg-slate-900/[0.04] !text-slate-700 hover:!bg-slate-900/[0.08] dark:!border-white/10 dark:!bg-white/[0.06] dark:!text-white dark:hover:!bg-white/[0.12]" />
        </div>
      </div>
    </motion.header>
  );
}
