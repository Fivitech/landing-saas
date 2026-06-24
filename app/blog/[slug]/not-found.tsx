import Link from "next/link";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { SiteShell } from "@/components/site/SiteShell";

export default function BlogPostNotFound() {
  return (
    <SiteShell>
      <Navigation />
      <main className="grid min-h-[70vh] place-items-center px-4 pt-32 text-center">
        <div className="glass-panel max-w-lg rounded-3xl p-8 md:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">404</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Article not found.</h1>
          <p className="mt-5 text-muted-foreground">
            This post may have moved or never existed. Head back to the journal to keep reading.
          </p>
          <Link
            href="/blog"
            className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Back to Blog
          </Link>
        </div>
      </main>
      <Footer />
    </SiteShell>
  );
}
