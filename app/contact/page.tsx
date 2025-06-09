import Link from "next/link"
import { Mail, Phone, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionDivider } from "@/components/section-divider"

export default function ContactPage() {
  return (
    <main className="flex-1 bg-gray-50 dark:bg-gray-900">
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="mx-auto px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-green-700 dark:text-green-400 mb-3">
              Get in Touch
            </h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-[700px] mx-auto">
              We're here to answer your questions and help you connect with the Chamber of Youth Economists.
            </p>
            <SectionDivider variant="gradient" className="mt-6" />
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Contact Information Card */}
            <Card className="lg:col-span-1 border-green-100 shadow-sm hover:shadow-md transition-shadow dark:border-green-800">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-green-700 dark:text-green-400">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 dark:bg-green-800/30 p-2 rounded-full">
                    <Mail className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-gray-700 dark:text-gray-300">Email</h3>
                    <a
                      href="mailto:economistschamber@gmail.com"
                      className="text-green-600 dark:text-green-400 hover:underline"
                    >
                      economistschamber@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 dark:bg-green-800/30 p-2 rounded-full">
                    <Phone className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-gray-700 dark:text-gray-300">Phone</h3>
                    <a href="tel:+254799069179" className="text-green-600 dark:text-green-400 hover:underline">
                      +254 799 069 179
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 dark:bg-green-800/30 p-2 rounded-full">
                    <svg className="h-5 w-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-gray-700 dark:text-gray-300">LinkedIn</h3>
                    <a
                      href="https://www.linkedin.com/company/chamber-of-youth-economists/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 dark:text-green-400 hover:underline"
                    >
                      Chamber of Youth Economists
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 dark:bg-green-800/30 p-2 rounded-full">
                    <svg
                      className="h-5 w-5 text-green-600 dark:text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-gray-700 dark:text-gray-300">Headquarters</h3>
                    <span className="text-green-600 dark:text-green-400">Nairobi, Kenya</span>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                  <h3 className="font-medium mb-3 text-gray-700 dark:text-gray-300">Connect With Us</h3>
                  <div className="flex gap-4">
                    <Link
                      href="#"
                      className="bg-green-100 hover:bg-green-200 dark:bg-green-800/30 dark:hover:bg-green-800/50 p-2 rounded-full transition-colors"
                      aria-label="Facebook"
                    >
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
                        className="text-green-600 dark:text-green-400"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </Link>
                    <Link
                      href="#"
                      className="bg-green-100 hover:bg-green-200 dark:bg-green-800/30 dark:hover:bg-green-800/50 p-2 rounded-full transition-colors"
                      aria-label="Twitter"
                    >
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
                        className="text-green-600 dark:text-green-400"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                    </Link>
                    <Link
                      href="#"
                      className="bg-green-100 hover:bg-green-200 dark:bg-green-800/30 dark:hover:bg-green-800/50 p-2 rounded-full transition-colors"
                      aria-label="LinkedIn"
                    >
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
                        className="text-green-600 dark:text-green-400"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </Link>
                    <Link
                      href="#"
                      className="bg-green-100 hover:bg-green-200 dark:bg-green-800/30 dark:hover:bg-green-800/50 p-2 rounded-full transition-colors"
                      aria-label="Instagram"
                    >
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
                        className="text-green-600 dark:text-green-400"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form Card */}
            <Card className="lg:col-span-2 border-green-100 shadow-sm hover:shadow-md transition-shadow dark:border-green-800">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-green-700 dark:text-green-400">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        First name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="first-name"
                        placeholder="Enter your first name"
                        required
                        className="border-gray-200 focus-visible:ring-green-500 dark:border-gray-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Last name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="last-name"
                        placeholder="Enter your last name"
                        required
                        className="border-gray-200 focus-visible:ring-green-500 dark:border-gray-700"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      placeholder="Enter your email"
                      type="email"
                      required
                      className="border-gray-200 focus-visible:ring-green-500 dark:border-gray-700"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="subject"
                      placeholder="Enter the subject"
                      required
                      className="border-gray-200 focus-visible:ring-green-500 dark:border-gray-700"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      className="min-h-[150px] border-gray-200 focus-visible:ring-green-500 dark:border-gray-700"
                      id="message"
                      placeholder="Enter your message"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 text-lg shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
