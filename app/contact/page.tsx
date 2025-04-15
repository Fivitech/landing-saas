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
      <main className="flex-1">
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
                        <p className="text-sm text-muted-foreground">info@fivitech.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-sm text-muted-foreground">+971 50 123 4567</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Headquarters</h3>
                        <p className="text-sm text-muted-foreground">
                          Office: 1F 2696, Building: C1
                          <br />
                          Fivitech Office, Ajman Free Zone
                          <br />
                          United Arab Emirates
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Connect With Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex flex-col gap-4">
                        <h3 className="font-medium">Social Media</h3>
                        <div className="flex gap-4">
                          <a href="https://www.facebook.com/FiviTechnologies/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-primary/10 p-2 hover:bg-primary/20 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                            </svg>
                          </a>
                          <a href="https://www.instagram.com/fivitechnologies/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-primary/10 p-2 hover:bg-primary/20 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                            </svg>
                          </a>
                          <a href="https://www.linkedin.com/company/fivitechnologies/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-primary/10 p-2 hover:bg-primary/20 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                              <rect width="4" height="12" x="2" y="9" />
                              <circle cx="4" cy="4" r="2" />
                            </svg>
                          </a>
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
