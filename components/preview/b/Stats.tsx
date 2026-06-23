"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "120+", label: "Brokers launched" },
  { value: "$4.2B", label: "Monthly volume routed" },
  { value: "99.99%", label: "Platform uptime" },
  { value: "30+", label: "Countries served" },
];

export function Stats() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-black/10 bg-black/10 dark:border-white/10 dark:bg-white/10 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white px-6 py-10 text-center dark:bg-[#0a0a0a] sm:py-14"
            >
              <div className="bg-gradient-to-br from-[#00E676] to-[#00b85f] bg-clip-text text-[clamp(2.25rem,5vw,3.5rem)] font-black leading-none text-transparent [text-shadow:0_0_30px_rgba(0,230,118,0.2)]">
                {s.value}
              </div>
              <div className="mt-3 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
