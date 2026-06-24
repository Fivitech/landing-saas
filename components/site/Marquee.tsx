"use client";

import { marqueeItems } from "@/data/site";

export function Marquee() {
  const loop = [...marqueeItems, ...marqueeItems];

  return (
    <section className="relative overflow-hidden border-y border-border bg-card/40 py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-10 hover:[animation-play-state:paused]">
        {loop.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-10">
            <span className="whitespace-nowrap text-lg font-semibold text-muted-foreground">{item}</span>
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          </div>
        ))}
      </div>
    </section>
  );
}
