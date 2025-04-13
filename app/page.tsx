import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/landing-page/HeroSection";
import { FeaturesSection } from "@/components/landing-page/FeaturesSection";
import { FeaturesHighlightSection } from "@/components/landing-page/FeaturesHighlightSection";
import { LoyaltyProgramsSection } from "@/components/landing-page/LoyaltyProgramsSection";
import { ModernUiSection } from "@/components/landing-page/ModernUiSection";

import { PricingSection } from "@/components/landing-page/PricingSection";
import { CtaSection } from "@/components/landing-page/CtaSection";

import { FaqSection } from "@/components/landing-page/FaqSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-50 to-slate-100">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <FeaturesHighlightSection />
        <ModernUiSection />
        <LoyaltyProgramsSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
