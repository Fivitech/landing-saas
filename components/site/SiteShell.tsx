import type { ReactNode } from "react";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-primary/30">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* Primary multi-color gradient mesh (green + cyan + violet), slow drift */}
        <div
          className="absolute -inset-[15%] animate-mesh-drift"
          style={{ backgroundImage: "var(--ambient-mesh)" }}
        />
        {/* Secondary mesh on a slower, offset cadence for depth */}
        <div
          className="absolute -inset-[20%] animate-mesh-drift-slow mix-blend-normal dark:mix-blend-screen"
          style={{ backgroundImage: "var(--ambient-mesh-2)" }}
        />
        {/* Concentrated corner glows that pick up the brand neon */}
        <div className="absolute -left-40 -top-40 h-[36rem] w-[36rem] animate-mesh-drift rounded-full bg-primary/25 blur-[150px] dark:bg-primary/30" />
        <div className="absolute right-[-14rem] top-1/4 h-[32rem] w-[32rem] rounded-full bg-[hsl(var(--cyan-accent))]/20 blur-[160px] dark:bg-[hsl(var(--cyan-accent))]/25" />
        <div className="absolute bottom-[-12rem] left-1/3 h-[30rem] w-[30rem] rounded-full bg-[hsl(var(--violet-accent))]/18 blur-[150px] dark:bg-[hsl(var(--violet-accent))]/22" />
        {/* Fine grid for structure */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(var(--ambient-grid) 1px, transparent 1px), linear-gradient(90deg, var(--ambient-grid) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(circle at 50% 30%, black, transparent 80%)",
            WebkitMaskImage: "radial-gradient(circle at 50% 30%, black, transparent 80%)",
          }}
        />
        {/* Dot accent grid */}
        <div
          className="absolute inset-0 opacity-[0.7]"
          style={{
            backgroundImage: "radial-gradient(var(--ambient-grid-strong) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Subtle film-grain noise to kill banding and add texture */}
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>
      {children}
    </div>
  );
}
