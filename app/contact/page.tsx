import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ContactHeader } from "@/components/contact/ContactHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-50 to-slate-100">
      <Navigation />
      <main className="flex-1 pt-16">
        <ContactHeader />
        
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
              <div>
                <ContactForm />
              </div>
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="text-2xl font-bold tracking-tighter mb-4">Contact Information</h2>
                  <p className="text-muted-foreground mb-6">
                    Our team is here to help you with any questions you may have about our platform, pricing, or how we
                    can tailor our solution to your specific needs.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-sm text-muted-foreground">sales@forexflow.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Headquarters</h3>
                        <p className="text-sm text-muted-foreground">
                          123 Financial District
                          <br />
                          New York, NY 10004
                          <br />
                          United States
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Global Offices</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-primary/10 p-2">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">London</h3>
                          <p className="text-sm text-muted-foreground">
                            45 Finsbury Square
                            <br />
                            London, EC2A 1HP
                            <br />
                            United Kingdom
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-primary/10 p-2">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Singapore</h3>
                          <p className="text-sm text-muted-foreground">
                            80 Raffles Place
                            <br />
                            Singapore, 048624
                            <br />
                            Singapore
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
