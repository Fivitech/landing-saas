import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { PricingHeader } from "@/components/pricing/PricingHeader";
import { PricingPlans } from "@/components/pricing/PricingPlans";

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-50 to-slate-100">
      <Navigation />
      <main className="flex-1 pt-16">
        <PricingHeader />
        <PricingPlans />
      </main>
      <Footer />
    </div>
  );
}
