"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Globe, Menu } from "lucide-react";

export function Navigation() {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Globe className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">ForexFlow</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link 
            href="/" 
            className={`text-sm font-medium ${isActive('/') ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
          >
            Home
          </Link>
          <Link 
            href="/features" 
            className={`text-sm font-medium ${isActive('/features') ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
          >
            Features
          </Link>
          <Link 
            href="/pricing" 
            className={`text-sm font-medium ${isActive('/pricing') ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
          >
            Pricing
          </Link>
          <Link 
            href="/contact" 
            className={`text-sm font-medium ${isActive('/contact') ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
          >
            Contact
          </Link>
          <Button className="rounded-full shadow-lg bg-primary text-white hover:bg-primary/90 hover:shadow-xl" asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium mt-6">
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                  <Globe className="h-6 w-6 text-primary" />
                  <span className="">ForexFlow</span>
                </Link>
                <Link 
                  href="/" 
                  className={isActive('/') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}
                >
                  Home
                </Link>
                <Link 
                  href="/features" 
                  className={isActive('/features') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}
                >
                  Features
                </Link>
                <Link 
                  href="/pricing" 
                  className={isActive('/pricing') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}
                >
                  Pricing
                </Link>
                <Link 
                  href="/contact" 
                  className={isActive('/contact') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}
                >
                  Contact
                </Link>
                <Button className="rounded-full shadow-lg bg-primary text-white hover:bg-primary/90 hover:shadow-xl mt-4" asChild>
                  <Link href="/signup">Get Started</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
