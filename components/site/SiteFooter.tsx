import Image from "next/image";
import Link from "next/link";
import { contactDetails, navItems } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-4 py-10 sm:px-6">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/fivitechLogo-trimmed.png"
              alt="Fivitech"
              width={572}
              height={401}
              className="h-8 w-auto object-contain"
            />
            <span className="text-sm font-bold">Fivitech FXCRM</span>
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            CRM, client portal, IB management, payments, and MT5-ready operations for forex brokerages.
          </p>
          <p className="text-xs leading-relaxed text-muted-foreground">{contactDetails.address}</p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Navigate</h3>
          <div className="mt-4 grid gap-3 text-sm text-muted-foreground">
            {navItems.filter((item) => !item.external).map((item) => (
              <Link key={item.label} href={item.href} className="transition hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Contact</h3>
          <div className="mt-4 grid gap-3 text-sm text-muted-foreground">
            <a href={`mailto:${contactDetails.email}`} className="transition hover:text-foreground">
              {contactDetails.email}
            </a>
            <a href={`tel:${contactDetails.tel}`} className="transition hover:text-foreground">
              {contactDetails.phone}
            </a>
            <Link href="/privacy-policy" className="transition hover:text-foreground">Privacy Policy</Link>
            <Link href="/terms-of-service" className="transition hover:text-foreground">Terms of Service</Link>
            <Link href="/cookie-policy" className="transition hover:text-foreground">Cookie Policy</Link>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Fivi Technologies. All rights reserved.</p>
        <p>Built for regulated, high-growth brokerage operations.</p>
      </div>
    </footer>
  );
}
