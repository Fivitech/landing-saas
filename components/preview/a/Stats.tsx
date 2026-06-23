"use client";

import { Reveal } from "./primitives";

const STATS = [
  { v: "99.99%", k: "Platform uptime" },
  { v: "12ms", k: "Median API latency" },
  { v: "$4.2B", k: "Volume cleared / yr" },
  { v: "30+", k: "Jurisdictions served" },
];

export function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-black/[0.06] bg-white/60 px-6 py-12 backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.03]">
          {/* accent sheen */}
          <div className="absolute -left-1/4 top-0 h-full w-1/2 bg-gradient-to-r from-[hsl(210_100%_56%/0.12)] to-transparent" />
          <p className="relative text-center text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(210_100%_50%)] dark:text-[hsl(210_100%_68%)]">
            Enterprise performance
          </p>
          <div className="relative mt-8 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.k} className="text-center">
                <p className="bg-gradient-to-b from-neutral-900 to-neutral-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent dark:from-white dark:to-neutral-400 sm:text-5xl">
                  {s.v}
                </p>
                <p className="mt-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  {s.k}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
