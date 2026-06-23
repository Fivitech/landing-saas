"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

/**
 * Shared dark/light toggle for the prototype preview routes.
 * Flips the `dark` class on <html> via next-themes (attribute="class").
 * Variants scope their tokens under `.dark .variant-x` vs `.variant-x`.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={
        "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-current backdrop-blur transition hover:scale-105 hover:bg-white/20 " +
        className
      }
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}
