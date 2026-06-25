"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/preview/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/data/site";

export function SiteHeader() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
    >
      <div className="glass-panel mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-5 py-3">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Fivitech FXCRM home">
          <Image
            src="/fivitechLogo.png"
            alt="Fivitech"
            width={56}
            height={56}
            priority
            className="h-12 w-12 rounded-lg object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact"
            className="rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition hover:bg-primary hover:text-primary-foreground hover:shadow-[var(--shadow-glow)]"
          >
            Request Demo
          </Link>
          <ThemeToggle className="!h-9 !w-9 border-border bg-muted/60" />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle className="!h-9 !w-9 border-border bg-muted/60" />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full bg-background/70">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="border-border bg-background/95 backdrop-blur-xl">
              <nav className="mt-10 grid gap-5 text-lg font-semibold">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="text-muted-foreground transition hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild className="mt-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/contact">Request Demo</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
