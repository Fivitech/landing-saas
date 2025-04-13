import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ChevronRight, Globe, X } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">ForexFlow</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-primary">
              Pricing
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Transparent Pricing</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that best fits your brokerage needs with no hidden fees.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
              <Card className="border shadow-md flex flex-col">
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>For emerging forex brokers</CardDescription>
                  <div className="mt-4 flex items-baseline text-5xl font-bold">
                    $499<span className="ml-1 text-xl font-normal text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="mb-4 text-sm text-muted-foreground">
                    Everything you need to start your forex brokerage business.
                  </p>
                  <h3 className="font-medium mb-2">Features include:</h3>
                  <ul className="space-y-2 text-sm mb-6">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Up to 500 active clients</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Real-time market data (30 currency pairs)</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Basic introducing broker portal</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Standard client portal</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>5 payment gateway integrations</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Basic lead capture tools</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Email support ticketing</span>
                    </li>
                    <li className="flex items-center">
                      <X className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">White-labeled client portal</span>
                    </li>
                    <li className="flex items-center">
                      <X className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Compliance automation tools</span>
                    </li>
                    <li className="flex items-center">
                      <X className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Advanced analytics</span>
                    </li>
                  </ul>
                  <div className="border-t pt-4">
                    <h3 className="font-medium mb-2">Technical Specifications:</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Storage</span>
                        <span>50 GB</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">API Calls</span>
                        <span>10,000/day</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Data Retention</span>
                        <span>6 months</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/signup?plan=starter">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="border-2 border-primary shadow-lg flex flex-col relative">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Most Popular
                </div>
                <CardHeader>
                  <CardTitle>Professional</CardTitle>
                  <CardDescription>For established forex brokers</CardDescription>
                  <div className="mt-4 flex items-baseline text-5xl font-bold">
                    $1,299<span className="ml-1 text-xl font-normal text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="mb-4 text-sm text-muted-foreground">
                    Advanced features for growing brokerages with higher volume.
                  </p>
                  <h3 className="font-medium mb-2">Features include:</h3>
                  <ul className="space-y-2 text-sm mb-6">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Up to 2,000 active clients</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Real-time market data (all currency pairs)</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Advanced IB management system</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>White-labeled client portal</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>20 payment gateway integrations</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Advanced lead management & CRM</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Ticketing system & knowledge base</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Compliance automation tools</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Priority email & phone support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Basic analytics dashboard</span>
                    </li>
                    <li className="flex items-center">
                      <X className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Multi-entity support</span>
                    </li>
                  </ul>
                  <div className="border-t pt-4">
                    <h3 className="font-medium mb-2">Technical Specifications:</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Storage</span>
                        <span>200 GB</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">API Calls</span>
                        <span>50,000/day</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Data Retention</span>
                        <span>12 months</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/signup?plan=professional">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="border shadow-md flex flex-col">
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For large-scale forex operations</CardDescription>
                  <div className="mt-4 flex items-baseline text-5xl font-bold">
                    $3,999<span className="ml-1 text-xl font-normal text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="mb-4 text-sm text-muted-foreground">
                    Full-featured solution for large brokerages with global operations.
                  </p>
                  <h3 className="font-medium mb-2">Features include:</h3>
                  <ul className="space-y-2 text-sm mb-6">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Unlimited active clients</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Premium market data with millisecond precision</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Enterprise-grade IB network management</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Fully customizable client experience</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Unlimited payment gateway integrations</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Full-featured lead management with AI</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Complete support module with live chat</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Advanced compliance & regulatory reporting</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Multi-entity support & global deployment</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>24/7 dedicated support & account manager</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Advanced analytics with predictive capabilities</span>
                    </li>
                  </ul>
                  <div className="border-t pt-4">
                    <h3 className="font-medium mb-2">Technical Specifications:</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Storage</span>
                        <span>Unlimited</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">API Calls</span>
                        <span>Unlimited</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Data Retention</span>
                        <span>5 years</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/signup?plan=enterprise">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Feature Comparison</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Compare our plans to find the perfect fit for your brokerage.
                </p>
              </div>
            </div>
            <div className="mt-12 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-4 px-4 text-left font-medium">Feature</th>
                    <th className="py-4 px-4 text-center font-medium">Starter</th>
                    <th className="py-4 px-4 text-center font-medium">Professional</th>
                    <th className="py-4 px-4 text-center font-medium">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">Active Clients</td>
                    <td className="py-4 px-4 text-center">Up to 500</td>
                    <td className="py-4 px-4 text-center">Up to 2,000</td>
                    <td className="py-4 px-4 text-center">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">Currency Pairs</td>
                    <td className="py-4 px-4 text-center">30</td>
                    <td className="py-4 px-4 text-center">All</td>
                    <td className="py-4 px-4 text-center">All + Exotics</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">IB Management</td>
                    <td className="py-4 px-4 text-center">Basic</td>
                    <td className="py-4 px-4 text-center">Advanced</td>
                    <td className="py-4 px-4 text-center">Enterprise-grade</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">Client Portal</td>
                    <td className="py-4 px-4 text-center">Standard</td>
                    <td className="py-4 px-4 text-center">White-labeled</td>
                    <td className="py-4 px-4 text-center">Fully Customizable</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">Payment Gateways</td>
                    <td className="py-4 px-4 text-center">5</td>
                    <td className="py-4 px-4 text-center">20</td>
                    <td className="py-4 px-4 text-center">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">Lead Management</td>
                    <td className="py-4 px-4 text-center">Basic</td>
                    <td className="py-4 px-4 text-center">Advanced</td>
                    <td className="py-4 px-4 text-center">Full-featured with AI</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">Support Module</td>
                    <td className="py-4 px-4 text-center">Email Ticketing</td>
                    <td className="py-4 px-4 text-center">Ticketing & Knowledge Base</td>
                    <td className="py-4 px-4 text-center">Complete with Live Chat</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">Compliance Tools</td>
                    <td className="py-4 px-4 text-center">
                      <X className="mx-auto h-4 w-4 text-muted-foreground" />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <Check className="mx-auto h-4 w-4 text-primary" />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <Check className="mx-auto h-4 w-4 text-primary" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">Analytics</td>
                    <td className="py-4 px-4 text-center">
                      <X className="mx-auto h-4 w-4 text-muted-foreground" />
                    </td>
                    <td className="py-4 px-4 text-center">Basic</td>
                    <td className="py-4 px-4 text-center">Advanced</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">Multi-entity Support</td>
                    <td className="py-4 px-4 text-center">
                      <X className="mx-auto h-4 w-4 text-muted-foreground" />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <X className="mx-auto h-4 w-4 text-muted-foreground" />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <Check className="mx-auto h-4 w-4 text-primary" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">Support</td>
                    <td className="py-4 px-4 text-center">Email</td>
                    <td className="py-4 px-4 text-center">Email & Phone</td>
                    <td className="py-4 px-4 text-center">24/7 Dedicated</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Frequently Asked Questions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about our pricing and plans.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 mt-12">
              <Card>
                <CardHeader>
                  <CardTitle>Can I upgrade or downgrade my plan at any time?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, you can upgrade your plan at any time, and the changes will take effect immediately. Downgrades
                    will take effect at the end of your current billing cycle.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Is there a setup fee?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No, there are no setup fees for any of our plans. You only pay the monthly subscription fee.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Do you offer annual billing?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, we offer annual billing with a 10% discount compared to monthly billing. Contact our sales team
                    for more information.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>What kind of support is included?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Starter plans include email support with a 24-hour response time. Professional plans include
                    priority email and phone support during business hours. Enterprise plans include 24/7 dedicated
                    support with a named account manager.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Get Started?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that's right for your brokerage and transform your operations today.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
                <Button size="lg" asChild>
                  <Link href="/signup">
                    Get Started
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background">
        <div className="container py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              © {new Date().getFullYear()} ForexFlow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
