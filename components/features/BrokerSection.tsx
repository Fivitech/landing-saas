import { Briefcase, Users, BarChart, FileText, Shield, Building, Globe, Gift, MessageSquare, Zap, Wallet, PieChart, LineChart, Settings } from "lucide-react";

export function BrokerSection() {
  return (
    <section id="broker-section" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col space-y-4">
          <div>
            <p className="text-sm font-medium text-primary">IB Management</p>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Comprehensive Introducing Broker System</h2>
          
          <p className="text-gray-600 md:text-xl/relaxed max-w-[700px]">
            Fivi Technologies empowers your introducing brokers with powerful tools to grow their business and manage their clients effectively.
          </p>
        </div>
        
        <div className="mt-12 md:mt-16 space-y-8 md:space-y-12">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="md:w-1/2 space-y-8">
              <div className="flex gap-4 items-start group">
                <div className="flex-shrink-0 mt-1">
                  <Users className="h-6 w-6 text-primary group-hover:text-primary/80 transition-colors" />
                </div>
                <div>
                  <p className="font-medium">Dedicated portal for IBs to track their clients, monitor commissions, and access marketing materials in real-time.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start group">
                <div className="flex-shrink-0 mt-1">
                  <BarChart className="h-6 w-6 text-primary group-hover:text-primary/80 transition-colors" />
                </div>
                <div>
                  <p className="font-medium">Comprehensive analytics dashboard for IBs to track client acquisition, trading volume, commission earnings, and conversion rates.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start group">
                <div className="flex-shrink-0 mt-1">
                  <FileText className="h-6 w-6 text-primary group-hover:text-primary/80 transition-colors" />
                </div>
                <div>
                  <p className="font-medium">Create and manage complex multi-level commission structures with flexible payment options and automated calculations.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start group">
                <div className="flex-shrink-0 mt-1">
                  <Shield className="h-6 w-6 text-primary group-hover:text-primary/80 transition-colors" />
                </div>
                <div>
                  <p className="font-medium">Provide IBs with customizable landing pages, banners, promotional materials, and tracking links to boost their marketing efforts.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start group">
                <div className="flex-shrink-0 mt-1">
                  <MessageSquare className="h-6 w-6 text-primary group-hover:text-primary/80 transition-colors" />
                </div>
                <div>
                  <p className="font-medium">Integrated client communication tools with bulk messaging capabilities and automated follow-up sequences.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start group">
                <div className="flex-shrink-0 mt-1">
                  <PieChart className="h-6 w-6 text-primary group-hover:text-primary/80 transition-colors" />
                </div>
                <div>
                  <p className="font-medium">Advanced client segmentation tools to identify high-value prospects and optimize conversion strategies.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start group">
                <div className="flex-shrink-0 mt-1">
                  <Wallet className="h-6 w-6 text-primary group-hover:text-primary/80 transition-colors" />
                </div>
                <div>
                  <p className="font-medium">Automated commission payouts with detailed reporting and multiple withdrawal options for IBs.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start group">
                <div className="flex-shrink-0 mt-1">
                  <Settings className="h-6 w-6 text-primary group-hover:text-primary/80 transition-colors" />
                </div>
                <div>
                  <p className="font-medium">Customizable IB hierarchy management with flexible permission settings and team performance tracking.</p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 relative">
              <div className="relative w-full max-w-[500px] bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
                <div className="h-8 bg-gray-50 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-gray-400 text-xs font-medium ml-auto">IB Portal</div>
                </div>
                <div className="p-4">
                  <img src="/ib-portal.png" alt="IB Portal Dashboard" className="w-full rounded-md shadow-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


