import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Forex Brokerage Blog | Fivitech FXCRM",
  description: "Fivitech FXCRM blog publishing will open after the dedicated Sanity project is connected.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <SiteShell>
      <Navigation />
      <main className="grid min-h-[70vh] place-items-center px-4 pt-32 text-center">
        <div className="glass-panel max-w-2xl rounded-3xl p-8 md:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Blog</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Forex brokerage insights are next.</h1>
          <p className="mt-5 text-muted-foreground">The static site is ready now. Blog publishing starts after the dedicated Sanity project and write token are created.</p>
        </div>
      </main>
      <Footer />
    </SiteShell>
  );
}
