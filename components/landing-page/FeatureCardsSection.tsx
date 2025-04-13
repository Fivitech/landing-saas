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
  BarChart 
} from "lucide-react";

export function FeatureCardsSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900">
            Comprehensive Solutions for Forex Brokers
          </h2>
          <p className="mt-4 text-gray-600 md:text-xl max-w-3xl mx-auto">
            Our platform offers a complete suite of tools and features designed specifically for modern forex brokerages.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <FeatureCard 
            icon={<BarChart2 className="h-5 w-5" />}
            title="Advanced Reporting"
            description="Comprehensive reports for compliance, performance tracking, and business intelligence."
          />
          <FeatureCard 
            icon={<LineChart className="h-5 w-5" />}
            title="Powerful Analytics"
            description="Deep insights into trading patterns, client behavior, and profitability metrics."
          />
          <FeatureCard 
            icon={<Settings className="h-5 w-5" />}
            title="Customization"
            description="Tailor the platform to your brand and specific business requirements."
          />
          <FeatureCard 
            icon={<Users className="h-5 w-5" />}
            title="IB Portal"
            description="Comprehensive tools for managing introducing brokers and partner relationships."
          />
          <FeatureCard 
            icon={<UserPlus className="h-5 w-5" />}
            title="Lead Management"
            description="Track and nurture leads through your sales pipeline with automated workflows."
          />
          <FeatureCard 
            icon={<MessageSquare className="h-5 w-5" />}
            title="Client Engagement"
            description="Tools to enhance communication and build stronger relationships with clients."
          />
          <FeatureCard 
            icon={<Share2 className="h-5 w-5" />}
            title="Referrals"
            description="Powerful referral system to expand your client base through existing customers."
          />
          <FeatureCard 
            icon={<CreditCard className="h-5 w-5" />}
            title="PSPs Integrations"
            description="Seamless integration with popular payment service providers for deposits and withdrawals."
          />
          <FeatureCard 
            icon={<Wallet className="h-5 w-5" />}
            title="Crypto Wallet Solutions"
            description="Support for cryptocurrency transactions with secure wallet management."
          />
          <FeatureCard 
            icon={<Copy className="h-5 w-5" />}
            title="MAM/PAMM Copy Trading"
            description="Advanced solutions for managed accounts and copy trading functionality."
          />
          <FeatureCard 
            icon={<Building className="h-5 w-5" />}
            title="Pro Firm Solutions"
            description="Specialized tools for professional trading firms and institutional clients."
          />
          <FeatureCard 
            icon={<BarChart className="h-5 w-5" />}
            title="MT4/MT5 Solutions"
            description="Seamless integration with MetaTrader platforms for comprehensive trading capabilities."
          />
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            className="rounded-full shadow-lg bg-primary text-white hover:bg-primary/90 hover:shadow-xl"
            asChild
          >
            <Link href="/features">Explore All Features</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mb-4 text-primary">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
