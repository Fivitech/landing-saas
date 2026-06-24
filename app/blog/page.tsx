import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { SiteShell } from "@/components/site/SiteShell";
import { BlogList, type BlogCard } from "@/components/blog/BlogList";
import { getAllPosts, formatDate } from "@/lib/sanity.queries";
import { isSanityConfigured, urlFor } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Forex Brokerage Blog | Fivitech FXCRM",
  description:
    "Strategy, compliance, and operations insight for forex brokers — CRM, IB rebates, KYC/AML, payments, and MT5 from the Fivitech team.",
  alternates: { canonical: "/blog" },
};

// Revalidate the list periodically so newly published posts appear without a
// redeploy once Sanity is wired up. Harmless while unconfigured (no fetch runs).
export const revalidate = 60;

function EmptyState() {
  return (
    <main className="grid min-h-[70vh] place-items-center px-4 pt-32 text-center">
      <div className="glass-panel max-w-2xl rounded-3xl p-8 md:p-12">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Blog</p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Articles coming soon.</h1>
        <p className="mt-5 text-muted-foreground">
          The static site is live now. Forex brokerage insights start publishing once the dedicated
          Sanity project is connected.
        </p>
      </div>
    </main>
  );
}

export default async function BlogPage() {
  if (!isSanityConfigured()) {
    return (
      <SiteShell>
        <Navigation />
        <EmptyState />
        <Footer />
      </SiteShell>
    );
  }

  const posts = await getAllPosts();
  const cards: BlogCard[] = posts.map((p) => ({
    id: p._id,
    slug: p.slug.current,
    title: p.title,
    excerpt: p.excerpt || "",
    date: formatDate(p.publishedAt),
    likes: p.likes ?? 0,
    views: p.views ?? 0,
    categories: (p.categories || []).map((c) => ({ title: c.title, color: c.color })),
    imageUrl: p.mainImage?.asset ? urlFor(p.mainImage).width(1200).url() : null,
  }));

  return (
    <SiteShell>
      <Navigation />
      <main className="pb-20 pt-36 md:pt-40">
        <section className="mx-auto mb-14 max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Journal</p>
            <h1 className="mb-5 bg-gradient-text bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-7xl">
              The forex brokerage playbook.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              Practical guidance on launching and scaling a brokerage — CRM, IB management, compliance,
              payments, and trading infrastructure.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6">
          {cards.length === 0 ? (
            <div className="glass-panel mx-auto my-12 max-w-md rounded-2xl p-12 text-center">
              <h3 className="mb-2 text-2xl font-bold">No posts published yet.</h3>
              <p className="text-sm text-muted-foreground">Check back soon for fresh writing from the team.</p>
            </div>
          ) : (
            <BlogList posts={cards} />
          )}
        </section>
      </main>
      <Footer />
    </SiteShell>
  );
}
