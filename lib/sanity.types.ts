import type { PortableTextBlock } from "@portabletext/types";

export interface SanityImage {
  asset: {
    _id: string;
    url: string;
  };
  alt?: string;
}

export interface SanityImageWithCaption extends SanityImage {
  caption?: string;
}

export interface Author {
  _id: string;
  name: string;
  slug: { current: string };
  bio?: PortableTextBlock[];
  image?: SanityImage;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface Category {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
  color?: string;
}

export interface Tag {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
}

export interface SEO {
  metaTitle?: string;
  metaDescription?: string;
  openGraphImage?: SanityImage;
  noIndex?: boolean;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  author: Author;
  mainImage?: SanityImage;
  categories?: Category[];
  tags?: Tag[];
  publishedAt: string;
  excerpt?: string;
  body?: PortableTextBlock[];
  seo?: SEO;
  likes?: number;
  views?: number;
}

export interface BlogPostSummary {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt: string;
  mainImage?: SanityImage;
  author: Pick<Author, "_id" | "name" | "slug">;
  categories?: Pick<Category, "_id" | "title" | "slug" | "color">[];
  tags?: Pick<Tag, "_id" | "title" | "slug">[];
  likes?: number;
  views?: number;
}

export interface ReadingTime {
  text: string;
  minutes: number;
  words: number;
}
