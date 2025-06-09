import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-emerald-900 text-white relative mt-10">
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent-gradient opacity-60" aria-hidden="true"></div>
      <div className="px-4 md:px-6 xl:px-8 py-8 md:py-10 xl:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 xl:gap-12">
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-3 md:mb-4 xl:mb-6">
              <div className="relative w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-12 flex-shrink-0">
                <Image
                  src="/logo-simple.png"
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
              <Link href="#" className="text-white/70 hover:text-amber-400 transition-colors touch-target p-1">
                <Facebook className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-amber-400 transition-colors touch-target p-1">
                <Twitter className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/chamber-of-youth-economists/"
                className="text-white/70 hover:text-amber-400 transition-colors touch-target p-1"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-amber-400 transition-colors touch-target p-1">
                <Instagram className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3
              className="font-bold mb-3 md:mb-4 xl:mb-6 text-sm md:text-base xl:text-lg border-b border-emerald-800 pb-2 text-emerald-400"
              id="footer-organization"
            >
              Our Organization
            </h3>
            <nav aria-labelledby="footer-organization" role="navigation">
              <ul className="space-y-1.5 md:space-y-2 xl:space-y-3" role="list">
                <li>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-amber-400 focus:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-emerald-900 transition-colors flex items-center touch-target py-1 px-2 rounded-md text-xs md:text-sm xl:text-base"
                  >
                    <span
                      className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2 flex-shrink-0"
                      aria-hidden="true"
                    ></span>
                    Policy Research
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-amber-400 focus:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-emerald-900 transition-colors flex items-center touch-target py-1 px-2 rounded-md text-xs md:text-sm xl:text-base"
                  >
                    <span
                      className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2 flex-shrink-0"
                      aria-hidden="true"
                    ></span>
                    Leadership Training
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-amber-400 focus:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-emerald-900 transition-colors flex items-center touch-target py-1 px-2 rounded-md text-xs md:text-sm xl:text-base"
                  >
                    <span
                      className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2 flex-shrink-0"
                      aria-hidden="true"
                    ></span>
                    Mentorship Programs
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-amber-400 focus:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-emerald-900 transition-colors flex items-center touch-target py-1 px-2 rounded-md text-xs md:text-sm xl:text-base"
                  >
                    <span
                      className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2 flex-shrink-0"
                      aria-hidden="true"
                    ></span>
                    Economic Forums
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-amber-400 focus:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-emerald-900 transition-colors flex items-center touch-target py-1 px-2 rounded-md text-xs md:text-sm xl:text-base"
                  >
                    <span
                      className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2 flex-shrink-0"
                      aria-hidden="true"
                    ></span>
                    Career Guidance
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h3
              className="font-bold mb-3 md:mb-4 xl:mb-6 text-sm md:text-base xl:text-lg border-b border-emerald-800 pb-2"
              id="footer-navigation"
            >
              Quick Links
            </h3>
            <nav aria-labelledby="footer-navigation" role="navigation">
              <ul className="space-y-1.5 md:space-y-2 xl:space-y-3" role="list">
                <li>
                  <Link
                    href="/"
                    className="text-white/70 hover:text-amber-400 focus:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-emerald-900 transition-colors flex items-center touch-target py-1 px-2 rounded-md text-xs md:text-sm xl:text-base"
                  >
                    <span
                      className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2 flex-shrink-0"
                      aria-hidden="true"
                    ></span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-white/70 hover:text-amber-400 focus:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-emerald-900 transition-colors flex items-center touch-target py-1 px-2 rounded-md text-xs md:text-sm xl:text-base"
                  >
                    <span
                      className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2 flex-shrink-0"
                      aria-hidden="true"
                    ></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className="text-white/70 hover:text-amber-400 focus:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-emerald-900 transition-colors flex items-center touch-target py-1 px-2 rounded-md text-xs md:text-sm xl:text-base"
                  >
                    <span
                      className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2 flex-shrink-0"
                      aria-hidden="true"
                    ></span>
                    Events & Programs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources"
                    className="text-white/70 hover:text-amber-400 focus:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-emerald-900 transition-colors flex items-center touch-target py-1 px-2 rounded-md text-xs md:text-sm xl:text-base"
                  >
                    <span
                      className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2 flex-shrink-0"
                      aria-hidden="true"
                    ></span>
                    Resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white/70 hover:text-amber-400 focus:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-emerald-900 transition-colors flex items-center touch-target py-1 px-2 rounded-md text-xs md:text-sm xl:text-base"
                  >
                    <span
                      className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2 flex-shrink-0"
                      aria-hidden="true"
                    ></span>
                    Contact Us
                  </Link>
                </li>
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
