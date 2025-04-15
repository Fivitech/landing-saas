"use client"

import { useState, useEffect, useRef } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { FeaturePageHeader } from "@/components/features/FeaturePageHeader";
import { FeatureNavigation } from "@/components/features/FeatureNavigation";
import { BackofficeSection } from "@/components/features/BackofficeSection";
import { ClientSection } from "@/components/features/ClientSection";
import { BrokerSection } from "@/components/features/BrokerSection";

export default function FeaturesPage() {
  const [activeSection, setActiveSection] = useState("backoffice");
  const [isVisible, setIsVisible] = useState(false);
  const isScrolling = useRef(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Skip if we're programmatically scrolling to prevent loops
      if (isScrolling.current) return;
      
      const position = window.scrollY;

      // Determine active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section: Element) => {
        const htmlSection = section as HTMLElement;
        const sectionTop = htmlSection.offsetTop - 100;
        const sectionHeight = htmlSection.offsetHeight;
        if (position >= sectionTop && position < sectionTop + sectionHeight) {
          const id = section.getAttribute("id");
          if (id === "backoffice-section") {
            setActiveSection("backoffice");
          } else if (id === "client-section") {
            setActiveSection("client");
          } else if (id === "broker-section") {
            setActiveSection("broker");
          }
        }
      });
    };

    // Throttle scroll event to improve performance
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener, { passive: true });
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(`${sectionId}-section`);
    if (element) {
      // Set flag to prevent scroll handler from firing during programmatic scroll
      isScrolling.current = true;
      
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      
      // Reset flag after animation completes
      setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      <main className="flex-1">
        <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <FeaturePageHeader />
        </div>
        <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
          <FeatureNavigation 
            activeSection={activeSection} 
            setActiveSection={setActiveSection} 
            scrollToSection={scrollToSection} 
          />
        </div>
        <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.4s' }}>
          <BackofficeSection />
          <ClientSection />
          <BrokerSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
