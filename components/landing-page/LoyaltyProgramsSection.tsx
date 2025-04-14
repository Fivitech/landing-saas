import Image from "next/image";
import { Gift, Award, TrendingUp, Zap, Users } from "lucide-react";

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
            <div className="relative w-full max-w-lg">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-xl"></div>
              
              {/* Main visualization */}
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden p-8 border border-gray-100 flex flex-col items-center">
                {/* Central icon */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-md animate-pulse"></div>
                  <div className="relative z-10 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                </div>
                
                {/* Main heading */}
                <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">Loyalty Rewards</h3>
                <p className="text-gray-600 text-center mb-8 max-w-md">Increase client retention by up to <span className="text-primary font-bold">40%</span> with our customizable loyalty program</p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 w-full mb-8">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                      <Gift className="h-7 w-7 text-primary" />
                    </div>
                    <div className="text-sm font-medium text-gray-800">Customizable</div>
                    <div className="text-xs text-gray-500">Reward Structure</div>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                      <TrendingUp className="h-7 w-7 text-primary" />
                    </div>
                    <div className="text-sm font-medium text-gray-800">Increased</div>
                    <div className="text-xs text-gray-500">Trading Volume</div>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                      <Users className="h-7 w-7 text-primary" />
                    </div>
                    <div className="text-sm font-medium text-gray-800">Higher</div>
                    <div className="text-xs text-gray-500">Client Retention</div>
                  </div>
                </div>
                
                {/* Progress visualization */}
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mb-2">
                  <div className="bg-primary h-full rounded-full animate-pulse" style={{ width: '70%' }}></div>
                </div>
                
                {/* Animated elements */}
                <div className="flex justify-between w-full text-sm text-gray-500">
                  <span>Basic Rewards</span>
                  <span>Premium Benefits</span>
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
