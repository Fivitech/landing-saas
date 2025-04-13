import Image from "next/image";
import { Gift, Award, TrendingUp, Zap } from "lucide-react";

export function LoyaltyProgramsSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[hsl(174,60%,41%)]/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Loyalty & Referrals
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-5xl text-gray-900 mb-6">
              Boost Retention with <span className="text-primary">Powerful</span> Loyalty Programs
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Create customizable referral and loyalty programs that reward your clients for their trading activity and successful referrals.
            </p>
            
            <div className="space-y-6">
              <FeatureItem 
                icon={<TrendingUp className="h-5 w-5 text-primary" />}
                text="Set up multi-level referral programs with customizable commission structures and tracking."
              />
              <FeatureItem 
                icon={<Award className="h-5 w-5 text-primary" />}
                text="Implement a points-based loyalty system where clients earn rewards for trading activity and engagement."
              />
              <FeatureItem 
                icon={<Zap className="h-5 w-5 text-primary" />}
                text="Automatically distribute bonuses, rebates, and rewards based on predefined rules and milestones."
              />
              <FeatureItem 
                icon={<Gift className="h-5 w-5 text-primary" />}
                text="Engage clients with leaderboards, badges, and challenges to increase platform stickiness and retention."
              />
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-r from-slate-50 to-white flex items-center justify-center shadow-xl">
              <div className="absolute inset-0 rounded-full border-[2px] border-primary/10"></div>
              <div className="bg-white p-10 rounded-2xl shadow-2xl border border-primary/10">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Gift className="h-10 w-10 text-primary" />
                </div>
                <div className="text-center">
                  <span className="block text-2xl font-bold text-gray-900">Reward Your Clients</span>
                  <span className="block text-gray-600 mt-2">Increase retention by 40%</span>
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
      <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">{text}</p>
    </div>
  );
}
