import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
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
            href="/features"
            className="text-sm font-medium text-primary-foreground hover:text-primary-foreground/80"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium text-primary-foreground hover:text-primary-foreground/80"
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-primary-foreground hover:text-primary-foreground/80"
          >
            Contact
          </Link>
          <Link
            href="https://fivitech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary-foreground hover:text-primary-foreground/80"
          >
            Other Services
          </Link>
          <Button variant="secondary" asChild>
            <Link href="/contact">Request Demo</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Button variant="secondary" size="icon">
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
                    className="h-10 w-auto"
                  />
                </Link>
                <Link
                  href="/features"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Features
                </Link>
                <Link
                  href="/pricing"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Pricing
                </Link>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground"
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
                  className="bg-primary text-primary-foreground hover:bg-primary/90 mt-4"
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
