import Link from "next/link";

// NOTE: Embedded Studio is DISABLED on this build.
//
// sanity@6 / @sanity/vision import `useEffectEvent` as a static named export of
// `react`, which React 19.2.x does not expose to Next's webpack ESM analysis,
// so importing `sanity.config` here breaks `next build` (the documented
// React-19 risk in the M2 plan, P7). The embedded implementation is preserved
// verbatim alongside this file as `page.embedded.tsx.disabled` and can be
// restored once Sanity ships a React-19-compatible release.
//
// Until then, run Studio as a separate process (the plan's fallback):
//   npx sanity dev      # local Studio at http://localhost:3333
//   npx sanity deploy   # hosted Studio at <project>.sanity.studio
// Both read the env-parameterized root sanity.config.ts / sanity.cli.ts.
//
// This stub keeps /studio resolvable and out of the `sanity` build graph.
export const dynamic = "force-static";

export default function StudioPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-background px-6 text-center text-foreground">
      <div className="max-w-lg">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Sanity Studio</p>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight">Studio runs as a separate process</h1>
        <p className="mt-4 text-muted-foreground">
          The embedded Studio is temporarily disabled pending Sanity&apos;s React 19 support. Editors
          run it with <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">npx sanity dev</code>{" "}
          locally, or it is deployed to a hosted{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">*.sanity.studio</code> URL.
        </p>
        <Link href="/blog" className="mt-8 inline-flex text-sm font-semibold text-primary hover:underline">
          Go to the blog
        </Link>
      </div>
    </main>
  );
}
