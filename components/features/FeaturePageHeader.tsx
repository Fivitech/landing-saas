"use client";

import { useEffect, useState } from "react";

export function FeaturePageHeader() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[hsl(220,25%,10%)] to-[hsl(220,20%,20%)] text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-5"></div>
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary/20 blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-[hsl(174,60%,41%)]/20 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className={`inline-block bg-primary/10 text-primary-foreground px-4 py-1 rounded-full text-sm font-medium mb-2 animate-fadeIn transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '0.2s' }}>
            Feature Overview
          </div>
          <h1 className={`text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none animate-fadeIn transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '0.4s' }}>
            Comprehensive <span className="text-primary relative inline-block">Features
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded animate-expandWidth" style={{ animationDelay: '0.8s' }}></span>
            </span>
          </h1>
          <p className={`max-w-[900px] text-slate-300 md:text-xl/relaxed lg:text-xl/relaxed xl:text-xl/relaxed animate-fadeIn transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '0.6s' }}>
            Discover the powerful tools and capabilities that make Fivitech the leading platform for forex brokers.
          </p>
        </div>
      </div>
    </section>
  );
}
