import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { SiteShell } from "@/components/site/SiteShell";

export default function BlogLoading() {
  return (
    <SiteShell>
      <Navigation />
      <main className="pb-20 pt-36 md:pt-40">
        <section className="mx-auto mb-14 max-w-7xl px-6">
          <div className="h-4 w-24 rounded bg-muted" />
          <div className="mt-4 h-14 w-2/3 rounded bg-muted" />
          <div className="mt-4 h-5 w-1/2 rounded bg-muted" />
        </section>
        <section className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="glass-panel overflow-hidden rounded-2xl">
                <div className="aspect-[16/10] animate-pulse bg-muted" />
                <div className="space-y-3 p-6">
                  <div className="h-5 w-3/4 rounded bg-muted" />
                  <div className="h-4 w-full rounded bg-muted" />
                  <div className="h-4 w-1/2 rounded bg-muted" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </SiteShell>
  );
}
