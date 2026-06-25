"use client";

import { motion, type Variants } from "framer-motion";
import { Smartphone, Bell, Fingerprint, BarChart3 } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const bullets: { icon: typeof Smartphone; label: string }[] = [
  { icon: Smartphone, label: "White-labeled iOS & Android apps" },
  { icon: BarChart3, label: "Real-time trading & account management" },
  { icon: Bell, label: "Push notifications" },
  { icon: Fingerprint, label: "Biometric authentication" },
];

export function MobileApps() {
  return (
    <section id="mobile" className="px-4 py-24 sm:px-6">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Text column */}
        <div>
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="text-xs font-bold uppercase tracking-[0.22em] text-primary"
          >
            Mobile Applications
          </motion.p>

          <motion.h2
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-4 text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-tight tracking-tight"
          >
            Fully branded mobile apps for{" "}
            <span className="bg-gradient-text bg-clip-text text-transparent">
              clients and brokers
            </span>
          </motion.h2>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground"
          >
            Give your clients and operations team a seamlessly branded experience on iOS and
            Android — so trading, account management, and brokerage oversight travel with them
            everywhere.
          </motion.p>

          <ul className="mt-8 space-y-4">
            {bullets.map(({ icon: Icon, label }, index) => (
              <motion.li
                key={label}
                custom={index + 3}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="flex items-center gap-4"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-base font-medium">{label}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Phone mockup column */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotateY: -6 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
          style={{ perspective: 1200 }}
        >
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="relative flex justify-center">
      {/* Glow halo */}
      <div className="absolute inset-0 -z-10 mx-auto w-56 rounded-full bg-primary/25 blur-[80px]" />

      {/* Floating badge — top right */}
      <div className="absolute -right-6 top-16 z-10 rotate-[4deg] rounded-2xl border border-border bg-card/85 px-3.5 py-2 shadow-xl backdrop-blur-xl">
        <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
          <Fingerprint className="h-3 w-3 text-primary" />
          Face ID
        </div>
        <div className="mt-0.5 text-sm font-bold text-foreground">Authenticated</div>
      </div>

      {/* Floating badge — bottom left */}
      <div className="absolute -left-6 bottom-24 z-10 rotate-[-3deg] rounded-2xl border border-border bg-card/85 px-3.5 py-2 shadow-xl backdrop-blur-xl">
        <div className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
          Portfolio
        </div>
        <div className="text-sm font-extrabold text-primary">+12.4%</div>
      </div>

      {/* Phone shell — animate-float */}
      <div className="animate-float">
        {/* Outer phone frame */}
        <div className="relative h-[520px] w-[260px] rounded-[3rem] border-[6px] border-foreground/15 bg-card shadow-2xl">
          {/* Notch */}
          <div className="absolute left-1/2 top-0 flex h-7 w-28 -translate-x-1/2 items-center justify-center rounded-b-2xl bg-foreground/10">
            <div className="h-2 w-16 rounded-full bg-foreground/20" />
          </div>

          {/* Screen surface */}
          <div className="flex h-full flex-col overflow-hidden rounded-[2.5rem] bg-background p-0">
            {/* Status bar */}
            <div className="flex items-center justify-between px-6 pb-1 pt-8">
              <span className="text-[10px] font-semibold text-muted-foreground">9:41</span>
              <span className="text-[10px] font-semibold text-muted-foreground">●●●</span>
            </div>

            {/* App header */}
            <div className="px-5 pb-1 pt-1">
              <div className="text-[11px] font-semibold uppercase tracking-widest text-primary">
                Fivitech
              </div>
              <div className="text-lg font-extrabold leading-tight">My Account</div>
            </div>

            {/* Balance card */}
            <div className="mx-4 mt-3 rounded-2xl border border-primary/20 bg-primary/10 px-4 py-4">
              <div className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                Equity
              </div>
              <div className="mt-1 bg-gradient-text bg-clip-text text-2xl font-black text-transparent">
                $48,320.00
              </div>
              <div className="mt-0.5 text-[11px] font-medium text-primary">+$1,240 today</div>

              {/* Mini sparkline bars */}
              <div className="mt-3 flex items-end gap-1">
                {[40, 55, 38, 65, 50, 72, 60, 85, 70, 90].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-primary/40"
                    style={{ height: `${h * 0.36}px` }}
                  />
                ))}
              </div>
            </div>

            {/* Positions list */}
            <div className="mt-4 flex-1 space-y-2 px-4">
              {[
                { pair: "EUR/USD", side: "Buy", pl: "+$320" },
                { pair: "GBP/JPY", side: "Sell", pl: "-$85" },
                { pair: "XAU/USD", side: "Buy", pl: "+$640" },
              ].map((row) => (
                <div
                  key={row.pair}
                  className="flex items-center justify-between rounded-xl border border-border bg-muted/40 px-3 py-2.5"
                >
                  <div>
                    <div className="text-[11px] font-bold">{row.pair}</div>
                    <div className="text-[10px] font-medium text-muted-foreground">{row.side}</div>
                  </div>
                  <div
                    className={`text-xs font-bold ${
                      row.pl.startsWith("+") ? "text-primary" : "text-destructive"
                    }`}
                  >
                    {row.pl}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom nav */}
            <div className="mt-3 flex items-center justify-around border-t border-border px-4 py-3">
              {["Home", "Trade", "History", "Profile"].map((tab) => (
                <div key={tab} className="flex flex-col items-center gap-0.5">
                  <div
                    className={`h-1 w-1 rounded-full ${tab === "Home" ? "bg-primary" : "bg-transparent"}`}
                  />
                  <span
                    className={`text-[9px] font-semibold ${
                      tab === "Home" ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {tab}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
