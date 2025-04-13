import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function TestimonialsSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-slate-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900">
            Trusted by Forex Brokers Worldwide
          </h2>
          <p className="mt-4 text-gray-600 md:text-xl max-w-3xl mx-auto">
            Hear what our clients have to say about how ForexFlow has transformed their brokerage operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="ForexFlow has completely transformed how we manage our IB relationships. The automated commission calculations alone have saved us countless hours every month."
            author="Sarah Johnson"
            role="CEO, FX Capital Partners"
            imageSrc="/testimonials/person1.jpg"
          />
          <TestimonialCard 
            quote="The client onboarding process is now 3x faster with the integrated KYC tools. Our compliance team can focus on more important tasks instead of paperwork."
            author="Michael Chen"
            role="COO, Global Trading Solutions"
            imageSrc="/testimonials/person2.jpg"
          />
          <TestimonialCard 
            quote="We've seen a 40% increase in client retention since implementing ForexFlow. The client portal provides exactly what traders need to stay engaged."
            author="Elena Rodriguez"
            role="Head of Client Relations, EuroFX"
            imageSrc="/testimonials/person3.jpg"
          />
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ quote, author, role, imageSrc }: {
  quote: string;
  author: string;
  role: string;
  imageSrc: string;
}) {
  return (
    <Card className="border-none shadow-md">
      <CardContent className="p-6">
        <div className="flex flex-col h-full">
          <div className="mb-4">
            <svg width="45" height="36" className="text-primary/40" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.4 36C9.4 36 6.23333 34.7333 3.9 32.2C1.56667 29.6 0.4 26.3333 0.4 22.4C0.4 18.4 1.53333 14.9333 3.8 12C6.13333 9 9.4 6.6 13.6 4.8L19.2 11.6C17.2 12.5333 15.5333 13.6 14.2 14.8C12.9333 16 12.3 17.3333 12.3 18.8C12.3 19.7333 12.6333 20.6 13.3 21.4C14.0333 22.1333 15 22.5 16.2 22.5C17.8 22.5 19.1333 23.0333 20.2 24.1C21.3333 25.1667 21.9 26.5333 21.9 28.2C21.9 30.0667 21.2667 31.6333 20 32.9C18.8 34.1 17.2667 34.9333 15.4 35.4C14.7333 35.8 14.0667 36 13.4 36ZM35.4 36C31.4 36 28.2333 34.7333 25.9 32.2C23.5667 29.6 22.4 26.3333 22.4 22.4C22.4 18.4 23.5333 14.9333 25.8 12C28.1333 9 31.4 6.6 35.6 4.8L41.2 11.6C39.2 12.5333 37.5333 13.6 36.2 14.8C34.9333 16 34.3 17.3333 34.3 18.8C34.3 19.7333 34.6333 20.6 35.3 21.4C36.0333 22.1333 37 22.5 38.2 22.5C39.8 22.5 41.1333 23.0333 42.2 24.1C43.3333 25.1667 43.9 26.5333 43.9 28.2C43.9 30.0667 43.2667 31.6333 42 32.9C40.8 34.1 39.2667 34.9333 37.4 35.4C36.7333 35.8 36.0667 36 35.4 36Z" fill="currentColor"/>
            </svg>
          </div>
          <p className="flex-1 text-gray-700 mb-6">{quote}</p>
          <div className="flex items-center mt-auto">
            <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
              <div className="absolute inset-0 bg-slate-200 rounded-full"></div>
              {/* Placeholder for image - in production, use actual images */}
            </div>
            <div>
              <h4 className="font-medium text-gray-900">{author}</h4>
              <p className="text-sm text-gray-600">{role}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
