"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "120+", label: "Brokers powered" },
  { value: "$4.8B", label: "Volume cleared" },
  { value: "99.98%", label: "Platform uptime" },
  { value: "40+", label: "Countries served" },
];

export function Stats() {
  return (
    <section className="px-5 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[2rem] border border-slate-900/[0.07] bg-gradient-to-br from-indigo-600 to-cyan-500 p-px dark:border-white/[0.08]">
          <div className="rounded-[calc(2rem-1px)] bg-white/[0.04] backdrop-blur-sm">
            <div className="grid grid-cols-2 divide-x divide-y divide-white/15 sm:grid-cols-4 sm:divide-y-0">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="px-6 py-10 text-center"
                >
                  <p className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    {s.value}
                  </p>
                  <p className="mt-2 text-sm font-medium text-white/80">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
