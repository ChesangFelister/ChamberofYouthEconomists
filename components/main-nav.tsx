"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "ORGANIZATION", href: "/organization" },
  { name: "EVENTS", href: "/events" },
  { name: "RESOURCES", href: "/resources" },
  { name: "CONTACT", href: "/contact" },
]

export function MainNav() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-white dark:bg-slate-950 overflow-hidden transition-all duration-300",
        scrolled ? "shadow-md py-1" : "shadow-sm py-2",
      )}
    >
      <div className="mx-auto px-4 sm:px-6 md:px-8 max-w-6xl">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center" aria-label="Chamber of Youth Economists Home">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0">
              <Image
                src="/logo-simple.png"
                alt="Chamber of Youth Economists Logo"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 56px, 64px"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                variant="nav"
                className={cn(
                  "text-xs lg:text-sm relative",
                  pathname === item.href ? "text-emerald-600 font-semibold dark:text-emerald-400" : "",
                )}
                activeClassName="text-emerald-600 font-semibold dark:text-emerald-400"
              >
                {item.name}
                {pathname === item.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-600 dark:bg-emerald-400 rounded-full" />
                )}
              </Link>
            ))}
            <Button
              size="sm"
              className="text-xs ml-1 h-8 px-4 lg:text-sm lg:h-9 lg:px-5 btn-primary-enhanced font-semibold"
              asChild
            >
              <Link href="/membership" variant="button">
                JOIN US
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-1">
              <span className="sr-only">Toggle menu</span>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 py-3 bg-emerald-50 dark:bg-emerald-900/50">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block py-2 px-2 rounded-md text-base font-medium transition-colors",
                  pathname === item.href
                    ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-800 dark:text-emerald-100"
                    : "text-slate-700 hover:bg-emerald-100 hover:text-emerald-700 dark:text-slate-200 dark:hover:bg-emerald-800 dark:hover:text-emerald-100",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 px-2">
              <Button className="w-full btn-primary-enhanced" asChild>
                <Link href="/membership" variant="button" onClick={() => setMobileMenuOpen(false)}>
                  JOIN US
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
