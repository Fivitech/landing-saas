"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge, Reveal } from "./primitives";
import { DashboardMock } from "./DashboardMock";

/** Hero: badge, gradient headline, sub, dual CTA, and the abstract dashboard mock. */
export function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-16 pt-20 sm:pt-28">
      <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <Reveal>
            <Badge>Fivi Technologies</Badge>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-neutral-900 dark:text-white sm:text-5xl lg:text-6xl">
              The Complete{" "}
              <span className="bg-gradient-to-r from-[hsl(210_100%_56%)] via-[hsl(225_95%_62%)] to-[hsl(265_90%_66%)] bg-clip-text text-transparent">
                Forex Brokerage
              </span>{" "}
              Solution
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-base text-neutral-600 dark:text-neutral-400 sm:text-lg lg:mx-0">
              Fivi Technologies streamlines your forex brokerage operations with
              our all-in-one platform. Manage clients, IBs, and trading all in
              one place.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="/pricing"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[hsl(210_100%_56%)] to-[hsl(225_95%_60%)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_-6px_hsl(210_100%_56%/0.8)] transition hover:shadow-[0_10px_40px_-6px_hsl(210_100%_56%/1)] sm:w-auto"
              >
                View Pricing
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
              <a
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-black/[0.1] bg-white/60 px-6 py-3.5 text-sm font-semibold text-neutral-800 backdrop-blur transition hover:bg-white/90 dark:border-white/[0.12] dark:bg-white/[0.05] dark:text-neutral-100 dark:hover:bg-white/[0.1] sm:w-auto"
              >
                Request Demo
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-7 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-500">
              Trusted by brokers in 30+ jurisdictions
            </p>
          </Reveal>
        </div>

        {/* Mock */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="relative"
        >
          {/* glow behind mock */}
          <div className="absolute inset-0 -z-10 scale-[0.85] rounded-[2rem] bg-gradient-to-br from-[hsl(210_100%_56%)] to-[hsl(265_90%_66%)] opacity-30 blur-[60px]" />
          <DashboardMock />
        </motion.div>
      </div>
    </section>
  );
}
