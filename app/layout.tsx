import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google"; // Import new fonts
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

// Initialize font loaders
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display", // Assign CSS variable
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"], // Load necessary weights
  variable: "--font-lato", // Assign CSS variable
});

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Apply font variables to the body */}
      <body className={`${playfair.variable} ${lato.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
