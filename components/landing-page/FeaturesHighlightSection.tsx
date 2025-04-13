"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  BarChart2, 
  LineChart, 
  Settings, 
  Users, 
  UserPlus, 
  MessageSquare, 
  Share2, 
  CreditCard, 
  Wallet, 
  Copy, 
  Building, 
  BarChart,
  ChevronRight,
  ArrowRight
} from "lucide-react";

import { useEffect, useState, useRef } from "react";

export function FeaturesHighlightSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="container relative z-10">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[hsl(174,60%,41%)]/5 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
        
        <div className={`text-center mb-16 relative transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4 shadow-sm animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            Features
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-5xl lg:text-6xl text-gray-900 mb-6 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            Powerful Tools for <span className="text-primary relative inline-block">Modern
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded animate-expandWidth" style={{ animationDelay: '0.8s' }}></span>
            </span> Forex Brokers
          </h2>
          <p className="mt-4 text-gray-600 md:text-xl max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            Our platform offers a comprehensive suite of features designed to address the unique challenges of 
            forex brokerage operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: `${0.1 + index * 0.1}s`, animation: 'fadeInUp', animationDuration: '1s', animationDelay: `${0.1 + index * 0.1}s` }}>
              <FeatureCard 
                icon={features[index].icon}
                title={features[index].title}
                description={features[index].description}
                colorClass={features[index].colorClass}
              />
            </div>
          ))}
        </div>
        
        <div className={`mt-16 text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.2s', animation: 'fadeInUp', animationDuration: '1s', animationDelay: '1.2s' }}>
          <Link href="/features" className="inline-block">
            <Button 
              className="rounded-full shadow-lg bg-primary text-white hover:bg-primary/90 hover:shadow-xl px-8 py-6 text-lg group transition-all duration-300 flex items-center gap-2 hover:scale-105"
            >
              Explore All Features
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: <BarChart2 className="h-5 w-5 text-blue-500" />,
    title: "Advanced Reporting",
    description: "Comprehensive reports for compliance, performance tracking, and business intelligence.",
    colorClass: "blue"
  },
  {
    icon: <LineChart className="h-5 w-5 text-indigo-500" />,
    title: "Powerful Analytics",
    description: "Deep insights into trading patterns, client behavior, and profitability metrics.",
    colorClass: "indigo"
  },
  {
    icon: <Settings className="h-5 w-5 text-violet-500" />,
    title: "Customizable Workflows",
    description: "Tailor the platform to your specific business processes and requirements.",
    colorClass: "violet"
  },
  {
    icon: <Users className="h-5 w-5 text-purple-500" />,
    title: "Client Management",
    description: "Comprehensive CRM tools for managing client relationships and communications.",
    colorClass: "purple"
  },
  {
    icon: <UserPlus className="h-5 w-5 text-pink-500" />,
    title: "IB & Affiliate Portal",
    description: "Powerful tools for managing introducing brokers and affiliate programs.",
    colorClass: "pink"
  },
  {
    icon: <MessageSquare className="h-5 w-5 text-red-500" />,
    title: "Integrated Messaging",
    description: "Built-in communication tools for client engagement and support.",
    colorClass: "red"
  },
  {
    icon: <Share2 className="h-5 w-5 text-orange-500" />,
    title: "Social Trading",
    description: "Enable copy trading functionality to increase engagement and trading volume.",
    colorClass: "orange"
  },
  {
    icon: <CreditCard className="h-5 w-5 text-amber-500" />,
    title: "Payment Processing",
    description: "Seamless integration with multiple payment providers and banking solutions.",
    colorClass: "amber"
  },
  {
    icon: <Wallet className="h-5 w-5 text-yellow-500" />,
    title: "Wallet Management",
    description: "Secure client fund management with multi-currency support.",
    colorClass: "yellow"
  },
  {
    icon: <Copy className="h-5 w-5 text-lime-500" />,
    title: "White Labeling",
    description: "Fully customizable branding options for a seamless client experience.",
    colorClass: "lime"
  },
  {
    icon: <Building className="h-5 w-5 text-green-500" />,
    title: "Multi-Entity Support",
    description: "Manage multiple brands or entities from a single platform.",
    colorClass: "green"
  },
  {
    icon: <BarChart className="h-5 w-5 text-teal-500" />,
    title: "Risk Management",
    description: "Advanced tools for monitoring and managing trading risk in real-time.",
    colorClass: "teal"
  }
];

function FeatureCard({ icon, title, description, colorClass }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  colorClass: string;
}) {
  // Get the appropriate background classes based on the color
  const getBgGlowClass = () => {
    switch(colorClass) {
      case 'blue': return 'bg-blue-500/5';
      case 'indigo': return 'bg-indigo-500/5';
      case 'violet': return 'bg-violet-500/5';
      case 'purple': return 'bg-purple-500/5';
      case 'pink': return 'bg-pink-500/5';
      case 'red': return 'bg-red-500/5';
      case 'orange': return 'bg-orange-500/5';
      case 'amber': return 'bg-amber-500/5';
      case 'yellow': return 'bg-yellow-500/5';
      case 'lime': return 'bg-lime-500/5';
      case 'green': return 'bg-green-500/5';
      case 'teal': return 'bg-teal-500/5';
      default: return 'bg-blue-500/5';
    }
  };
  
  const getIconBgClass = () => {
    switch(colorClass) {
      case 'blue': return 'bg-blue-500/10';
      case 'indigo': return 'bg-indigo-500/10';
      case 'violet': return 'bg-violet-500/10';
      case 'purple': return 'bg-purple-500/10';
      case 'pink': return 'bg-pink-500/10';
      case 'red': return 'bg-red-500/10';
      case 'orange': return 'bg-orange-500/10';
      case 'amber': return 'bg-amber-500/10';
      case 'yellow': return 'bg-yellow-500/10';
      case 'lime': return 'bg-lime-500/10';
      case 'green': return 'bg-green-500/10';
      case 'teal': return 'bg-teal-500/10';
      default: return 'bg-blue-500/10';
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-500 hover:translate-y-[-5px] group relative overflow-hidden h-full">
      <div className={`absolute top-0 right-0 w-24 h-24 ${getBgGlowClass()} rounded-full blur-xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700`}></div>
      
      <div className={`${getIconBgClass()} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      
      <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <Link 
        href={`/features#${title.toLowerCase().replace(/\s+/g, '-')}`} 
        className="text-primary font-medium inline-flex items-center group-hover:text-primary/80 transition-colors duration-300 absolute bottom-6"
      >
        Learn more
        <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
      
      {/* Add subtle animated accent */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500 ease-in-out"></div>
    </div>
  );
}
