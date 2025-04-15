import { UserCircle, CreditCard, MessageSquare, Clock, Globe, Gift, Shield, Zap, Bell, BarChart, Lock, Wallet } from "lucide-react";

export function ClientSection() {
  return (
    <section id="client-section" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col space-y-2">
          <div>
            <p className="text-sm font-medium text-primary">Client Portal</p>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Seamless Client Experience</h2>
          
          <p className="text-gray-600 md:text-xl/relaxed max-w-[700px] mt-2">
            Fivi Technologies provides your clients with a powerful yet intuitive portal to manage their accounts, access trading platforms, and more.
          </p>
        </div>
        
        <div className="mt-12 md:mt-16">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
            <div className="md:w-1/2 space-y-8">
              <div className="flex gap-4 items-start group">
                <div className="flex-shrink-0 mt-1">
                  <UserCircle className="h-6 w-6 text-primary group-hover:text-primary/80 transition-colors" />
                </div>
                <div>
                  <p className="font-medium">Allow clients to manage their profiles, update personal information, and access account statements and trading history.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start group">
                <div className="flex-shrink-0 mt-1">
                  <CreditCard className="h-6 w-6 text-primary group-hover:text-primary/80 transition-colors" />
                </div>
                <div>
                  <p className="font-medium">Streamlined payment processing with multiple payment methods, instant deposits, and automated withdrawal requests.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start group">
                <div className="flex-shrink-0 mt-1">
                  <MessageSquare className="h-6 w-6 text-primary group-hover:text-primary/80 transition-colors" />
                </div>
                <div>
                  <p className="font-medium">Integrated messaging system, support ticket creation, and live chat for seamless communication with your support team.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start group">
                <div className="flex-shrink-0 mt-1">
                  <Globe className="h-6 w-6 text-primary group-hover:text-primary/80 transition-colors" />
                </div>
                <div>
                  <p className="font-medium">Engage clients with a points-based loyalty system, trading challenges, and personalized rewards based on activity.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start group">
                <div className="flex-shrink-0 mt-1">
                  <Bell className="h-6 w-6 text-primary group-hover:text-primary/80 transition-colors" />
                </div>
                <div>
                  <p className="font-medium">Real-time notifications for account activity, price alerts, margin calls, and important market events.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start group">
                <div className="flex-shrink-0 mt-1">
                  <BarChart className="h-6 w-6 text-primary group-hover:text-primary/80 transition-colors" />
                </div>
                <div>
                  <p className="font-medium">Advanced performance analytics with visual reports on trading history, profit/loss metrics, and portfolio allocation.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start group">
                <div className="flex-shrink-0 mt-1">
                  <Lock className="h-6 w-6 text-primary group-hover:text-primary/80 transition-colors" />
                </div>
                <div>
                  <p className="font-medium">Enhanced security features including two-factor authentication, biometric login, and suspicious activity monitoring.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start group">
                <div className="flex-shrink-0 mt-1">
                  <Wallet className="h-6 w-6 text-primary group-hover:text-primary/80 transition-colors" />
                </div>
                <div>
                  <p className="font-medium">Multi-currency wallet management with instant internal transfers and competitive exchange rates.</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="relative w-full max-w-[500px] bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
                <div className="h-8 bg-gray-50 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-gray-400 text-xs font-medium ml-auto">Client Portal</div>
                </div>
                <div className="p-4">
                  <img src="/client-portal.png" alt="Client Portal" className="w-full rounded-md shadow-sm" />
                </div>
              </div>
              <div className="absolute -z-10 top-6 right-6 w-full h-full bg-primary/10 rounded-lg"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


