"use client";

/**
 * Variant A — fixed gradient-mesh background.
 * Low-opacity azure/violet blobs + a faint grain texture, behind everything.
 * Works in both themes: blobs are slightly brighter on dark, softer on light.
 */
export function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* base wash */}
      <div className="absolute inset-0 bg-[#fafafa] dark:bg-[#0a0a0b]" />

      {/* azure blob — top left */}
      <div className="absolute -left-[10%] -top-[15%] h-[55vw] w-[55vw] rounded-full bg-[hsl(210_100%_56%)] opacity-[0.16] blur-[120px] dark:opacity-[0.22]" />
      {/* violet blob — top right */}
      <div className="absolute -right-[12%] top-[5%] h-[48vw] w-[48vw] rounded-full bg-[hsl(265_90%_66%)] opacity-[0.14] blur-[120px] dark:opacity-[0.20]" />
      {/* deep azure — bottom center */}
      <div className="absolute -bottom-[20%] left-[20%] h-[50vw] w-[50vw] rounded-full bg-[hsl(225_95%_60%)] opacity-[0.10] blur-[130px] dark:opacity-[0.16]" />

      {/* film grain */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-soft-light dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
