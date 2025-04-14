import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[hsl(174,60%,41%)]/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4 shadow-sm">
            FAQ
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-5xl text-gray-900">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="mt-4 text-gray-600 md:text-xl max-w-3xl mx-auto">
            Find answers to common questions about our forex CRM solution.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300">
                <AccordionTrigger className="text-left font-medium px-6 py-4 hover:bg-primary/5 hover:text-primary transition-colors duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 px-6 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions? We're here to help.
          </p>
          <p className="mt-4">
            <a href="/contact" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium bg-primary/10 px-6 py-2 rounded-full transition-colors duration-300">
              Contact our support team
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    question: "How long does it take to implement Fivitech?",
    answer: "The implementation timeline depends on your specific requirements and the complexity of your existing systems. Typically, basic implementation can be completed in 2-4 weeks. For more complex setups with custom integrations, it may take 4-8 weeks. Our team works closely with you throughout the process to ensure a smooth transition."
  },
  {
    question: "Can Fivitech integrate with my existing trading platforms?",
    answer: "Yes, Fivitech is designed to integrate seamlessly with all major trading platforms including MetaTrader 4, MetaTrader 5, and cTrader. We also offer custom API integrations for proprietary trading platforms. Our team can provide a detailed compatibility assessment for your specific setup."
  },
  {
    question: "Is my data secure with Fivitech?",
    answer: "Absolutely. Security is our top priority. Fivitech employs industry-leading security measures including end-to-end encryption, regular security audits, and compliance with international data protection regulations. All data is stored in secure, redundant data centers with 24/7 monitoring."
  },
  {
    question: "Can I customize the client portal to match my brand?",
    answer: "Yes, all our plans include white-labeling options that allow you to customize the client portal with your brand colors, logo, and domain. The Enterprise plan offers additional customization options including custom UI elements and workflows."
  },
  {
    question: "Do you offer training for our team?",
    answer: "Yes, we provide comprehensive training for your team as part of the implementation process. This includes admin training, user training, and technical documentation. The Professional and Enterprise plans also include regular refresher training sessions and access to our knowledge base."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer different levels of support based on your plan. All customers receive email support with guaranteed response times. Professional plan customers get priority email support, while Enterprise customers enjoy 24/7 dedicated support with a named account manager and emergency phone support."
  }
];
