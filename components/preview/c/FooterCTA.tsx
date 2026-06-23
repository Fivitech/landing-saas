"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function FooterCTA() {
  return (
    <section className="px-5 pb-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[2rem] border border-slate-900/[0.08] bg-slate-50/80 px-8 py-14 text-center dark:border-white/[0.08] dark:bg-white/[0.03]"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-64 w-[640px] rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,0.22),transparent)] dark:bg-[radial-gradient(closest-side,rgba(99,102,241,0.3),transparent)]"
          />
          <h2 className="relative font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Ready to run a{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent dark:from-indigo-400 dark:to-cyan-300">
              smarter brokerage
            </span>
            ?
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-slate-600 dark:text-slate-300">
            See the full platform in action and get a tailored quote for your
            operation.
          </p>
          <div className="relative mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:shadow-xl hover:shadow-indigo-500/35"
            >
              Request Demo
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-900/10 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 dark:border-white/15 dark:bg-white/[0.04] dark:text-white dark:hover:bg-white/[0.08]"
            >
              View Pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-900/[0.06] px-5 py-10 dark:border-white/[0.06] sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 text-[13px] font-bold text-white">
            F
          </span>
          <span className="font-display text-sm font-semibold text-slate-900 dark:text-white">
            Fivitech
          </span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Fivi Technologies. All rights reserved.
        </p>
        <div className="flex items-center gap-5 text-xs text-slate-500 dark:text-slate-400">
          <a href="#features" className="transition hover:text-slate-900 dark:hover:text-white">
            Features
          </a>
          <a href="#pricing" className="transition hover:text-slate-900 dark:hover:text-white">
            Pricing
          </a>
          <Link href="/contact" className="transition hover:text-slate-900 dark:hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
