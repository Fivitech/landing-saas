import { Building, BarChart3, Database, FileText, Settings, Shield, Users, Globe, Bell, Wallet, LineChart, PieChart, Clock, Zap, Lock } from "lucide-react";

export function BackofficeSection() {
  return (
    <section id="backoffice-section" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col space-y-4">
          <div>
            <p className="text-sm font-medium text-primary">Backoffice Management</p>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Comprehensive Backoffice System</h2>
          
          <p className="text-gray-600 md:text-xl/relaxed max-w-[700px]">
            Fivitech Technologies empowers your operations team with powerful tools to manage clients, transactions, and business processes efficiently.
          </p>
        </div>
        
        <div className="mt-12 md:mt-16 space-y-8 md:space-y-12">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="md:w-1/2 space-y-8">
              <div className="flex gap-4 items-start group">
                <div className="flex-shrink-0 mt-1">
                  <Database className="h-6 w-6 text-primary group-hover:text-primary/80 transition-colors" />
                </div>
                <div>
                  <p className="font-medium">Centralized client management system with comprehensive profiles, transaction history, and activity logs.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start group">
                <div className="flex-shrink-0 mt-1">
                  <BarChart3 className="h-6 w-6 text-primary group-hover:text-primary/80 transition-colors" />
                </div>
                <div>
                  <p className="font-medium">Comprehensive analytics dashboard for tracking client acquisition, trading volume, commission earnings, and conversion rates.</p>
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
                  <Users className="h-6 w-6 text-primary group-hover:text-primary/80 transition-colors" />
                </div>
                <div>
                  <p className="font-medium">Advanced user management with role-based permissions, activity logging, and detailed audit trails.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start group">
                <div className="flex-shrink-0 mt-1">
                  <Shield className="h-6 w-6 text-primary group-hover:text-primary/80 transition-colors" />
                </div>
                <div>
                  <p className="font-medium">Robust compliance tools including KYC/AML verification workflows, document management, and regulatory reporting.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start group">
                <div className="flex-shrink-0 mt-1">
                  <Wallet className="h-6 w-6 text-primary group-hover:text-primary/80 transition-colors" />
                </div>
                <div>
                  <p className="font-medium">Comprehensive payment processing system with multiple gateway integrations and automated reconciliation.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start group">
                <div className="flex-shrink-0 mt-1">
                  <PieChart className="h-6 w-6 text-primary group-hover:text-primary/80 transition-colors" />
                </div>
                <div>
                  <p className="font-medium">Advanced reporting suite with customizable templates, scheduled exports, and interactive dashboards.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start group">
                <div className="flex-shrink-0 mt-1">
                  <Settings className="h-6 w-6 text-primary group-hover:text-primary/80 transition-colors" />
                </div>
                <div>
                  <p className="font-medium">Flexible system configuration with white-label options, customizable workflows, and integration capabilities.</p>
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
                  <div className="text-gray-400 text-xs font-medium ml-auto">Backoffice Dashboard</div>
                </div>
                <div className="p-4">
                  <img src="/backoffice-dashboard.png" alt="Backoffice Dashboard" className="w-full rounded-md shadow-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
