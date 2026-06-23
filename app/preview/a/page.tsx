"use client";

import { Montserrat } from "next/font/google";
import { Background } from "@/components/preview/a/Background";
import { Header } from "@/components/preview/a/Header";
import { Hero } from "@/components/preview/a/Hero";
import { Features } from "@/components/preview/a/Features";
import { Stats } from "@/components/preview/a/Stats";
import { Pricing } from "@/components/preview/a/Pricing";
import { CTA } from "@/components/preview/a/CTA";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-a-montserrat",
  display: "swap",
});

export default function VariantAPage() {
  return (
    <div
      className={`${montserrat.variable} relative min-h-screen font-[var(--font-a-montserrat)] text-neutral-900 antialiased dark:text-neutral-100`}
      style={{ fontFamily: "var(--font-a-montserrat)" }}
    >
      <Background />
      <Header />
      <main>
        <Hero />
        <Features />
        <Stats />
        <Pricing />
        <CTA />
      </main>
    </div>
  );
}
