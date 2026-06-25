import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/contact/ContactForm";
import { SiteShell } from "@/components/site/SiteShell";
import { contactDetails } from "@/data/site";

// Contact-page display override only. The shared contactDetails.email is left
// untouched so the API/legal/footer continue to use the canonical address.
const displayEmail = "contact@fivitech.com";

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
        {/* On mobile, DOM order is intro → form → details (exactly what we want):
            title + description, then the form, then the contact cards below it.
            On lg, a 2-col grid places intro top-left, details bottom-left, and
            the form in a full-height right column spanning both rows. */}
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-x-20 lg:gap-y-10">
          <div className="lg:col-start-1 lg:row-start-1">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Contact</p>
            <h1 className="mt-4 text-[clamp(2.5rem,5vw,4.75rem)] font-extrabold leading-tight tracking-tight">See your brokerage workflow on Fivitech.</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Send the six required details and our team will walk you through the CRM, client portal, IB, KYC, payment, and trading workflows.</p>
          </div>
          <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2">
            <ContactForm />
          </div>
          <div className="grid gap-5 text-sm text-muted-foreground lg:col-start-1 lg:row-start-2 lg:self-start">
            <a href={`mailto:${displayEmail}`} className="glass-panel flex items-center gap-4 rounded-2xl p-4 transition hover:text-foreground"><Mail className="h-5 w-5 text-primary" /> {displayEmail}</a>
            <a href={`tel:${contactDetails.tel}`} className="glass-panel flex items-center gap-4 rounded-2xl p-4 transition hover:text-foreground"><Phone className="h-5 w-5 text-primary" /> {contactDetails.phone}</a>
            <div className="glass-panel flex items-start gap-4 rounded-2xl p-4"><MapPin className="mt-0.5 h-5 w-5 text-primary" /> {contactDetails.address}</div>
          </div>
        </div>
      </main>
      <Footer />
    </SiteShell>
  );
}
