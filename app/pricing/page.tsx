import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CtaFooter } from "@/components/site/CtaFooter";
import { Pricing } from "@/components/site/Pricing";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Forex CRM Pricing | Fivitech FXCRM",
  description: "Compare Fivitech FXCRM plans for new, growing, and enterprise forex brokerages.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <SiteShell>
      <Navigation />
      <main className="flex-1">
        <section className="px-4 pb-4 pt-36 text-center sm:px-6 lg:pt-44">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Pricing</p>
          <h1 className="mx-auto mt-4 max-w-4xl text-[clamp(2.5rem,5vw,4.75rem)] font-extrabold leading-tight tracking-tight">
            Brokerage infrastructure priced for every growth stage.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Start lean, scale your active client base, and add enterprise controls when your desk is ready.
          </p>
        </section>
        <Pricing />
        <CtaFooter />
      </main>
      <Footer />
    </SiteShell>
  );
}
