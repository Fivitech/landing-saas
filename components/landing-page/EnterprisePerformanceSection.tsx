"use client";

import { useEffect, useState } from "react";
import { Server, Zap, Clock, Shield, Activity } from "lucide-react";

export function EnterprisePerformanceSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition =
        document.getElementById("enterprise-performance")?.offsetTop || 0;

      if (scrollPosition > elementPosition) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="enterprise-performance"
      className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[hsl(174,60%,41%)]/5 rounded-full blur-3xl -z-10"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Enterprise-Grade Performance
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-5xl text-gray-900 mb-6">
              Unmatched <span className="text-primary">Speed</span> and{" "}
              <span className="text-primary">Reliability</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Our infrastructure is built for high-frequency trading
              environments with ultra-low latency and 99.9% uptime guarantee.
            </p>

            <div className="space-y-6">
              <FeatureItem
                icon={<Zap className="h-5 w-5 text-primary" />}
                text="Ultra-low latency execution with sub-millisecond response times for optimal trading performance."
              />
              <FeatureItem
                icon={<Server className="h-5 w-5 text-primary" />}
                text="Distributed architecture across multiple data centers ensures redundancy and continuous operation."
              />
              <FeatureItem
                icon={<Shield className="h-5 w-5 text-primary" />}
                text="Enterprise-grade security with DDoS protection, advanced encryption, and continuous monitoring."
              />
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-xl"></div>

              {/* Server rack visualization */}
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                {/* Header */}
                <div className="bg-slate-800 p-4 border-b border-gray-700 flex items-center justify-between">
                  <div className="flex items-center">
                    <Server className="h-5 w-5 text-primary mr-2" />
                    <h3 className="text-white font-medium">
                      Performance Monitor
                    </h3>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                </div>

                {/* Ultra simple performance monitor */}
                <div className="p-8 bg-slate-900 h-[350px] flex flex-col justify-center">
                  {/* Central icon */}
                  <div className="flex justify-center mb-8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-md animate-pulse"></div>
                      <div className="relative z-10 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-lg">
                        <Server className="h-12 w-12 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Main guarantee */}
                  <div className="text-center mb-10">
                    <div className="text-4xl font-bold text-white mb-2 animate-fadeIn" style={{ animationDelay: '0.3s' }}>99.9%</div>
                    <div className="text-xl text-primary font-medium">Uptime Guarantee</div>
                  </div>
                  
                  {/* Key metrics */}
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-white mb-1 animate-fadeIn" style={{ animationDelay: '0.5s' }}>0.5ms</div>
                      <div className="text-sm text-slate-400">Response Time</div>
                    </div>
                    
                    <div>
                      <div className="text-2xl font-bold text-white mb-1 animate-fadeIn" style={{ animationDelay: '0.7s' }}>24/7</div>
                      <div className="text-sm text-slate-400">Monitoring</div>
                    </div>
                    
                    <div>
                      <div className="text-2xl font-bold text-white mb-1 animate-fadeIn" style={{ animationDelay: '0.9s' }}>Global</div>
                      <div className="text-sm text-slate-400">Infrastructure</div>
                    </div>
                  </div>
                </div>

                {/* Status footer */}
                <div className="bg-slate-800 p-3 border-t border-gray-700 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
                    <span className="text-xs text-slate-300">
                      All Systems Operational
                    </span>
                  </div>
                  <div className="text-xs text-slate-400">
                    <span className="font-mono">0.5ms</span> Latency
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-start group">
      <div className="flex-shrink-0 bg-primary/10 rounded-xl p-3 mr-4 shadow-md group-hover:shadow-lg transition-all duration-300">
        {icon}
      </div>
      <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
        {text}
      </p>
    </div>
  );
}
