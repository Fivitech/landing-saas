"use client";

import { ArrowRight } from "lucide-react";
import { Reveal } from "./primitives";

/** Final CTA band over a strong accent gradient-glow, plus a minimal footer. */
export function CTA() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 pb-10 pt-12">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] px-8 py-16 text-center sm:px-12">
          {/* gradient base + glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210_100%_56%)] via-[hsl(225_95%_58%)] to-[hsl(265_90%_60%)]" />
          <div className="absolute -top-1/3 left-1/2 h-[120%] w-[60%] -translate-x-1/2 rounded-full bg-white/25 blur-[80px]" />

          <div className="relative">
            <h2 className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ready to launch your brokerage?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-white/85">
              See the full Fivi Technologies platform in a live walkthrough — and
              get a tailored rollout plan for your desk.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[hsl(225_95%_45%)] shadow-lg transition hover:scale-[1.03]"
              >
                Request Demo
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </Reveal>

      {/* footer */}
      <footer className="mt-16 border-t border-black/[0.06] pt-8 dark:border-white/[0.08]">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-[hsl(210_100%_56%)] to-[hsl(265_90%_66%)] text-xs font-bold text-white">
              F
            </span>
            <span className="text-sm font-bold tracking-tight text-neutral-900 dark:text-white">
              Fivitech
            </span>
          </div>
          <nav className="flex items-center gap-6 text-sm font-medium text-neutral-500">
            {["Features", "Pricing", "Contact", "Docs"].map((l) => (
              <a
                key={l}
                href="#"
                className="transition-colors hover:text-neutral-900 dark:hover:text-white"
              >
                {l}
              </a>
            ))}
          </nav>
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Fivi Technologies
          </p>
        </div>
      </footer>
    </section>
  );
}
