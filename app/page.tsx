import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CtaFooter } from "@/components/site/CtaFooter";
import { Features } from "@/components/site/Features";
import { Hero } from "@/components/site/Hero";
import { HomeContact } from "@/components/site/HomeContact";
import { Marquee } from "@/components/site/Marquee";
import { OrganizationJsonLd } from "@/components/site/SeoJsonLd";
import { SiteShell } from "@/components/site/SiteShell";
import { Pricing } from "@/components/site/Pricing";
import { Stats } from "@/components/site/Stats";
import { seoDefaults } from "@/data/site";

export const metadata: Metadata = {
  title: seoDefaults.title,
  description: seoDefaults.description,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <SiteShell>
      <Navigation />
      <main className="flex-1">
        <Hero />
        <HomeContact />
        <Marquee />
        <Features compact />
        <Stats />
        <Pricing compact />
        <CtaFooter />
        <OrganizationJsonLd />
      </main>
      <Footer />
    </SiteShell>
  );
}
