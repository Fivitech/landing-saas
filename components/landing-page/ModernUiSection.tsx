import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Layout, Smartphone, Sliders } from "lucide-react";

export function ModernUiSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-br from-[hsl(220,25%,10%)] to-[hsl(220,20%,20%)] text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-5"></div>
      <div className="absolute top-40 right-0 w-80 h-80 rounded-full bg-primary/20 blur-[100px]"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-[hsl(174,60%,41%)]/20 blur-[100px]"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-primary/10 text-primary-foreground px-4 py-1 rounded-full text-sm font-medium mb-4">
              Modern UI/UX
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-5xl text-white mb-6">
              Stunning Interfaces That <span className="text-primary">Drive Results</span>
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Our platform combines beautiful design with powerful functionality to create an experience your clients and team will love.
            </p>
            
            <div className="space-y-6">
              <FeatureItem 
                icon={<Layout className="h-5 w-5 text-primary" />}
                title="Intuitive Navigation"
                text="Thoughtfully designed interfaces that make complex operations simple and accessible."
              />
              <FeatureItem 
                icon={<Smartphone className="h-5 w-5 text-primary" />}
                title="Responsive Design"
                text="Seamless experience across all devices: desktop, tablet, and mobile."
              />
              <FeatureItem 
                icon={<Sliders className="h-5 w-5 text-primary" />}
                title="Customizable Dashboards"
                text="Personalized dashboards that adapt to individual user needs and preferences."
              />
            </div>
            
            <div className="mt-8">
              <Button 
                className="rounded-full shadow-lg bg-primary text-white hover:bg-primary/90 hover:shadow-xl border-0"
                asChild
              >
                <Link href="/features#ui-ux">Explore UI/UX Features</Link>
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="bg-black/20 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden border border-white/10">
                <div className="h-10 bg-black/30 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-white/70 text-xs font-medium ml-auto">Dashboard</div>
                </div>
                <div className="p-6">
                  <div className="w-full h-[240px] bg-gradient-to-br from-black/40 to-black/20 rounded-lg mb-6 border border-white/5 shadow-inner flex items-center justify-center">
                    <div className="text-primary text-6xl">📊</div>
                  </div>
                  <div className="space-y-3">
                    <div className="w-full h-4 bg-white/5 rounded-full"></div>
                    <div className="w-3/4 h-4 bg-white/5 rounded-full"></div>
                    <div className="w-5/6 h-4 bg-white/5 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/30 rounded-full blur-2xl"></div>
              <div className="absolute -top-4 -left-4 w-40 h-40 bg-[hsl(262,83%,58%)]/30 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex items-start group">
      <div className="flex-shrink-0 bg-black/20 backdrop-blur-sm rounded-xl p-3 mr-4 border border-white/10 shadow-lg group-hover:bg-primary/10 transition-all duration-300">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-white group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-slate-300 mt-1">{text}</p>
      </div>
    </div>
  );
}
