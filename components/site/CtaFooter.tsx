"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CtaFooter() {
  return (
    <section className="px-4 pb-24 sm:px-6">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-primary/30 px-6 py-20 text-center sm:py-28">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/25 via-primary/10 to-transparent" />
        <div className="absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/40 blur-[120px]" />
        <h2 className="mx-auto max-w-3xl text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-tight tracking-tight">Launch your brokerage on <span className="bg-gradient-text bg-clip-text text-transparent">Fivitech</span></h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">One platform for clients, IBs, payments, compliance, and trading operations. See it running on your workflow in a live demo.</p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:scale-[1.02]">
            Request Demo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href="/pricing" className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-sm font-bold transition hover:border-primary hover:text-primary">View Pricing</Link>
        </div>
      </motion.div>
    </section>
  );
}
