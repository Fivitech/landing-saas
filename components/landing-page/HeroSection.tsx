"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, BarChart3 } from "lucide-react";

import { useEffect, useState } from "react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[hsl(220,25%,10%)] to-[hsl(220,20%,20%)] text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-5"></div>
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary/20 blur-[100px] animate-pulse"></div>
      <div
        className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-[hsl(174,60%,41%)]/20 blur-[100px] animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div
            className={`flex flex-col justify-center space-y-6 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="space-y-4">
              <h1
                className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none animate-fadeIn"
                style={{ animationDelay: "0.4s" }}
              >
                The Complete{" "}
                <span className="text-primary relative inline-block">
                  Forex Brokerage
                  <span
                    className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded animate-expandWidth"
                    style={{ animationDelay: "1s" }}
                  ></span>
                </span>{" "}
                Solution
              </h1>
              <p
                className="max-w-[600px] text-slate-300 md:text-xl animate-fadeIn"
                style={{ animationDelay: "0.6s" }}
              >
                Streamline your forex brokerage operations with our all-in-one
                platform. Manage clients, IBs, and trading all in one place.
              </p>
            </div>
            <div
              className="flex flex-col gap-4 min-[400px]:flex-row pt-4 animate-fadeIn"
              style={{ animationDelay: "0.8s" }}
            >
              <Button
                size="lg"
                className="rounded-full shadow-lg bg-primary text-white hover:bg-primary/90 hover:shadow-xl transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href="/pricing" className="flex items-center gap-2">
                  View Pricing
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full shadow-lg border-2 border-primary bg-primary/10 text-primary hover:bg-primary/20 hover:shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href="/demo">Request Demo</Link>
              </Button>
            </div>
          </div>
          <div
            className={`flex items-center justify-center transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="relative w-full max-w-[500px] p-4 animate-float">
              <div className="absolute -top-4 -right-4 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-pulse"></div>
              <div
                className="absolute -bottom-4 -left-4 h-72 w-72 rounded-full bg-[hsl(174,60%,41%)]/20 blur-3xl animate-pulse"
                style={{ animationDelay: "1.5s" }}
              ></div>
              <div className="relative bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-2xl">
                <BarChart3 className="h-full w-full text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
