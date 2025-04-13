import Image from "next/image";
import { Users, LineChart, BarChart3, CreditCard, Shield } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-28 bg-white">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-700">
                All-in-One Platform
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-900">
                Essential Tools at Your Fingertips
              </h2>
              <p className="mt-4 text-gray-600 md:text-xl">
                Our comprehensive platform provides all the tools you need to manage your forex brokerage
                efficiently in one place.
              </p>
            </div>
            <div className="mt-8 space-y-6">
              <FeatureItem 
                icon={<Users className="h-5 w-5 text-slate-700" />}
                title="Sales & CRM Tools"
                description="Manage your sales pipeline, track client interactions, and close deals faster with our integrated CRM system."
              />
              <FeatureItem 
                icon={<LineChart className="h-5 w-5 text-slate-700" />}
                title="IB Management"
                description="Streamline your introducing broker operations with automated commission calculations and performance tracking."
              />
              <FeatureItem 
                icon={<BarChart3 className="h-5 w-5 text-slate-700" />}
                title="Marketing & Analytics"
                description="Create targeted campaigns, track performance, and optimize your marketing efforts with data-driven insights."
              />
              <FeatureItem 
                icon={<CreditCard className="h-5 w-5 text-slate-700" />}
                title="Finance & Payment Processing"
                description="Handle deposits, withdrawals, and financial operations seamlessly with integrated payment gateways."
              />
              <FeatureItem 
                icon={<Shield className="h-5 w-5 text-slate-700" />}
                title="Compliance & KYC"
                description="Stay compliant with regulatory requirements using our automated KYC verification and documentation tools."
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="https://b2broker.com/_next/image/?url=https%3A%2F%2Fmedia2.b2broker.com%2Fa-media%2FImageForexport-78.png&w=1366&q=90"
              alt="Forex CRM Platform Interface"
              width={1366}
              height={768}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ icon, title, description }: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="rounded-full bg-slate-100 p-1">
        {icon}
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}
