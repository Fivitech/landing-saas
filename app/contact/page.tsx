import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/contact/ContactForm";
import { SiteShell } from "@/components/site/SiteShell";
import { contactDetails } from "@/data/site";

export const metadata: Metadata = {
  title: "Request a Forex CRM Demo | Fivitech FXCRM",
  description: "Request a Fivitech FXCRM demo for your forex brokerage and see the CRM, client area, IB portal, KYC, payments, and MT5 workflows.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <SiteShell>
      <Navigation />
      <main className="flex-1 px-4 pb-24 pt-36 sm:px-6 lg:pt-44">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Contact</p>
            <h1 className="mt-4 text-[clamp(2.5rem,5vw,4.75rem)] font-extrabold leading-tight tracking-tight">See your brokerage workflow on Fivitech.</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Send the six required details and our team will walk you through the CRM, client portal, IB, KYC, payment, and trading workflows.</p>
            <div className="mt-10 grid gap-5 text-sm text-muted-foreground">
              <a href={`mailto:${contactDetails.email}`} className="glass-panel flex items-center gap-4 rounded-2xl p-4 transition hover:text-foreground"><Mail className="h-5 w-5 text-primary" /> {contactDetails.email}</a>
              <a href={`tel:${contactDetails.tel}`} className="glass-panel flex items-center gap-4 rounded-2xl p-4 transition hover:text-foreground"><Phone className="h-5 w-5 text-primary" /> {contactDetails.phone}</a>
              <div className="glass-panel flex items-start gap-4 rounded-2xl p-4"><MapPin className="mt-0.5 h-5 w-5 text-primary" /> {contactDetails.address}</div>
            </div>
          </div>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </SiteShell>
  );
}
