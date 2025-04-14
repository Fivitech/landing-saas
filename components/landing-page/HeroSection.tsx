"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

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
                <span className="text-sm font-medium block mb-2 text-primary">
                  Fivitech Technologies
                </span>
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
                Fivitech Technologies streamlines your forex brokerage
                operations with our all-in-one platform. Manage clients, IBs,
                and trading all in one place.
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
            <div className="relative w-full max-w-[500px] h-[400px] p-4">
              {/* Background glow effects */}
              <div className="absolute -top-4 -right-4 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-pulse"></div>
              <div
                className="absolute -bottom-4 -left-4 h-72 w-72 rounded-full bg-[hsl(174,60%,41%)]/20 blur-3xl animate-pulse"
                style={{ animationDelay: "1.5s" }}
              ></div>
              
              {/* Container for animated elements */}
              <div className="relative bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-2xl w-full h-full overflow-hidden">
                {/* Animated grid lines */}
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div 
                      key={`v-${i}`} 
                      className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-pulse"
                      style={{ 
                        left: `${(i * 100) / 6}%`,
                        animationDelay: `${i * 0.2}s`,
                        opacity: 0.3 + (i % 3) * 0.2
                      }}
                    />
                  ))}
                  
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div 
                      key={`h-${i}`} 
                      className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse"
                      style={{ 
                        top: `${(i * 100) / 6}%`,
                        animationDelay: `${i * 0.2}s`,
                        opacity: 0.3 + (i % 3) * 0.2
                      }}
                    />
                  ))}
                </div>
                
                {/* Animated data points */}
                {Array.from({ length: 12 }).map((_, i) => {
                  const size = 4 + (i % 3) * 2;
                  const x = 10 + (i % 6) * 15 + (i % 2) * 5;
                  const y = 20 + Math.floor(i / 2) * 15 + (i % 3) * 5;
                  
                  return (
                    <div 
                      key={`p-${i}`}
                      className="absolute rounded-full bg-primary animate-pulse"
                      style={{ 
                        width: `${size}px`,
                        height: `${size}px`,
                        left: `${x}%`,
                        top: `${y}%`,
                        animationDelay: `${i * 0.3}s`,
                        animationDuration: `${2 + (i % 3)}s`
                      }}
                    />
                  );
                })}
                
                {/* Animated trend lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path 
                    d="M0,80 C20,70 40,90 60,50 S80,30 100,40" 
                    fill="none" 
                    stroke="rgba(16, 185, 129, 0.5)" 
                    strokeWidth="1"
                    className="animate-dashoffset"
                    strokeDasharray="200"
                    strokeDashoffset="200"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <path 
                    d="M0,60 C30,40 50,70 70,30 S90,20 100,30" 
                    fill="none" 
                    stroke="rgba(16, 185, 129, 0.7)" 
                    strokeWidth="1.5"
                    className="animate-dashoffset"
                    strokeDasharray="200"
                    strokeDashoffset="200"
                    style={{ animationDelay: "1s" }}
                  />
                  <path 
                    d="M0,40 C10,50 30,20 50,40 S70,60 100,20" 
                    fill="none" 
                    stroke="rgba(16, 185, 129, 0.3)" 
                    strokeWidth="1"
                    className="animate-dashoffset"
                    strokeDasharray="200"
                    strokeDashoffset="200"
                    style={{ animationDelay: "1.5s" }}
                  />
                </svg>
                
                {/* Animated data cards */}
                <div 
                  className="absolute top-[15%] left-[10%] px-3 py-2 bg-white/5 backdrop-blur-md rounded border border-white/10 text-xs animate-float"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="text-primary font-medium">Daily Volume</div>
                  <div className="text-white text-sm font-bold">$24.8M</div>
                </div>
                
                <div 
                  className="absolute bottom-[20%] right-[15%] px-3 py-2 bg-white/5 backdrop-blur-md rounded border border-white/10 text-xs animate-float"
                  style={{ animationDelay: "0.8s" }}
                >
                  <div className="text-primary font-medium">Active Traders</div>
                  <div className="text-white text-sm font-bold">1,240</div>
                </div>
                
                <div 
                  className="absolute top-[55%] right-[20%] px-3 py-2 bg-white/5 backdrop-blur-md rounded border border-white/10 text-xs animate-float"
                  style={{ animationDelay: "1.2s" }}
                >
                  <div className="text-primary font-medium">Mobile Users</div>
                  <div className="text-white text-sm font-bold">3,850</div>
                </div>
                
                {/* Animated dots */}
                <div className="absolute w-2 h-2 rounded-full bg-primary/80 animate-pulse-glow" style={{ top: '25%', left: '30%', animationDelay: '0.1s' }}></div>
                <div className="absolute w-3 h-3 rounded-full bg-primary/60 animate-pulse-glow" style={{ top: '40%', left: '70%', animationDelay: '0.7s' }}></div>
                <div className="absolute w-2 h-2 rounded-full bg-primary/80 animate-pulse-glow" style={{ top: '65%', left: '40%', animationDelay: '1.3s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
