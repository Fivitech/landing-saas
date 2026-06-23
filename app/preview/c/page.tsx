"use client";

import { Space_Grotesk, Inter } from "next/font/google";
import "./variant-c.css";
import { Header } from "@/components/preview/c/Header";
import { Hero } from "@/components/preview/c/Hero";
import { Features } from "@/components/preview/c/Features";
import { Stats } from "@/components/preview/c/Stats";
import { Pricing } from "@/components/preview/c/Pricing";
import { FooterCTA, Footer } from "@/components/preview/c/FooterCTA";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-c-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-c-body",
  display: "swap",
});

export default function VariantCPage() {
  return (
    <div
      className={`${display.variable} ${body.variable} variant-c min-h-screen bg-[#fbfbfd] font-body text-slate-900 antialiased dark:bg-[#070710] dark:text-slate-100`}
    >
      <Header />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Pricing />
        <FooterCTA />
      </main>
      <Footer />
    </div>
  );
}
