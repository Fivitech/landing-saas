"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Clock, Shield, Server, Database, BarChart, Smartphone, Users } from "lucide-react";
import Image from "next/image";

export function UniqueFeatures() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition = document.getElementById('unique-features')?.offsetTop || 0;
      
      if (scrollPosition > elementPosition) {
        setIsVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: "Rapid Deployment",
      description: "Launch your forex brokerage in days, not months. Our turnkey solution includes everything you need to start accepting clients immediately.",
      benefits: ["Fast time-to-market", "Reduced setup costs", "Immediate revenue generation"]
    },
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Enterprise Security",
      description: "Bank-grade protection for your brokerage and client data with advanced encryption, multi-factor authentication, and 24/7 monitoring.",
      benefits: ["Military-grade encryption", "Regulatory compliance", "Fraud prevention systems"]
    },
    {
      icon: <Smartphone className="h-12 w-12 text-primary" />,
      title: "Mobile Applications",
      description: "Fully branded iOS and Android apps for both clients and brokers. Manage your entire operation and trading activities from anywhere.",
      benefits: ["White-labeled mobile apps", "Push notifications", "Biometric authentication"]
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Multi-level IB Network",
      description: "Sophisticated introducing broker system with unlimited hierarchical levels, automated commission calculations, and real-time reporting.",
      benefits: ["Unlimited IB levels", "Automated commissions", "Performance analytics"]
    },
    {
      icon: <Database className="h-12 w-12 text-primary" />,
      title: "Advanced CRM Suite",
      description: "Comprehensive client relationship management with KYC/AML workflows, document verification, and automated marketing tools.",
      benefits: ["Automated onboarding", "Document verification", "Client segmentation"]
    },
    {
      icon: <BarChart className="h-12 w-12 text-primary" />,
      title: "Business Intelligence",
      description: "Powerful analytics dashboard with customizable reports, real-time metrics, and predictive insights to optimize your brokerage performance.",
      benefits: ["Custom reporting", "Performance metrics", "Revenue analytics"]
    },
    {
      icon: <Server className="h-12 w-12 text-primary" />,
      title: "99.9% Uptime Guarantee",
      description: "Enterprise-grade infrastructure with redundant systems deployed across multiple regions ensures your brokerage operates without interruption.",
      benefits: ["Redundant infrastructure", "Automatic failover", "Continuous monitoring"]
    },
    {
      icon: <Clock className="h-12 w-12 text-primary" />,
      title: "24/7 Expert Support",
      description: "Round-the-clock technical assistance from our team of forex technology experts, with guaranteed response times and proactive monitoring.",
      benefits: ["Rapid issue resolution", "Dedicated account manager", "Proactive monitoring"]
    }
  ];

  return (
    <section id="unique-features" className="w-full py-16 md:py-24 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden text-white">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-5"></div>
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary/20 blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-blue-500/20 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/20 text-primary-foreground px-4 py-1 rounded-full text-sm font-medium mb-4">
            ENTERPRISE ADVANTAGE
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-5xl lg:text-6xl mb-6">
            The <span className="text-primary relative inline-block">Fivitech
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded animate-expandWidth" style={{ animationDelay: '0.4s' }}></span>
            </span> Difference
          </h2>
          <p className="mt-4 text-slate-300 md:text-xl max-w-3xl mx-auto">
            Our platform offers a comprehensive suite of features designed to address the unique challenges of forex brokerage operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden backdrop-blur-sm bg-white/5 border border-white/10 hover:border-primary/30 rounded-xl transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="p-8 relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <div className="absolute -inset-3 bg-primary/20 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative bg-slate-800 p-4 rounded-full border border-primary/30 group-hover:border-primary/50 transition-colors">
                      {feature.icon}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-center mb-3 text-white group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-slate-300 text-center text-sm leading-relaxed mb-4">{feature.description}</p>
                
                <div className="border-t border-white/10 pt-4 mt-auto">
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="text-xs text-slate-400 flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2 text-left">
                <h3 className="text-2xl font-bold mb-4">Enterprise-Grade <span className="text-primary">Performance</span></h3>
                <p className="text-slate-300 mb-4">
                  Our platform is built on a cutting-edge technology stack with 99.9% uptime guarantee, ensuring your brokerage operations run flawlessly 24/7/365.
                </p>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Server className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-sm text-slate-300">Redundant cloud infrastructure</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-sm text-slate-300">Enterprise-grade security protocols</div>
                </div>
              </div>
              
              <div className="md:w-1/2 relative h-64 w-full md:h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-blue-500/30 rounded-xl blur-xl opacity-30"></div>
                <div className="relative h-full w-full flex items-center justify-center">
                  <Image 
                    src="/dashboard-preview.png" 
                    alt="Enterprise Dashboard" 
                    width={400} 
                    height={250}
                    className="rounded-xl shadow-2xl border border-white/10 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
