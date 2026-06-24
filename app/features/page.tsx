import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CtaFooter } from "@/components/site/CtaFooter";
import { Features } from "@/components/site/Features";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Forex CRM Features | Fivitech FXCRM",
  description:
    "Explore Fivitech's forex CRM features: backoffice, client portal, IB management, KYC, payments, copy trading, and MT5-ready workflows.",
  alternates: { canonical: "/features" },
};

export default function FeaturesPage() {
  return (
    <SiteShell>
      <Navigation />
      <main className="flex-1">
        <section className="px-4 pb-4 pt-36 sm:px-6 lg:pt-44">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">FXCRM feature suite</p>
            <h1 className="mt-4 max-w-4xl text-[clamp(2.5rem,5vw,4.75rem)] font-extrabold leading-tight tracking-tight">
              Everything a forex brokerage needs to launch, operate, and scale.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Replace disconnected tools with a single operating layer for teams, clients, IBs, payments, compliance, and trading workflows.
            </p>
          </div>
        </section>
        <Features />
        <CtaFooter />
      </main>
      <Footer />
    </SiteShell>
  );
}
