"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { PricingHeader } from "@/components/pricing/PricingHeader";
import { PricingPlans } from "@/components/pricing/PricingPlans";

export default function PricingPage() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      <main className="flex-1 pt-16">
        <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <PricingHeader />
        </div>
        <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.4s' }}>
          <PricingPlans />
        </div>
      </main>
      <Footer />
    </div>
  );
}
