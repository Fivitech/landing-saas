import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import pricingData from "@/data/pricing.json";

export function PricingPlans() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Choose the Perfect Plan for Your Business</h2>
          <p className="mt-4 text-gray-600 md:text-xl/relaxed max-w-[800px] mx-auto">
            Flexible pricing options designed to scale with your brokerage as it grows
          </p>
        </div>
        
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {pricingData.plans.map((plan) => (
            <Card 
              key={plan.id}
              className={`border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col relative overflow-hidden group ${plan.id === 'custom' ? 'bg-gradient-to-br from-primary/5 to-transparent' : ''}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <div className="flex justify-between items-center mb-2">
                  <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                  {plan.badge && (
                    <span className={`px-3 py-1 text-xs font-medium ${plan.id === 'custom' ? 'bg-primary/20' : 'bg-primary/10'} text-primary rounded-full`}>
                      {plan.badge}
                    </span>
                  )}
                </div>
                <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                <div className="mt-4 flex items-baseline">
                  {plan.price ? (
                    <>
                      <span className="text-4xl font-bold">${plan.price.toLocaleString()}</span>
                      <span className="ml-1 text-lg font-normal text-gray-500">/{plan.interval}</span>
                    </>
                  ) : (
                    <span className="text-xl font-medium text-gray-800">{plan.priceDisplay}</span>
                  )}
                </div>
                {plan.billingNote && <p className="text-xs text-gray-500 mt-1">{plan.billingNote}</p>}
              </CardHeader>
              <CardContent className="flex-1 relative z-10">
                <div className="h-px w-full bg-gray-100 my-4"></div>
                <p className="mb-4 text-sm text-gray-600">
                  {plan.id === 'starter' && 'Everything you need to start your forex brokerage business.'}
                  {plan.id === 'advanced' && 'Advanced features for growing brokerages with higher volumes.'}
                  {plan.id === 'expert' && 'Comprehensive solution for high-volume forex brokerages.'}
                  {plan.id === 'custom' && 'Bespoke forex brokerage solutions tailored to your exact requirements.'}
                </p>
                <ul className="space-y-3 text-sm mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      {feature.included ? (
                        <Check className="mr-2 h-4 w-4 text-primary" />
                      ) : (
                        <X className="mr-2 h-4 w-4 text-gray-400" />
                      )}
                      <span className={feature.included ? '' : 'text-gray-400'}>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="relative z-10">
                <Button 
                  asChild 
                  className={`w-full ${plan.id === 'custom' ? 'bg-primary/90 hover:bg-primary text-white border border-primary/20' : 'bg-primary hover:bg-primary/90 text-white'}`}
                >
                  <Link href="/contact">{plan.id === 'custom' ? 'Contact Sales' : 'Get Started'}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Need help choosing the right plan? Our team is ready to assist you.</p>
          <Button asChild className="bg-white text-primary hover:bg-gray-50 border border-primary/20 px-8">
            <Link href="/contact">Schedule a Demo</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
