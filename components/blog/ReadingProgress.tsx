"use client";

import { useEffect, useState } from "react";

// Fixed top progress bar driven by document scroll. Self-contained (no ref
// plumbing from the server page) so it can live in its own client island.
export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrollable = el.scrollHeight - el.clientHeight;
      setProgress(scrollable > 0 ? (el.scrollTop / scrollable) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent">
      <div
        className="h-full bg-primary shadow-[0_0_8px_hsl(var(--primary))] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
