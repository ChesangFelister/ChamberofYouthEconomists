"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, BookOpen, Users, Target, Eye, ArrowRight, CheckCircle } from 'lucide-react'
import Image from "next/image"

import { Button } from "@/components/ui/button"

type LearnMoreModalProps = {
  isOpen: boolean
  onClose: () => void
}

export function LearnMoreModal({ isOpen, onClose }: LearnMoreModalProps) {
  // Close modal when Escape key is pressed
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      // Restore scrolling when modal is closed
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  // Trap focus inside modal for accessibility
  const modalRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!isOpen) return

    const focusableElements = modalRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    )

    if (focusableElements && focusableElements.length > 0) {
      const firstElement = focusableElements[0] as HTMLElement
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === "Tab") {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus()
              e.preventDefault()
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus()
              e.preventDefault()
            }
          }
        }
      }

      document.addEventListener("keydown", handleTabKey)
      firstElement.focus()

      return () => {
        document.removeEventListener("keydown", handleTabKey)
      }
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal Container - Centered */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 300,
                duration: 0.4
              }}
              className="w-full max-w-5xl max-h-[90vh] rounded-xl bg-white shadow-2xl dark:bg-gray-800 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-6">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="absolute top-4 right-4 h-8 w-8 text-white hover:bg-white/20"
                  aria-label="Close"
                  type="button"
                >
                  <X className="h-4 w-4" />
                </Button>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <Image
                      src="/logo-simple.png"
                      alt="Chamber of Youth Economists Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Chamber of Youth Economists</h2>
                    <p className="text-emerald-100">Empowering Young Economic Leaders</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
                <div className="p-6 space-y-8">
                  {/* Mission Statement */}
                  <section>
                    <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-400 mb-4">Our Mission</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      The Chamber provides a focused forum for young economists to channel their knowledge into the
                      conception and application of practical ideas for society's economic development. Founded in 2024
                      and headquartered in Nairobi, Kenya, we are a nonprofit organization specializing in Youth
                      Development and Economic Development with the motto "Progressus Congressus."
                    </p>
                  </section>

                  {/* Core Values */}
                  <section>
                    <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-400 mb-4">Our Core Values</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <BookOpen className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                          <h4 className="font-semibold text-emerald-700 dark:text-emerald-300">Philosophy</h4>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Youth are a resource unto themselves. Human development facilitates economic development.
                        </p>
                      </div>
                      <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <Target className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                          <h4 className="font-semibold text-emerald-700 dark:text-emerald-300">Mission</h4>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Provide a focused forum for practical economic solutions and policy development.
                        </p>
                      </div>
                      <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <Eye className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                          <h4 className="font-semibold text-emerald-700 dark:text-emerald-300">Vision</h4>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Become a critical contributor to solving economic problems through youth intellect.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* What We Offer */}
                  <section>
                    <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-400 mb-4">What We Offer</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200">Policy Research</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            Participate in economic research, draft memoranda, and propose policy solutions
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200">Mentorship Programs</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            Access to experienced economists and industry experts for career guidance
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200">Leadership Development</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            Develop leadership skills through Chamber activities and committees
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200">Networking Opportunities</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            Connect with peers, mentors, and industry professionals globally
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200">Educational Resources</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            Access workshops, seminars, and exclusive educational content
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200">Events & Conferences</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            Participate in conferences, debates, and competitive events
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Impact Statistics */}
                  <section>
                    <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-400 mb-4">Our Impact</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                        <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">164+</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">LinkedIn Followers</div>
                      </div>
                      <div className="text-center bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                        <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">11-50</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Team Members</div>
                      </div>
                      <div className="text-center bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                        <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">2024</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Year Founded</div>
                      </div>
                      <div className="text-center bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                        <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">Nairobi</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Headquarters</div>
                      </div>
                    </div>
                  </section>

                  {/* Membership Types */}
                  <section>
                    <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-400 mb-4">Membership Types</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border border-emerald-200 dark:border-emerald-700 rounded-lg p-4">
                        <h4 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-2">Economists</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          For professionals with economics training who want to participate in policymaking processes
                        </p>
                      </div>
                      <div className="border border-emerald-200 dark:border-emerald-700 rounded-lg p-4">
                        <h4 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-2">Policy Experts</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          For those with specialized knowledge in public policy and research
                        </p>
                      </div>
                      <div className="border border-emerald-200 dark:border-emerald-700 rounded-lg p-4">
                        <h4 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-2">
                          Public Finance Experts
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          For professionals who can provide perspective on public finance
                        </p>
                      </div>
                      <div className="border border-emerald-200 dark:border-emerald-700 rounded-lg p-4">
                        <h4 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-2">Development Experts</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          For those focused on socioeconomic growth and development principles
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* LinkedIn Connection */}
                  <section className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 text-center">
                    <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-2">Connect With Us</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Follow us on LinkedIn to stay updated with our latest activities and connect with our growing
                      community of 164+ followers.
                    </p>
                    <Button
                      onClick={() =>
                        window.open("https://www.linkedin.com/company/chamber-of-youth-economists/", "_blank")
                      }
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                      type="button"
                    >
                      <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      Follow on LinkedIn
                    </Button>
                  </section>

                  {/* Call to Action */}
                  <section className="bg-gradient-to-r from-emerald-50 to-amber-50 dark:from-emerald-900/20 dark:to-amber-900/20 rounded-lg p-6 text-center">
                    <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-300 mb-2">Ready to Join Us?</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Become a member today and start making a difference in the field of economics
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button onClick={onClose} className="bg-emerald-600 hover:bg-emerald-700 text-white" type="button">
                        <Users className="h-4 w-4 mr-2" />
                        Join Our Community
                      </Button>
                      <Button
                        variant="outline"
                        onClick={onClose}
                        className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                        type="button"
                      >
                        Learn More About Us
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </section>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
