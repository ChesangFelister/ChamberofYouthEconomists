import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-emerald-900 text-white relative mt-10" style={{ backgroundColor: "#064e3b" }}>
      <div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500 opacity-60"
        aria-hidden="true"
      ></div>
      <div className="px-4 md:px-6 xl:px-8 py-8 md:py-10 xl:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 xl:gap-12">
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-3 md:mb-4 xl:mb-6">
              <div className="relative w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-12 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Chamber of Youth Economists Logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 40px, 48px"
                />
              </div>
              <span className="text-base md:text-lg xl:text-xl font-bold leading-tight">
                Chamber of Youth Economists
              </span>
            </div>
            <p className="text-white/80 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Empowering young minds in the field of economics since 2024. Our motto: "Progressus Congressus" - Progress
              through Unity.
            </p>
            <div className="flex space-x-2 md:space-x-3 xl:space-x-4">
              <Link
                href="#"
                className="text-white/70 hover:text-amber-400 transition-colors p-2 rounded-md hover:bg-white/10"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-white/70 hover:text-amber-400 transition-colors p-2 rounded-md hover:bg-white/10"
              >
                <Twitter className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/chamber-of-youth-economists/"
                className="text-white/70 hover:text-amber-400 transition-colors p-2 rounded-md hover:bg-white/10"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="text-white/70 hover:text-amber-400 transition-colors p-2 rounded-md hover:bg-white/10"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3
              className="font-bold mb-3 md:mb-4 xl:mb-6 text-sm md:text-base xl:text-lg border-b border-emerald-800 pb-2 text-emerald-300"
              id="footer-organization"
              style={{ color: "#6ee7b7" }}
            >
              Our Organization
            </h3>
            <nav aria-labelledby="footer-organization" role="navigation">
              <ul className="space-y-1.5 md:space-y-2 xl:space-y-3" role="list">
                {[
                  "Policy Research",
                  "Leadership Training",
                  "Mentorship Programs",
                  "Economic Forums",
                  "Career Guidance",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-white/70 hover:text-amber-400 focus:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-emerald-900 transition-colors flex items-center py-1 px-2 rounded-md text-xs md:text-sm xl:text-base hover:bg-white/5"
                    >
                      <span
                        className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2 flex-shrink-0"
                        aria-hidden="true"
                        style={{ backgroundColor: "#fbbf24" }}
                      ></span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3
              className="font-bold mb-3 md:mb-4 xl:mb-6 text-sm md:text-base xl:text-lg border-b border-emerald-800 pb-2 text-emerald-300"
              id="footer-navigation"
              style={{ color: "#6ee7b7" }}
            >
              Quick Links
            </h3>
            <nav aria-labelledby="footer-navigation" role="navigation">
              <ul className="space-y-1.5 md:space-y-2 xl:space-y-3" role="list">
                {[
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/about" },
                  { label: "Events & Programs", href: "/events" },
                  { label: "Resources", href: "/resources" },
                  { label: "Contact Us", href: "/contact" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-white/70 hover:text-amber-400 focus:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-emerald-900 transition-colors flex items-center py-1 px-2 rounded-md text-xs md:text-sm xl:text-base hover:bg-white/5"
                    >
                      <span
                        className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2 flex-shrink-0"
                        aria-hidden="true"
                        style={{ backgroundColor: "#fbbf24" }}
                      ></span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-3 md:py-4 xl:py-6" role="contentinfo">
        <div className="px-4 md:px-6 xl:px-8 text-center text-xs md:text-sm text-white">
          <p>© 2025 Chamber of Youth Economists. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
