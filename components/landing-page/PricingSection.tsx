import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import pricingData from "@/data/pricing.json";

export function PricingSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            Pricing Plans
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-5xl lg:text-6xl text-gray-900 mb-6">
            Simple, <span className="text-primary">Transparent</span> Pricing
          </h2>
          <p className="mt-4 text-gray-600 md:text-xl max-w-3xl mx-auto">
            Choose the plan that fits your brokerage needs. All plans include core CRM functionality and 24/7 support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {pricingData.plans.map((plan) => (
            <Card 
              key={plan.id}
              className={`border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col relative overflow-hidden ${plan.id === 'custom' ? 'bg-gradient-to-br from-primary/5 to-transparent' : ''}`}
            >
              {plan.badge && (
                <div className="absolute top-0 right-0">
                  <div className={`px-3 py-1 text-xs font-medium ${plan.id === 'custom' ? 'bg-primary/20' : 'bg-primary/10'} text-primary rounded-bl-lg`}>
                    {plan.badge}
                  </div>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                <div className="mt-4 flex items-baseline">
                  {plan.price ? (
                    <>
                      <span className="text-3xl font-bold">${plan.price.toLocaleString()}</span>
                      <span className="ml-1 text-sm font-normal text-gray-500">/{plan.interval}</span>
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
                <ul className="space-y-3 text-sm mb-4">
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
              <CardFooter>
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
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Need help choosing the right plan? Our team is ready to assist you.
          </p>
          <Button asChild className="rounded-full bg-primary hover:bg-primary/90 text-white px-8">
            <Link href="/contact">Contact Sales</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function PricingCard({ 
  title, 
  price, 
  period,
  description, 
  features, 
  ctaText, 
  ctaLink, 
  popular,
  accentColor
}: {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  popular: boolean;
  accentColor: string;
}) {
  const getAccentClasses = () => {
    switch(accentColor) {
      case 'primary': return {
        card: 'border-primary/30 shadow-xl shadow-primary/10',
        badge: 'bg-primary text-white',
        price: 'text-primary',
        button: 'bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 hover:shadow-primary/30'
      };
      case 'blue': return {
        card: 'border-blue-500/30 shadow-lg',
        badge: 'bg-blue-500 text-white',
        price: 'text-blue-600',
        button: 'bg-white border-2 border-blue-500 text-blue-600 hover:bg-blue-50'
      };
      case 'slate': return {
        card: 'border-slate-500/30 shadow-lg',
        badge: 'bg-slate-800 text-white',
        price: 'text-slate-700',
        button: 'bg-slate-800 hover:bg-slate-700 text-white shadow-lg'
      };
      default: return {
        card: 'border-gray-200 shadow-md',
        badge: 'bg-primary text-white',
        price: 'text-gray-900',
        button: 'bg-white border border-gray-300 text-gray-800 hover:bg-gray-50'
      };
    }
  };

  const accentClasses = getAccentClasses();

  return (
    <Card className={`${popular ? 'scale-105 ' + accentClasses.card : 'border-gray-200 shadow-md hover:shadow-lg'} transition-all duration-300 relative overflow-hidden`}>
      {popular && (
        <div className="absolute top-0 left-0 right-0 px-6 py-2 text-center transform -translate-y-0">
          <span className={`${accentClasses.badge} text-xs px-3 py-1 rounded-full font-medium`}>Most Popular</span>
        </div>
      )}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-full blur-xl transform translate-x-1/2 -translate-y-1/2"></div>
      
      <CardHeader className={`${popular ? 'pt-12' : 'pt-6'}`}>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <div className="mt-4 flex items-baseline">
          <span className={`text-4xl font-bold ${accentClasses.price}`}>{price}</span>
          {price !== "Custom" && <span className="text-gray-500 ml-2">/{period}</span>}
        </div>
        <CardDescription className="mt-2 text-gray-600">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pb-8">
        <Button 
          className={`w-full rounded-full py-6 ${accentClasses.button} transition-all duration-300`} 
          asChild
        >
          <Link href={ctaLink}>{ctaText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
