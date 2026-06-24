"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/site";

export function Stats() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-card px-6 py-10 text-center sm:py-14">
              <div className="bg-gradient-text bg-clip-text text-[clamp(2.25rem,5vw,3.5rem)] font-black leading-none text-transparent [text-shadow:0_0_30px_hsl(var(--primary)/0.2)]">{stat.value}</div>
              <div className="mt-3 text-sm font-medium text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
