import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ChevronRight, BarChart3, Shield, Globe, LineChart, Users, CreditCard, Gift } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-50 to-slate-100">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-slate-800" />
            <span className="text-xl font-bold">ForexFlow</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/features" className="text-sm font-medium hover:text-slate-800">
              Features
            </Link>
            <Link href="/pricing" className="text-sm font-medium hover:text-slate-800">
              Pricing
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-slate-800">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button className="bg-slate-800 hover:bg-slate-700" asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white">
          <div className="px-4 md:px-6"> {/* Removed container */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    All-in-One Forex CRM Solution
                  </h1>
                  <p className="max-w-[600px] text-white/90 md:text-xl">
                    A comprehensive platform with integrated client area, backoffice management, and IB portal designed
                    specifically for forex brokers to streamline operations and maximize profitability.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-white text-slate-800 hover:bg-white/90" asChild>
                    <Link href="/pricing">
                      View Pricing
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
                    <Link href="/demo">Request Demo</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm p-8 flex items-center justify-center border border-white/20">
                  <div className="relative flex flex-col items-center text-center">
                    <div className="rounded-full bg-white/20 p-4 mb-4">
                      <BarChart3 className="h-12 w-12 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Best UI/UX for Your Trading Empire</h3>
                      <p className="text-white/80 mt-2">
                        Intuitive interfaces that transform complex trading operations into seamless experiences
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="px-4 md:px-6"> {/* Removed container */}
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-700">
                    All-in-One Platform
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-900">
                    Essential Tools at Your Fingertips
                  </h2>
                  <p className="text-gray-600 md:text-xl">
                    Our comprehensive platform provides all the tools you need to manage your forex brokerage
                    efficiently in one place.
                  </p>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-slate-100 p-1">
                      <Users className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="font-medium">Sales & CRM Tools</h3>
                      <p className="text-sm text-gray-600">
                        Manage your sales pipeline, track client interactions, and close deals faster with our
                        integrated CRM system.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-slate-100 p-1">
                      <LineChart className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="font-medium">IB Management</h3>
                      <p className="text-sm text-gray-600">
                        Streamline your introducing broker operations with automated commission calculations and
                        performance tracking.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-slate-100 p-1">
                      <BarChart3 className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="font-medium">Marketing & Analytics</h3>
                      <p className="text-sm text-gray-600">
                        Create targeted campaigns, track performance, and optimize your marketing efforts with
                        data-driven insights.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-slate-100 p-1">
                      <CreditCard className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="font-medium">Finance & Payment Processing</h3>
                      <p className="text-sm text-gray-600">
                        Handle deposits, withdrawals, and financial operations seamlessly with integrated payment
                        gateways.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-slate-100 p-1">
                      <Shield className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="font-medium">Compliance & KYC</h3>
                      <p className="text-sm text-gray-600">
                        Stay compliant with regulatory requirements using our automated KYC verification and
                        documentation tools.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -top-6 -left-6 w-64 h-64 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                  <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-slate-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                  <div className="relative bg-white rounded-2xl shadow-xl p-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2 h-24 bg-slate-50 rounded-lg flex items-center justify-center">
                        <BarChart3 className="h-10 w-10 text-slate-700" />
                      </div>
                      <div className="h-32 bg-slate-50 rounded-lg flex items-center justify-center">
                        <Users className="h-8 w-8 text-slate-700" />
                      </div>
                      <div className="h-32 bg-slate-50 rounded-lg flex items-center justify-center">
                        <CreditCard className="h-8 w-8 text-slate-700" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white">
          <div className="px-4 md:px-6"> {/* Removed container */}
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-slate-800 px-3 py-1 text-sm text-white">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-900">
                  Powerful Tools for Modern Forex Brokers
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform offers a comprehensive suite of features designed to address the unique challenges of
                  forex brokerage operations.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
              <Card className="border-none shadow-md bg-white">
                <CardHeader className="pb-2">
                  <div className="mb-2 rounded-md bg-slate-100 p-2 w-10 h-10 flex items-center justify-center">
                    <BarChart3 className="h-5 w-5 text-slate-700" />
                  </div>
                  <CardTitle>Advanced Reporting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Generate comprehensive reports for compliance, performance tracking, and business intelligence with
                    customizable templates.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/features#reporting" className="text-slate-700 hover:underline flex items-center">
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="border-none shadow-md bg-white">
                <CardHeader className="pb-2">
                  <div className="mb-2 rounded-md bg-slate-100 p-2 w-10 h-10 flex items-center justify-center">
                    <LineChart className="h-5 w-5 text-slate-700" />
                  </div>
                  <CardTitle>Advanced Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Gain deep insights into trading patterns, client behavior, and profitability metrics with our
                    powerful analytics engine.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/features#analytics" className="text-slate-700 hover:underline flex items-center">
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="border-none shadow-md bg-white">
                <CardHeader className="pb-2">
                  <div className="mb-2 rounded-md bg-slate-100 p-2 w-10 h-10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-slate-700" />
                  </div>
                  <CardTitle>Introducing Broker Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Fully customizable IB portal with multi-level commission structures, performance tracking, and
                    marketing tools.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/features#ib-management" className="text-slate-700 hover:underline flex items-center">
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardFooter>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <Button className="bg-slate-800 hover:bg-slate-700" asChild size="lg">
                <Link href="/features">
                  View All Features
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="px-4 md:px-6"> {/* Removed container */}
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-700">
                    Loyalty & Referrals
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-900">
                    Boost Retention with Powerful Loyalty Programs
                  </h2>
                  <p className="text-gray-600 md:text-xl">
                    Create customizable referral and loyalty programs that reward your clients for their trading
                    activity and successful referrals.
                  </p>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-slate-100 p-1">
                      <Check className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="font-medium">Multi-tier Referral System</h3>
                      <p className="text-sm text-gray-600">
                        Set up multi-level referral programs with customizable commission structures and tracking.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-slate-100 p-1">
                      <Check className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="font-medium">Points & Rewards System</h3>
                      <p className="text-sm text-gray-600">
                        Implement a points-based loyalty system where clients earn rewards for trading activity and
                        engagement.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-slate-100 p-1">
                      <Check className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="font-medium">Automated Reward Distribution</h3>
                      <p className="text-sm text-gray-600">
                        Automatically distribute bonuses, rebates, and rewards based on predefined rules and milestones.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-slate-100 p-1">
                      <Check className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="font-medium">Gamification Elements</h3>
                      <p className="text-sm text-gray-600">
                        Engage clients with leaderboards, badges, and challenges to increase platform stickiness and
                        retention.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative h-[400px] w-[400px] rounded-full bg-slate-100 flex items-center justify-center">
                  <div className="absolute inset-4 rounded-full bg-white flex items-center justify-center">
                    <Gift className="h-20 w-20 text-slate-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white">
          <div className="px-4 md:px-6"> {/* Removed container */}
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-white/20 backdrop-blur-sm px-3 py-1 text-sm text-white">
                    Modern UI/UX
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Stunning Interfaces That Drive Results
                  </h2>
                  <p className="text-white/90 md:text-xl">
                    Our platform combines beautiful design with powerful functionality to create an experience your
                    clients and team will love.
                  </p>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-white/20 backdrop-blur-sm p-1">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Intuitive Navigation</h3>
                      <p className="text-sm text-white/80">
                        Thoughtfully designed interfaces that make complex operations simple and accessible.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-white/20 backdrop-blur-sm p-1">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Responsive Design</h3>
                      <p className="text-sm text-white/80">
                        Seamless experience across all devices - desktop, tablet, and mobile.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-white/20 backdrop-blur-sm p-1">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Customizable Dashboards</h3>
                      <p className="text-sm text-white/80">
                        Personalized workspaces that adapt to individual user needs and preferences.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button className="bg-white text-slate-800 hover:bg-white/90" asChild>
                    <Link href="/features#ui-ux">
                      Explore UI/UX Features
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="relative bg-white rounded-2xl shadow-xl p-6 border border-white/20">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-sm text-gray-500">Dashboard</div>
                    </div>
                    <div className="space-y-4">
                      <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-200 rounded"></div>
                      <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                      <div className="grid grid-cols-3 gap-4 mt-6">
                        <div className="h-20 bg-slate-100 rounded-lg"></div>
                        <div className="h-20 bg-slate-100 rounded-lg"></div>
                        <div className="h-20 bg-slate-100 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="px-4 md:px-6"> {/* Removed container */}
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-700">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-900">
                  Choose the Right Plan for Your Brokerage
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Flexible pricing options designed to scale with your business needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-12">
              <Card className="border shadow-md bg-white">
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>For emerging forex brokers</CardDescription>
                  <div className="mt-4 flex items-baseline text-5xl font-bold text-gray-900">
                    $499<span className="ml-1 text-xl font-normal text-gray-500">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-slate-700" />
                      <span>Up to 500 active clients</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-slate-700" />
                      <span>Real-time market data (30 currency pairs)</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-slate-700" />
                      <span>Basic loyalty program features</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-slate-700" />
                      <span>Standard client portal</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-slate-700" />
                      <span>Email support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-slate-800 hover:bg-slate-700" asChild>
                    <Link href="/signup?plan=starter">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="border-2 border-slate-800 shadow-lg bg-white relative">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-white">
                  Most Popular
                </div>
                <CardHeader>
                  <CardTitle>Professional</CardTitle>
                  <CardDescription>For established forex brokers</CardDescription>
                  <div className="mt-4 flex items-baseline text-5xl font-bold text-gray-900">
                    $1,299<span className="ml-1 text-xl font-normal text-gray-500">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-slate-700" />
                      <span>Up to 2,000 active clients</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-slate-700" />
                      <span>Real-time market data (all currency pairs)</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-slate-700" />
                      <span>Advanced loyalty & referral system</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-slate-700" />
                      <span>White-labeled client portal</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-slate-700" />
                      <span>Compliance automation tools</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-slate-700" />
                      <span>Priority email & phone support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-slate-800 hover:bg-slate-700" asChild>
                    <Link href="/signup?plan=professional">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="border shadow-md bg-white">
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For large-scale forex operations</CardDescription>
                  <div className="mt-4 flex items-baseline text-5xl font-bold text-gray-900">
                    $3,999<span className="ml-1 text-xl font-normal text-gray-500">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-slate-700" />
                      <span>Unlimited active clients</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-slate-700" />
                      <span>Premium market data with millisecond precision</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-slate-700" />
                      <span>Fully customizable loyalty ecosystem</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-slate-700" />
                      <span>Fully customizable client experience</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-slate-700" />
                      <span>Advanced compliance & regulatory reporting</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-slate-700" />
                      <span>24/7 dedicated support & account manager</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-slate-800 hover:bg-slate-700" asChild>
                    <Link href="/signup?plan=enterprise">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg" className="border-slate-800 text-slate-800 hover:bg-slate-50" asChild>
                <Link href="/pricing">
                  View Detailed Pricing
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-100 to-slate-200">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-slate-800 px-3 py-1 text-sm text-white">Contact Us</div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-900">
                    Ready to Transform Your Forex Brokerage?
                  </h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our team of forex technology experts is ready to help you implement the perfect solution for your
                    business.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Button size="lg" className="bg-slate-800 hover:bg-slate-700" asChild>
                  <Link href="/contact">
                    Contact Us Now
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-white">
        <div className="container flex flex-col gap-6 py-8 md:py-12">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Globe className="h-6 w-6 text-slate-800" />
              <span className="text-xl font-bold">ForexFlow</span>
            </div>
            <p className="text-sm text-gray-600">
              Empowering forex brokers with cutting-edge technology solutions since 2015.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-500 hover:text-slate-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-slate-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/features" className="text-gray-600 hover:text-slate-800">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-600 hover:text-slate-800">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-slate-800">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>
          <div className="border-t py-6">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-center text-sm text-gray-600 md:text-left">
                © {new Date().getFullYear()} ForexFlow. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
