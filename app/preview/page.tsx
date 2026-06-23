import Link from "next/link";
import { ThemeToggle } from "@/components/preview/ThemeToggle";

const VARIANTS = [
  {
    slug: "a",
    name: "Variant A — Same DNA, Own Skin",
    blurb:
      "Fivitech's dark glass / gradient-mesh / glow system and Montserrat, but with its own brand accent. A sibling to the main site, not a twin.",
  },
  {
    slug: "b",
    name: "Variant B — Shared System, Retuned",
    blurb:
      "Same premium aesthetic family as Fivitech, but the section rhythm, layout and animation language are re-arranged so it reads differently.",
  },
  {
    slug: "c",
    name: "Variant C — Inspired-By Only",
    blurb:
      "Takes only the dark, premium, glassy mood. Different font pairing, different accent system, and a bento-style component language.",
  },
];

export default function PreviewHub() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <div className="mb-10 flex items-center justify-between">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
            Landing redesign · prototypes
          </p>
          <ThemeToggle />
        </div>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Pick a direction
        </h1>
        <p className="mt-3 max-w-xl text-neutral-400">
          Three takes on the landing page, inspired by fivitech-website to
          varying degrees. Each supports dark and light mode (toggle top-right).
          Open each, compare, then we roll the winner across the whole site.
        </p>

        <div className="mt-12 space-y-4">
          {VARIANTS.map((v) => (
            <Link
              key={v.slug}
              href={`/preview/${v.slug}`}
              className="group block rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/25 hover:bg-white/[0.06]"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium">{v.name}</h2>
                <span className="text-neutral-500 transition group-hover:translate-x-1 group-hover:text-neutral-200">
                  →
                </span>
              </div>
              <p className="mt-2 text-sm text-neutral-400">{v.blurb}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
