import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-br from-[hsl(220,25%,10%)] to-[hsl(220,20%,20%)] text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-5"></div>
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary/20 blur-[100px]"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-[hsl(174,60%,41%)]/20 blur-[100px]"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="inline-block bg-primary/10 text-primary-foreground px-4 py-1 rounded-full text-sm font-medium mb-2">
            Get Started Today
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">
              Ready to <span className="text-primary">Transform</span> Your Forex Brokerage?
            </h2>
            <p className="mx-auto max-w-[700px] text-slate-300 md:text-xl/relaxed">
              Join hundreds of forex brokers who have streamlined their operations, increased client satisfaction, and boosted their profitability with Fivitech.
            </p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="rounded-full shadow-lg bg-primary text-white hover:bg-primary/90 hover:shadow-xl" 
              asChild
            >
              <Link href="/contact">Start Your Free Trial</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full shadow-lg border-2 border-primary bg-primary/10 text-primary hover:bg-primary/20 hover:shadow-xl backdrop-blur-sm" 
              asChild
            >
              <Link href="/contact">Schedule a Demo</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/70">
            No credit card required. 14-day free trial with full access to all features.
          </p>
        </div>
      </div>
    </section>
  );
}
