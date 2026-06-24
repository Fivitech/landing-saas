import { groq } from "next-sanity";
import type { PortableTextBlock } from "@portabletext/types";
import { client, isSanityConfigured } from "./sanity";
import type { BlogPost, BlogPostSummary, ReadingTime } from "./sanity.types";

// All posts for the listing page.
export const allPostsQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage { asset->{ _id, url }, alt },
    author->{ _id, name, slug },
    categories[]->{ _id, title, slug, color },
    tags[]->{ _id, title, slug },
    likes,
    views
  }
`;

// Single post by slug (full body + author + seo).
export const postBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage { asset->{ _id, url }, alt },
    body,
    author->{
      _id, name, slug, bio,
      image { asset->{ _id, url }, alt },
      socialLinks
    },
    categories[]->{ _id, title, slug, color },
    tags[]->{ _id, title, slug },
    seo {
      metaTitle,
      metaDescription,
      openGraphImage { asset->{ _id, url }, alt },
      noIndex
    },
    likes,
    views
  }
`;

// Just the slugs, for generateStaticParams.
export const postSlugsQuery = groq`
  *[_type == "blogPost" && defined(slug.current)][].slug.current
`;

// Related posts that share at least one category, excluding the current post.
export const relatedPostsQuery = groq`
  *[_type == "blogPost" && _id != $currentId && count(categories[@._ref in $categoryRefs]) > 0]
    | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage { asset->{ _id, url }, alt },
    author->{ _id, name, slug },
    categories[]->{ _id, title, slug, color },
    likes,
    views
  }
`;

// ---------- Fetchers (all return safe empties when unconfigured) ----------

export async function getAllPosts(): Promise<BlogPostSummary[]> {
  if (!isSanityConfigured()) return [];
  try {
    return (await client.fetch<BlogPostSummary[]>(allPostsQuery)) || [];
  } catch (error) {
    console.error("Sanity getAllPosts failed:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!isSanityConfigured()) return null;
  try {
    return await client.fetch<BlogPost | null>(postBySlugQuery, { slug });
  } catch (error) {
    console.error("Sanity getPostBySlug failed:", error);
    return null;
  }
}

export async function getPostSlugs(): Promise<string[]> {
  if (!isSanityConfigured()) return [];
  try {
    return (await client.fetch<string[]>(postSlugsQuery)) || [];
  } catch (error) {
    console.error("Sanity getPostSlugs failed:", error);
    return [];
  }
}

export async function getRelatedPosts(
  currentId: string,
  categoryRefs: string[],
): Promise<BlogPostSummary[]> {
  if (!isSanityConfigured() || categoryRefs.length === 0) return [];
  try {
    return (
      (await client.fetch<BlogPostSummary[]>(relatedPostsQuery, {
        currentId,
        categoryRefs,
      })) || []
    );
  } catch (error) {
    console.error("Sanity getRelatedPosts failed:", error);
    return [];
  }
}

// ---------- Display utils ----------

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function calculateReadingTime(content?: PortableTextBlock[]): ReadingTime {
  if (!content || content.length === 0) {
    return { text: "1 min read", minutes: 1, words: 0 };
  }

  const text = content
    .map((block) => {
      if (block._type === "block" && Array.isArray(block.children)) {
        return block.children
          .map((child) => (child as { text?: string }).text || "")
          .join("");
      }
      return "";
    })
    .join(" ");

  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return { text: `${minutes} min read`, minutes, words };
}
