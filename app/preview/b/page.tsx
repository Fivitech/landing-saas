import { Sora } from "next/font/google";
import { Header } from "@/components/preview/b/Header";
import { Hero } from "@/components/preview/b/Hero";
import { Marquee } from "@/components/preview/b/Marquee";
import { Features } from "@/components/preview/b/Features";
import { Stats } from "@/components/preview/b/Stats";
import { Pricing } from "@/components/preview/b/Pricing";
import { CtaFooter } from "@/components/preview/b/CtaFooter";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-b-sora",
  display: "swap",
});

export default function VariantBPage() {
  return (
    <div
      className={`${sora.variable} relative min-h-screen overflow-x-hidden bg-white font-[family-name:var(--font-b-sora)] text-neutral-900 antialiased selection:bg-[#00E676]/30 dark:bg-[#070707] dark:text-neutral-100`}
    >
      {/* gradient-mesh background — explicit colors, not the global tokens */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-[34rem] w-[34rem] rounded-full bg-[#00E676]/15 blur-[140px] dark:bg-[#00E676]/20" />
        <div className="absolute right-[-12rem] top-1/3 h-[30rem] w-[30rem] rounded-full bg-[#00ffa3]/10 blur-[150px] dark:bg-[#00ffa3]/12" />
        <div className="absolute bottom-[-10rem] left-1/3 h-[28rem] w-[28rem] rounded-full bg-[#00b85f]/10 blur-[140px] dark:bg-[#00E676]/10" />
        {/* faint dotted grid */}
        <div
          className="absolute inset-0 opacity-[0.4] dark:opacity-[0.25]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(0,230,118,0.12) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <Header />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <Stats />
        <Pricing />
        <CtaFooter />
      </main>
    </div>
  );
}
