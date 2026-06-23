"use client";

const ITEMS = [
  "Multi-level IB",
  "Client Portal",
  "Backoffice CRM",
  "Payment Gateways",
  "Copy Trading",
  "White-label",
  "KYC & Compliance",
  "Real-time Reporting",
  "MT5 Integration",
  "Wallet System",
];

export function Marquee() {
  // duplicate the list so the horizontal scroll loops seamlessly
  const loop = [...ITEMS, ...ITEMS];

  return (
    <section className="relative overflow-hidden border-y border-black/5 bg-neutral-50/60 py-6 dark:border-white/5 dark:bg-white/[0.02]">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent dark:from-[#070707]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent dark:from-[#070707]" />

      <div className="flex w-max animate-[bmarquee_28s_linear_infinite] items-center gap-10 hover:[animation-play-state:paused]">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className="whitespace-nowrap text-lg font-semibold text-neutral-500 dark:text-neutral-400">
              {item}
            </span>
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#00E676]" />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes bmarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
