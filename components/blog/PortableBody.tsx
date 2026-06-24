import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { urlFor } from "@/lib/sanity";

// Server-rendered Portable Text body, styled with landingfx tokens.
// No code-block or table serializers — those Sanity plugins are not installed,
// so the schema cannot produce those member types.
const components: PortableTextComponents = {
  types: {
    image: ({ value }: { value: { asset?: unknown; alt?: string; caption?: string } }) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full rounded-xl border border-border"
            src={urlFor(value).width(1200).fit("max").auto("format").url()}
            alt={value.alt || ""}
            loading="lazy"
          />
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-muted-foreground">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="mt-14 mb-5 bg-gradient-text bg-clip-text text-3xl font-extrabold tracking-tight text-transparent md:text-4xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-10 mb-4 text-xl font-bold tracking-tight text-foreground md:text-2xl">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-8 mb-3 text-lg font-semibold text-foreground md:text-xl">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="mb-5 text-base leading-[1.8] text-foreground/85 md:text-[17px]">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-2 border-primary pl-6 text-lg italic leading-relaxed text-foreground/90 md:text-xl">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-6 ml-5 list-disc space-y-2 text-foreground/85 marker:text-primary">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-6 ml-5 list-decimal space-y-2 text-foreground/85 marker:text-primary">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-[1.8]">{children}</li>,
    number: ({ children }) => <li className="leading-[1.8]">{children}</li>,
  },
  marks: {
    link: ({ value, children }: { value?: { href?: string }; children?: React.ReactNode }) => {
      const href = value?.href || "";
      const isExternal = href.startsWith("http");
      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-primary underline-offset-2 hover:underline"
        >
          {children}
        </a>
      );
    },
    code: ({ children }) => (
      <code className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[0.9em] text-primary">
        {children}
      </code>
    ),
  },
};

export function PortableBody({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />;
}
