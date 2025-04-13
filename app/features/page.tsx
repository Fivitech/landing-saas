"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Check, ChevronRight, Globe, Users, CreditCard, Gift, Zap, Sparkles } from "lucide-react"
import {
  BarChart3,
  Building,
  UserCircle,
  Briefcase,
  Phone,
  Mail,
  MessageSquare,
  Clock,
  Database,
  FileText,
  Settings,
  Shield,
  ArrowRight,
} from "lucide-react"

export default function FeaturesPage() {
  const [activeSection, setActiveSection] = useState("backoffice")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      if (position > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Determine active section based on scroll position
      const sections = document.querySelectorAll("section[id]")
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100
        const sectionHeight = section.offsetHeight
        if (position >= sectionTop && position < sectionTop + sectionHeight) {
          const id = section.getAttribute("id")
          if (id === "backoffice-section" || id === "backoffice-analytics") {
            setActiveSection("backoffice")
          } else if (id === "client-section") {
            setActiveSection("client")
          } else if (id === "broker-section") {
            setActiveSection("broker")
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(`${sectionId}-section`)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-50 to-slate-100">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-slate-800" />
            <span className="text-xl font-bold">ForexFlow</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-slate-800">
              Home
            </Link>
            <Link href="/features" className="text-sm font-medium text-slate-800">
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
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comprehensive Features</h1>
                <p className="max-w-[900px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover the powerful tools and capabilities that make ForexFlow the leading platform for forex
                  brokers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className={`sticky top-16 z-40 w-full transition-all duration-200 ${scrolled ? "bg-white shadow-sm" : "bg-transparent"}`}
        >
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-center py-4">
              <div className="inline-flex rounded-full bg-white p-1 shadow-lg">
                <button
                  onClick={() => scrollToSection("backoffice")}
                  className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all ${
                    activeSection === "backoffice" ? "bg-slate-800 text-white" : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <Building className="h-4 w-4" />
                  <span>Backoffice</span>
                </button>
                <button
                  onClick={() => scrollToSection("client")}
                  className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all ${
                    activeSection === "client" ? "bg-slate-800 text-white" : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <UserCircle className="h-4 w-4" />
                  <span>Client Area</span>
                </button>
                <button
                  onClick={() => scrollToSection("broker")}
                  className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all ${
                    activeSection === "broker" ? "bg-slate-800 text-white" : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <Briefcase className="h-4 w-4" />
                  <span>Broker Area</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <section id="backoffice-section" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center justify-center rounded-full bg-slate-100 p-2 shadow-sm">
                <Building className="h-6 w-6 text-slate-800" />
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-900">Backoffice Area</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Powerful tools for managing your forex brokerage operations with efficiency and precision.
                </p>
              </div>
            </div>

            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-700">
                    CRM System
                  </div>
                  <h3 className="text-2xl font-bold tracking-tighter md:text-3xl/tight text-gray-900">
                    Powerful CRM & Management Tools
                  </h3>
                  <p className="text-gray-600 md:text-lg">
                    Our comprehensive CRM system is designed specifically for forex brokers, providing all the tools you
                    need to manage clients, leads, and operations efficiently.
                  </p>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-slate-100 p-1">
                      <Users className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">360° Client View</h4>
                      <p className="text-sm text-gray-600">
                        Get a complete view of each client including trading history, communication logs, document
                        status, and financial transactions in one unified interface.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-slate-100 p-1">
                      <Phone className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">Integrated Communication Tools</h4>
                      <p className="text-sm text-gray-600">
                        Communicate with clients via email, SMS, and in-app messaging directly from the CRM, with all
                        interactions automatically logged and tracked.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-slate-100 p-1">
                      <BarChart3 className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">Sales Pipeline Management</h4>
                      <p className="text-sm text-gray-600">
                        Track leads through your sales funnel with customizable stages, automated follow-ups, and
                        performance analytics to optimize conversion rates.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-slate-100 p-1">
                      <Clock className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">Task Automation & Workflows</h4>
                      <p className="text-sm text-gray-600">
                        Automate routine tasks and create custom workflows for client onboarding, KYC verification,
                        follow-ups, and more to increase team efficiency.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button variant="outline" className="group" asChild>
                    <Link href="#" className="inline-flex items-center">
                      Learn more about our CRM
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -top-6 -left-6 w-64 h-64 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                  <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-slate-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                  <div className="relative bg-white rounded-2xl shadow-xl p-6">
                    <div className="space-y-4">
                      <div className="h-12 bg-slate-50 rounded-lg flex items-center px-4">
                        <Users className="h-5 w-5 text-slate-700 mr-2" />
                        <span className="text-slate-700 font-medium">Client Management</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-32 bg-slate-50 rounded-lg p-4">
                          <Phone className="h-5 w-5 text-slate-700 mb-2" />
                          <div className="h-2 bg-slate-200 rounded w-3/4 mb-2"></div>
                          <div className="h-2 bg-slate-200 rounded w-1/2"></div>
                        </div>
                        <div className="h-32 bg-slate-50 rounded-lg p-4">
                          <Mail className="h-5 w-5 text-slate-700 mb-2" />
                          <div className="h-2 bg-slate-200 rounded w-3/4 mb-2"></div>
                          <div className="h-2 bg-slate-200 rounded w-1/2"></div>
                        </div>
                      </div>
                      <div className="h-12 bg-slate-50 rounded-lg flex items-center px-4">
                        <BarChart3 className="h-5 w-5 text-slate-700 mr-2" />
                        <span className="text-slate-700 font-medium">Analytics Dashboard</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="backoffice-analytics"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -top-6 -left-6 w-64 h-64 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                  <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-slate-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                  <div className="relative bg-white rounded-2xl shadow-xl p-6">
                    <div className="space-y-4">
                      <div className="h-12 bg-slate-50 rounded-lg flex items-center px-4">
                        <Database className="h-5 w-5 text-slate-700 mr-2" />
                        <span className="text-slate-700 font-medium">Data Management</span>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        <div className="h-24 bg-slate-50 rounded-lg p-4">
                          <div className="flex justify-between mb-2">
                            <FileText className="h-5 w-5 text-slate-700" />
                            <Shield className="h-5 w-5 text-slate-700" />
                          </div>
                          <div className="h-2 bg-slate-200 rounded w-full mb-2"></div>
                          <div className="h-2 bg-slate-200 rounded w-3/4 mb-2"></div>
                          <div className="h-2 bg-slate-200 rounded w-1/2"></div>
                        </div>
                      </div>
                      <div className="h-12 bg-slate-50 rounded-lg flex items-center px-4">
                        <Settings className="h-5 w-5 text-slate-700 mr-2" />
                        <span className="text-slate-700 font-medium">System Configuration</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-700">
                    Advanced Analytics
                  </div>
                  <h3 className="text-2xl font-bold tracking-tighter md:text-3xl/tight text-gray-900">
                    Data-Driven Decision Making
                  </h3>
                  <p className="text-gray-600 md:text-lg">
                    Gain deep insights into your business performance with comprehensive analytics and reporting tools.
                  </p>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-slate-100 p-1">
                      <BarChart3 className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">Performance Dashboards</h4>
                      <p className="text-sm text-gray-600">
                        Customizable dashboards that provide real-time insights into key performance indicators, client
                        activity, and business metrics.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-slate-100 p-1">
                      <Users className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">Client Segmentation</h4>
                      <p className="text-sm text-gray-600">
                        Segment clients based on trading behavior, profitability, geography, and other criteria to
                        tailor your marketing and service strategies.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-slate-100 p-1">
                      <FileText className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">Custom Reporting</h4>
                      <p className="text-sm text-gray-600">
                        Generate comprehensive reports with drag-and-drop simplicity for internal analysis, client
                        communication, and regulatory compliance.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-slate-100 p-1">
                      <Shield className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">Risk Management</h4>
                      <p className="text-sm text-gray-600">
                        Monitor and manage risk exposure with real-time alerts, automated risk controls, and
                        comprehensive audit trails.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button variant="outline" className="group" asChild>
                    <Link href="#" className="inline-flex items-center">
                      Explore analytics features
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="client-section" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center justify-center rounded-full bg-slate-100 p-2 shadow-sm">
                <UserCircle className="h-6 w-6 text-slate-800" />
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-900">Client Area</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Provide your clients with a seamless and intuitive experience to manage their accounts and trading
                  activities.
                </p>
              </div>
            </div>

            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-700">
                    Client Portal
                  </div>
                  <h3 className="text-2xl font-bold tracking-tighter md:text-3xl/tight text-gray-900">
                    Seamless Client Experience
                  </h3>
                  <p className="text-gray-600 md:text-lg">
                    Provide your clients with a powerful yet intuitive portal to manage their accounts, access trading
                    platforms, and more.
                  </p>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-slate-100 p-1">
                      <UserCircle className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">Account Management</h4>
                      <p className="text-sm text-gray-600">
                        Allow clients to manage their profiles, update personal information, and access account
                        statements and trading history.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-slate-100 p-1">
                      <CreditCard className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">Deposits & Withdrawals</h4>
                      <p className="text-sm text-gray-600">
                        Streamlined payment processing with multiple payment methods, instant deposits, and automated
                        withdrawal requests.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-slate-100 p-1">
                      <MessageSquare className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">Support & Communication</h4>
                      <p className="text-sm text-gray-600">
                        Integrated messaging system, support ticket creation, and live chat for seamless communication
                        with your support team.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-slate-100 p-1">
                      <Gift className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">Loyalty & Rewards</h4>
                      <p className="text-sm text-gray-600">
                        Engage clients with a points-based loyalty system, trading challenges, and personalized rewards
                        based on activity.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button variant="outline" className="group" asChild>
                    <Link href="#" className="inline-flex items-center">
                      Explore client features
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -top-6 -left-6 w-64 h-64 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                  <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-slate-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                  <div className="relative bg-white rounded-2xl shadow-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-sm text-gray-500">Client Portal</div>
                    </div>
                    <div className="space-y-4">
                      <div className="h-12 bg-slate-50 rounded-lg flex items-center px-4">
                        <UserCircle className="h-5 w-5 text-slate-700 mr-2" />
                        <span className="text-slate-700 font-medium">Welcome, John</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-24 bg-slate-50 rounded-lg p-4 flex flex-col justify-between">
                          <CreditCard className="h-5 w-5 text-slate-700" />
                          <div>
                            <div className="text-xs text-slate-500">Balance</div>
                            <div className="font-medium">$10,250.00</div>
                          </div>
                        </div>
                        <div className="h-24 bg-slate-50 rounded-lg p-4 flex flex-col justify-between">
                          <Gift className="h-5 w-5 text-slate-700" />
                          <div>
                            <div className="text-xs text-slate-500">Loyalty Points</div>
                            <div className="font-medium">1,250 pts</div>
                          </div>
                        </div>
                      </div>
                      <div className="h-12 bg-slate-50 rounded-lg flex items-center px-4">
                        <MessageSquare className="h-5 w-5 text-slate-700 mr-2" />
                        <span className="text-slate-700 font-medium">Support Messages (2)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="broker-section" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center justify-center rounded-full bg-slate-100 p-2 shadow-sm">
                <Briefcase className="h-6 w-6 text-slate-800" />
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-900">Broker Area</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Empower your introducing brokers with powerful tools to grow their business and manage their clients
                  effectively.
                </p>
              </div>
            </div>

            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-700">
                    IB Management
                  </div>
                  <h3 className="text-2xl font-bold tracking-tighter md:text-3xl/tight text-gray-900">
                    Comprehensive Introducing Broker System
                  </h3>
                  <p className="text-gray-600 md:text-lg">
                    Empower your introducing brokers with powerful tools to grow their business and manage their clients
                    effectively.
                  </p>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-slate-100 p-1">
                      <Briefcase className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">IB Portal & Dashboard</h4>
                      <p className="text-sm text-gray-600">
                        Dedicated portal for IBs to track their clients, monitor commissions, and access marketing
                        materials in real-time.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-slate-100 p-1">
                      <Users className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">Multi-level Commission Structure</h4>
                      <p className="text-sm text-gray-600">
                        Create and manage complex multi-level commission structures with flexible payment options and
                        automated calculations.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-slate-100 p-1">
                      <BarChart3 className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">Performance Analytics</h4>
                      <p className="text-sm text-gray-600">
                        Comprehensive analytics dashboard for IBs to track client acquisition, trading volume,
                        commission earnings, and conversion rates.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-slate-100 p-1">
                      <FileText className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">Marketing & Promotional Tools</h4>
                      <p className="text-sm text-gray-600">
                        Provide IBs with customizable landing pages, banners, promotional materials, and tracking links
                        to boost their marketing efforts.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button variant="outline" className="group" asChild>
                    <Link href="#" className="inline-flex items-center">
                      Explore IB features
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -top-6 -left-6 w-64 h-64 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                  <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-slate-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                  <div className="relative bg-white rounded-2xl shadow-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-sm text-gray-500">IB Portal</div>
                    </div>
                    <div className="space-y-4">
                      <div className="h-12 bg-slate-50 rounded-lg flex items-center px-4">
                        <Briefcase className="h-5 w-5 text-slate-700 mr-2" />
                        <span className="text-slate-700 font-medium">IB Dashboard</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-24 bg-slate-50 rounded-lg p-4 flex flex-col justify-between">
                          <Users className="h-5 w-5 text-slate-700" />
                          <div>
                            <div className="text-xs text-slate-500">Active Clients</div>
                            <div className="font-medium">42</div>
                          </div>
                        </div>
                        <div className="h-24 bg-slate-50 rounded-lg p-4 flex flex-col justify-between">
                          <CreditCard className="h-5 w-5 text-slate-700" />
                          <div>
                            <div className="text-xs text-slate-500">Commission</div>
                            <div className="font-medium">$3,850.75</div>
                          </div>
                        </div>
                      </div>
                      <div className="h-12 bg-slate-50 rounded-lg flex items-center px-4">
                        <BarChart3 className="h-5 w-5 text-slate-700 mr-2" />
                        <span className="text-slate-700 font-medium">Performance Metrics</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="loyalty-program" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-700">
                    Loyalty Program
                  </div>
                  <h3 className="text-2xl font-bold tracking-tighter md:text-3xl/tight text-gray-900">
                    Client Retention & Referrals
                  </h3>
                  <p className="text-gray-600 md:text-lg">
                    Build client loyalty and drive growth with customizable referral and rewards programs.
                  </p>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-slate-100 p-1">
                      <Check className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">Customizable Reward Structure</h4>
                      <p className="text-sm text-gray-600">
                        Create tiered loyalty programs with custom rewards based on trading volume, deposit size, or
                        account longevity.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-slate-100 p-1">
                      <Check className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">Referral Tracking & Attribution</h4>
                      <p className="text-sm text-gray-600">
                        Track referrals with precision using unique links, promo codes, and multi-level attribution
                        models.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-slate-100 p-1">
                      <Check className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">Gamification Elements</h4>
                      <p className="text-sm text-gray-600">
                        Increase engagement with badges, achievements, leaderboards, and challenges that reward client
                        activity.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-slate-100 p-1">
                      <Check className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">Automated Reward Distribution</h4>
                      <p className="text-sm text-gray-600">
                        Automatically credit bonuses, rebates, and rewards based on predefined rules and milestones.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button variant="outline" className="group" asChild>
                    <Link href="#" className="inline-flex items-center">
                      Learn more about loyalty programs
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -top-6 -left-6 w-64 h-64 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                  <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-slate-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                  <div className="relative bg-white rounded-2xl shadow-xl p-6 flex items-center justify-center">
                    <Gift className="h-24 w-24 text-slate-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="payment-gateways"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -top-6 -left-6 w-64 h-64 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                  <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-slate-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                  <div className="relative bg-white rounded-2xl shadow-xl p-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-16 bg-slate-50 rounded-lg flex items-center justify-center">
                        <CreditCard className="h-8 w-8 text-slate-700" />
                      </div>
                      <div className="h-16 bg-slate-50 rounded-lg"></div>
                      <div className="h-16 bg-slate-50 rounded-lg"></div>
                      <div className="h-16 bg-slate-50 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-700">Payments</div>
                  <h3 className="text-2xl font-bold tracking-tighter md:text-3xl/tight text-gray-900">
                    Payment Gateway Integration
                  </h3>
                  <p className="text-gray-600 md:text-lg">
                    Support for multiple payment methods to facilitate seamless deposits and withdrawals for your
                    clients globally.
                  </p>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-slate-100 p-1">
                      <Check className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">Multiple Payment Methods</h4>
                      <p className="text-sm text-gray-600">
                        Support for credit cards, debit cards, bank transfers, e-wallets, and cryptocurrencies to
                        accommodate client preferences.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-slate-100 p-1">
                      <Check className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">Global Payment Processing</h4>
                      <p className="text-sm text-gray-600">
                        Process payments in over 100 currencies with automatic conversion and competitive exchange
                        rates.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-slate-100 p-1">
                      <Check className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">Secure Transactions</h4>
                      <p className="text-sm text-gray-600">
                        PCI DSS compliant payment processing with advanced fraud detection and prevention mechanisms.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-slate-100 p-1">
                      <Check className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">Automated Reconciliation</h4>
                      <p className="text-sm text-gray-600">
                        Automatic matching of payments with client accounts and real-time balance updates.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button variant="outline" className="group" asChild>
                    <Link href="#" className="inline-flex items-center">
                      Explore payment options
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="ui-ux"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-white/20 backdrop-blur-sm px-3 py-1 text-sm text-white">
                  Modern Design
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Best UI/UX for Your Trading Empire
                </h2>
                <p className="max-w-[900px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Intuitive interfaces that transform complex trading operations into seamless experiences.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="rounded-full bg-white/20 w-12 h-12 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Intuitive Navigation</h3>
                <p className="text-white/80">
                  Thoughtfully designed interfaces that make complex operations simple and accessible for all users.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="rounded-full bg-white/20 w-12 h-12 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Responsive Design</h3>
                <p className="text-white/80">
                  Seamless experience across all devices - desktop, tablet, and mobile, with adaptive layouts.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="rounded-full bg-white/20 w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Customizable Dashboards</h3>
                <p className="text-white/80">
                  Personalized workspaces that adapt to individual user needs and preferences with drag-and-drop
                  widgets.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 z-0"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-10 z-0 bg-cover bg-center"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-500/30 to-transparent z-0"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-500/30 to-transparent z-0"></div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="inline-flex items-center justify-center p-2 bg-white/10 backdrop-blur-sm rounded-full">
                    <div className="p-2 bg-white/20 rounded-full">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">
                      Transform Your Forex Brokerage Today
                    </h2>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto">
                      Join hundreds of successful brokers who have elevated their operations with our comprehensive
                      platform.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
                    <Button
                      size="lg"
                      className="bg-white text-slate-900 hover:bg-white/90 shadow-lg shadow-white/10 transition-all duration-200 font-medium"
                      asChild
                    >
                      <Link href="/pricing" className="flex items-center gap-2">
                        <span>View Pricing Plans</span>
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white/20 bg-white/5 text-white hover:bg-white/10 transition-all duration-200 font-medium"
                      asChild
                    >
                      <Link href="/contact" className="flex items-center gap-2">
                        <span>Schedule a Demo</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/10 text-sm text-white/60">
                    <div className="flex items-center gap-1">
                      <Check className="h-4 w-4 text-emerald-400" />
                      <span>No credit card required</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Check className="h-4 w-4 text-emerald-400" />
                      <span>14-day free trial</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Check className="h-4 w-4 text-emerald-400" />
                      <span>Cancel anytime</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-white">
        <div className="container py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-gray-600 md:text-left">
              © {new Date().getFullYear()} ForexFlow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
