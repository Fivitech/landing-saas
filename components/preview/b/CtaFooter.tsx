"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CtaFooter() {
  return (
    <>
      {/* Final CTA band over a strong green gradient-glow */}
      <section className="px-4 pb-24 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#00E676]/30 px-6 py-20 text-center sm:py-28"
        >
          {/* gradient glow background */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#00E676]/25 via-[#00E676]/10 to-transparent" />
          <div className="absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#00E676]/40 blur-[120px]" />

          <h2 className="mx-auto max-w-3xl text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-tight tracking-tight text-neutral-900 dark:text-white">
            Launch your brokerage on{" "}
            <span className="bg-gradient-to-r from-[#00b85f] to-[#00E676] bg-clip-text text-transparent dark:from-[#00E676] dark:to-[#00ffa3]">
              Fivitech
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-neutral-600 dark:text-neutral-300">
            One platform for clients, IBs and trading. See it running on your
            own data in a live demo.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#00E676] px-8 py-4 text-sm font-bold text-black shadow-[0_0_34px_rgba(0,230,118,0.55)] transition hover:shadow-[0_0_50px_rgba(0,230,118,0.8)]"
            >
              Request Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-400/60 px-8 py-4 text-sm font-bold text-neutral-900 transition hover:border-neutral-900 dark:border-white/25 dark:text-white dark:hover:border-white"
            >
              View Pricing
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Minimal footer */}
      <footer className="border-t border-black/10 px-4 py-10 sm:px-6 dark:border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-[#00E676] text-[12px] font-black text-black">
              F
            </span>
            <span className="text-sm font-bold text-neutral-900 dark:text-white">
              Fivitech
            </span>
          </div>
          <div className="flex items-center gap-7 text-sm text-neutral-500 dark:text-neutral-400">
            <Link href="#features" className="transition hover:text-[#00b85f] dark:hover:text-[#00E676]">
              Features
            </Link>
            <Link href="#pricing" className="transition hover:text-[#00b85f] dark:hover:text-[#00E676]">
              Pricing
            </Link>
            <Link href="/contact" className="transition hover:text-[#00b85f] dark:hover:text-[#00E676]">
              Contact
            </Link>
          </div>
          <p className="text-xs text-neutral-400 dark:text-neutral-500">
            © {new Date().getFullYear()} Fivi Technologies
          </p>
        </div>
      </footer>
    </>
  );
}
