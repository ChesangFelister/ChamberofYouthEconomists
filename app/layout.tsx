import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "./nprogress.css"

import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { PageTransition } from "@/components/page-transition"
import { TransitionProvider } from "@/components/transition-provider"
import { NavigationEvents } from "@/components/navigation-events"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Chamber of Youth Economists",
  description: "Empowering young minds in the field of economics",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <TransitionProvider>
            <div className="flex flex-col min-h-screen">
              <MainNav />
              <PageTransition>{children}</PageTransition>
              <Footer />
            </div>
            <NavigationEvents />
          </TransitionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
