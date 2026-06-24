"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Calendar, Heart, Eye, Search, X, SearchX, ArrowRight } from "lucide-react";

// Build-time generated per-post cover PNG (also the post's OG image). Used as the
// card/hero thumbnail whenever a post has no real mainImage.
function coverImageUrl(slug: string): string {
  return `/blog/${slug}/opengraph-image`;
}

export type BlogCard = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  likes: number;
  views: number;
  categories: { title: string; color?: string }[];
  imageUrl: string | null;
};

const gradients = [
  "from-primary/30 via-[hsl(var(--cyan-accent))]/20 to-transparent",
  "from-[hsl(var(--violet-accent))]/30 via-primary/20 to-transparent",
  "from-[hsl(var(--cyan-accent))]/30 via-primary/20 to-transparent",
  "from-orange-500/30 via-primary/15 to-transparent",
  "from-emerald-400/30 via-[hsl(var(--cyan-accent))]/15 to-transparent",
  "from-[hsl(var(--violet-accent))]/30 via-orange-500/15 to-transparent",
];

function CategoryPill({ c }: { c: { title: string; color?: string } }) {
  const color = c.color || "#00E676";
  return (
    <span
      className="rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-md"
      style={{ backgroundColor: `${color}20`, color, border: `1px solid ${color}40` }}
    >
      {c.title}
    </span>
  );
}

function PostCard({ post, index }: { post: BlogCard; index: number }) {
  const gradient = gradients[index % gradients.length];
  return (
    <article className="group glass-panel relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1">
      <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-10" aria-label={post.title} />
      <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${gradient}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.imageUrl || coverImageUrl(post.slug)}
          alt={post.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute left-4 top-4 z-10 flex flex-wrap gap-2">
          {post.categories.map((c) => (
            <CategoryPill key={c.title} c={c} />
          ))}
        </div>
      </div>
      <div className="p-6">
        <h3 className="mb-3 line-clamp-2 text-lg font-semibold leading-snug transition-colors group-hover:text-primary">
          {post.title}
        </h3>
        <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3 w-3" />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Heart className="h-3 w-3" />
            {post.likes}
          </span>
          <span className="flex items-center gap-1.5">
            <Eye className="h-3 w-3" />
            {post.views.toLocaleString()}
          </span>
        </div>
      </div>
    </article>
  );
}

function FeaturedPost({ post }: { post: BlogCard }) {
  return (
    <div className="glass-panel relative mb-16 grid gap-0 overflow-hidden rounded-3xl md:grid-cols-2">
      <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-10" aria-label="Featured article" />
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/30 via-[hsl(var(--cyan-accent))]/25 to-[hsl(var(--violet-accent))]/20 md:aspect-auto md:min-h-[420px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.imageUrl || coverImageUrl(post.slug)}
          alt={post.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-8 left-8 z-10 text-xs uppercase tracking-[0.4em] text-foreground/40">
          Featured
        </div>
      </div>
      <div className="flex flex-col justify-center gap-5 p-8 md:p-12">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-primary/40 bg-primary/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
            Featured
          </span>
          {post.categories.slice(0, 2).map((c) => (
            <CategoryPill key={c.title} c={c} />
          ))}
        </div>
        <h2 className="bg-gradient-text bg-clip-text text-3xl font-extrabold leading-tight tracking-tight text-transparent md:text-4xl">
          {post.title}
        </h2>
        <p className="line-clamp-3 leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Heart className="h-3.5 w-3.5" />
            {post.likes}
          </span>
          <span className="flex items-center gap-1.5">
            <Eye className="h-3.5 w-3.5" />
            {post.views.toLocaleString()}
          </span>
        </div>
        <Link
          href={`/blog/${post.slug}`}
          className="relative z-20 mt-2 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary"
        >
          Read article
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

export function BlogList({ posts }: { posts: BlogCard[] }) {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const allCategories = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => p.categories.forEach((c) => set.add(c.title)));
    return ["All", ...Array.from(set).sort()];
  }, [posts]);

  const showFeatured = posts.length >= 2;
  const featured = showFeatured ? posts[0] : undefined;
  const gridPosts = showFeatured ? posts.slice(1) : posts;

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return gridPosts.filter((p) => {
      const catOk = category === "All" || p.categories.some((c) => c.title === category);
      const qOk = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [gridPosts, category, search]);

  return (
    <>
      {featured && <FeaturedPost post={featured} />}

      <div className="glass-panel mb-10 flex flex-col gap-3 rounded-2xl px-4 py-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {allCategories.map((f) => {
            const active = category === f;
            return (
              <button
                key={f}
                onClick={() => setCategory(f)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                  active
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>
        <div className="relative w-full lg:w-[280px]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search articles…"
            className="h-9 w-full rounded-full border border-border bg-muted/50 pl-9 pr-9 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-2 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full hover:bg-muted"
              aria-label="Clear search"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="glass-panel mx-auto my-12 max-w-md rounded-2xl p-12 text-center">
          <SearchX className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
          <h3 className="mb-2 text-2xl font-bold">Nothing matches that yet.</h3>
          <p className="mb-6 text-sm text-muted-foreground">Try a different category or search term.</p>
          <button
            onClick={() => {
              setCategory("All");
              setSearch("");
            }}
            className="rounded-full border border-border px-5 py-2 text-sm transition-colors hover:border-primary/40 hover:text-primary"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, i) => (
            <PostCard key={post.id} post={post} index={i} />
          ))}
        </div>
      )}
    </>
  );
}
