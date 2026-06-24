import type { ReactNode } from "react";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-primary/30">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-[34rem] w-[34rem] animate-mesh-drift rounded-full bg-primary/15 blur-[140px] dark:bg-primary/20" />
        <div className="absolute right-[-12rem] top-1/3 h-[30rem] w-[30rem] rounded-full bg-[hsl(var(--cyan-accent))]/10 blur-[150px]" />
        <div className="absolute bottom-[-10rem] left-1/3 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.42] dark:opacity-[0.25]"
          style={{
            backgroundImage: "radial-gradient(hsl(var(--primary) / 0.14) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>
      {children}
    </div>
  );
}
