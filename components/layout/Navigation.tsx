"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[hsl(220,25%,10%)] border-b border-white/10 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/fivitechLogo.png"
            alt="Fivitech Logo"
            width={160}
            height={60}
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link
            href="/"
            className={`text-sm font-medium ${
              isActive("/")
                ? "text-white font-medium"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Home
          </Link>
          <Link
            href="/features"
            className={`text-sm font-medium ${
              isActive("/features")
                ? "text-white font-medium"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className={`text-sm font-medium ${
              isActive("/pricing")
                ? "text-white font-medium"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium ${
              isActive("/contact")
                ? "text-white font-medium"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Contact
          </Link>
          <Link
            href="https://fivitech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-300 hover:text-white"
          >
            Other Services
          </Link>
          <Button
            className="rounded-full shadow-lg bg-primary text-white hover:bg-primary/90 hover:shadow-xl transition-all duration-300"
            asChild
          >
            <Link href="/contact">Request Demo</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Button variant="ghost" size="icon" className="text-white hover:bg-primary/20">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium mt-6">
                <Link
                  href="/"
                  className="flex items-center text-lg font-semibold"
                >
                  <Image
                    src="/fivitechLogo.png"
                    alt="Fivitech Logo"
                    width={120}
                    height={45}
                    className="h-12 w-auto"
                  />
                </Link>
                <Link
                  href="/"
                  className={
                    isActive("/")
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }
                >
                  Home
                </Link>
                <Link
                  href="/features"
                  className={
                    isActive("/features")
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }
                >
                  Features
                </Link>
                <Link
                  href="/pricing"
                  className={
                    isActive("/pricing")
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }
                >
                  Pricing
                </Link>
                <Link
                  href="/contact"
                  className={
                    isActive("/contact")
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }
                >
                  Contact
                </Link>
                <Link
                  href="https://fivitech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Other Services
                </Link>
                <Button
                  className="rounded-full shadow-lg bg-primary text-white hover:bg-primary/90 hover:shadow-xl transition-all duration-300 mt-4"
                  asChild
                >
                  <Link href="/contact">Request Demo</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
