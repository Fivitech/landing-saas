import Link from "next/link";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { SiteShell } from "@/components/site/SiteShell";

export default function NotFound() {
  return (
    <SiteShell>
      <Navigation />
      <main className="grid min-h-[70vh] place-items-center px-4 pt-32 text-center">
        <div className="max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">404</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">This page is not in the brokerage stack.</h1>
          <p className="mt-5 text-muted-foreground">Return home or request a demo to see the live FXCRM workflow.</p>
          <Link href="/" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)]">Back home</Link>
        </div>
      </main>
      <Footer />
    </SiteShell>
  );
}
