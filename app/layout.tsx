import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fivitech | All-in-One Forex CRM Solution",
  description: "A comprehensive platform with integrated client area, backoffice management, and IB portal designed specifically for forex brokers.",
  keywords: ["forex", "CRM", "broker", "trading", "backoffice", "IB portal", "client management"],
  authors: [{ name: "Fivitech" }],
  creator: "Fivitech",
  publisher: "Fivitech",
  metadataBase: new URL("https://fxcrm.fivitechnologies.com"),
  openGraph: {
    title: "Fivitech | All-in-One Forex CRM Solution",
    description: "Launch and scale a forex brokerage with CRM, client portal, IB management, KYC, payments, and MT5 integrations.",
    url: "/",
    siteName: "Fivitech FXCRM",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fivitech | All-in-One Forex CRM Solution",
    description: "Launch and scale a forex brokerage with CRM, client portal, IB management, KYC, payments, and MT5 integrations.",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        {/* apple-touch-icon + og:image are generated at build time via app/apple-icon.tsx + app/opengraph-image.tsx */}
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        sora.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
