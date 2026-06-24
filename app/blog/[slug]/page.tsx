import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Eye } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { SiteShell } from "@/components/site/SiteShell";
import { PortableBody } from "@/components/blog/PortableBody";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { LikeButton } from "@/components/blog/LikeButton";
import { ViewTracker } from "@/components/blog/ViewTracker";
import {
  getPostBySlug,
  getPostSlugs,
  getRelatedPosts,
  formatDate,
  calculateReadingTime,
} from "@/lib/sanity.queries";
import { isSanityConfigured, urlFor } from "@/lib/sanity";
import type { BlogPostSummary } from "@/lib/sanity.types";

export const revalidate = 60;

const SITE_URL = "https://fxcrm.fivitechnologies.com";

// Empty when unconfigured so the build never hits Sanity. With Sanity wired up
// these are pre-rendered at build time; unknown slugs still resolve at request
// time (dynamicParams defaults to true).
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  if (!isSanityConfigured()) return [];
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    return { title: "Article not found | Fivitech FXCRM" };
  }

  const title = (post.seo?.metaTitle || post.title).slice(0, 60);
  const description = (post.seo?.metaDescription || post.excerpt || "").slice(0, 160);
  const ogImage = post.seo?.openGraphImage?.asset
    ? urlFor(post.seo.openGraphImage).width(1200).height(630).url()
    : post.mainImage?.asset
      ? urlFor(post.mainImage).width(1200).height(630).url()
      : undefined;

  return {
    title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    robots: post.seo?.noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "article",
      title,
      description,
      url: `${SITE_URL}/blog/${slug}`,
      publishedTime: post.publishedAt,
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

function AuthorInitials({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((s) => s[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-primary to-[hsl(var(--cyan-accent))] text-[10px] font-bold text-primary-foreground">
      {initials}
    </span>
  );
}

function RelatedCard({ p }: { p: BlogPostSummary }) {
  const imageUrl = p.mainImage?.asset ? urlFor(p.mainImage).width(600).url() : undefined;
  return (
    <Link
      href={`/blog/${p.slug.current}`}
      className="group glass-panel block overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1"
    >
      <div className="relative aspect-[16/10] bg-gradient-to-br from-primary/30 via-[hsl(var(--cyan-accent))]/15 to-transparent">
        {imageUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={imageUrl} alt={p.title} className="h-full w-full object-cover" loading="lazy" />
        )}
      </div>
      <div className="p-6">
        <h3 className="mb-3 line-clamp-2 text-lg font-semibold leading-snug transition-colors group-hover:text-primary">
          {p.title}
        </h3>
        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Calendar className="h-3 w-3" />
          {formatDate(p.publishedAt)}
        </span>
      </div>
    </Link>
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const reading = calculateReadingTime(post.body);
  const categoryRefs = (post.categories || []).filter(Boolean).map((c) => c._id);
  const related = await getRelatedPosts(post._id, categoryRefs);

  const ogImage = post.seo?.openGraphImage?.asset
    ? urlFor(post.seo.openGraphImage).width(1200).url()
    : post.mainImage?.asset
      ? urlFor(post.mainImage).width(1200).url()
      : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt || "",
    image: ogImage ? [ogImage] : undefined,
    author: { "@type": "Person", name: post.author?.name || "Fivitech" },
    publisher: {
      "@type": "Organization",
      name: "Fivi Technologies",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/fivitechLogo.png` },
    },
    datePublished: post.publishedAt,
    keywords: (post.tags || []).map((t) => t.title).join(", "),
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug.current}`,
  };

  const mainImageUrl = post.mainImage?.asset
    ? urlFor(post.mainImage).width(2000).fit("max").auto("format").url()
    : undefined;

  return (
    <SiteShell>
      <ReadingProgress />
      <ViewTracker postId={post._id} />
      <Navigation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="pb-12 pt-32">
        <header className="mx-auto mb-12 max-w-[720px] px-6 text-center">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>

          {post.categories && post.categories.length > 0 && (
            <div className="mb-6 flex flex-wrap justify-center gap-2">
              {post.categories.filter(Boolean).map((c) => {
                const color = c.color || "#00E676";
                return (
                  <span
                    key={c._id}
                    className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] backdrop-blur-md"
                    style={{ backgroundColor: `${color}20`, color, border: `1px solid ${color}40` }}
                  >
                    {c.title}
                  </span>
                );
              })}
            </div>
          )}

          <h1 className="mb-6 bg-gradient-text bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-6xl">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="mx-auto mb-8 max-w-2xl text-lg italic leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>
          )}

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs text-muted-foreground">
            {post.author && (
              <>
                <span className="inline-flex items-center gap-2">
                  <AuthorInitials name={post.author.name} />
                  {post.author.name}
                </span>
                <span>·</span>
              </>
            )}
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(post.publishedAt)}
            </span>
            <span>·</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {reading.text}
            </span>
            <span>·</span>
            <span className="inline-flex items-center gap-1.5">
              <Eye className="h-3.5 w-3.5" />
              {(post.views ?? 0).toLocaleString()} views
            </span>
          </div>
        </header>

        {mainImageUrl && (
          <div className="mx-auto mb-16 max-w-[1100px] px-6">
            <div className="glass-panel relative aspect-[16/9] overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={mainImageUrl}
                alt={post.mainImage?.alt || post.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        )}

        <div className="mx-auto max-w-[720px] px-6">
          {post.body && <PortableBody value={post.body} />}

          <LikeButton postId={post._id} initialLikes={post.likes ?? 0} />

          {post.tags && post.tags.length > 0 && (
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Tags</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span
                    key={t._id}
                    className="glass-panel rounded-full px-3 py-1.5 text-xs text-foreground/80"
                  >
                    #{t.title}
                  </span>
                ))}
              </div>
            </div>
          )}

          <ShareButtons title={post.title} />
        </div>
      </article>

      {related.length > 0 && (
        <section className="px-6 pb-20 pt-12">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Keep Reading</p>
            <h2 className="mb-12 bg-gradient-text bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-5xl">
              More from the team.
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.filter(Boolean).map((p) => (
                <RelatedCard key={p._id} p={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </SiteShell>
  );
}
