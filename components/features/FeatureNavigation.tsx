"use client"

import { useState, useEffect } from "react";
import { Building, UserCircle, Briefcase } from "lucide-react";

interface FeatureNavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  scrollToSection: (section: string) => void;
}

export function FeatureNavigation({ 
  activeSection, 
  setActiveSection,
  scrollToSection 
}: FeatureNavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Throttle scroll event to improve performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const position = window.scrollY;
          if (position > 100) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-16 z-40 w-full transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-sm shadow-md" : "bg-transparent"}`}
    >
      <div className="container">
        <div className="flex items-center justify-center py-4">
          <div className="inline-flex rounded-full bg-white/90 backdrop-blur-sm p-1 shadow-lg border border-slate-100">
            <button
              onClick={() => scrollToSection("backoffice")}
              className={`flex items-center gap-2 rounded-full px-8 py-3 text-sm font-medium transition-all duration-300 ${
                activeSection === "backoffice" ? "bg-primary text-white" : "text-slate-700 hover:bg-primary/10 hover:text-primary"
              }`}
            >
              <Building className={`h-4 w-4 transition-all duration-300 ${activeSection === "backoffice" ? "animate-pulse" : ""}`} />
              <span>Backoffice</span>
            </button>
            <button
              onClick={() => scrollToSection("client")}
              className={`flex items-center gap-2 rounded-full px-8 py-3 text-sm font-medium transition-all duration-300 ${
                activeSection === "client" ? "bg-primary text-white" : "text-slate-700 hover:bg-primary/10 hover:text-primary"
              }`}
            >
              <UserCircle className={`h-4 w-4 transition-all duration-300 ${activeSection === "client" ? "animate-pulse" : ""}`} />
              <span>Client Area</span>
            </button>
            <button
              onClick={() => scrollToSection("broker")}
              className={`flex items-center gap-2 rounded-full px-8 py-3 text-sm font-medium transition-all duration-300 ${
                activeSection === "broker" ? "bg-primary text-white" : "text-slate-700 hover:bg-primary/10 hover:text-primary"
              }`}
            >
              <Briefcase className={`h-4 w-4 transition-all duration-300 ${activeSection === "broker" ? "animate-pulse" : ""}`} />
              <span>Broker Area</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
