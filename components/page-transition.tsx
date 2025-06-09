"use client"

import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { type ReactNode, useEffect, useState } from "react"
import { useReducedMotion } from "framer-motion"

interface PageTransitionProps {
  children: ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const [isFirstMount, setIsFirstMount] = useState(true)
  const prefersReducedMotion = useReducedMotion()

  // Skip the animation on the first mount
  useEffect(() => {
    setIsFirstMount(false)
  }, [])

  // Different animation variants based on the path
  const getVariants = () => {
    // Use simpler animations for users who prefer reduced motion
    if (prefersReducedMotion) {
      return {
        hidden: { opacity: 0 },
        enter: { opacity: 1 },
        exit: { opacity: 0 },
      }
    }

    // Home page has a different animation
    if (pathname === "/") {
      return {
        hidden: { opacity: 0 },
        enter: { opacity: 1 },
        exit: { opacity: 0, transition: { duration: 0.2 } },
      }
    }

    // About and Organization pages slide from right
    if (pathname.includes("/about") || pathname.includes("/organization")) {
      return {
        hidden: { opacity: 0, x: 20 },
        enter: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 },
      }
    }

    // Events and Resources pages slide from bottom
    if (pathname.includes("/events") || pathname.includes("/resources")) {
      return {
        hidden: { opacity: 0, y: 20 },
        enter: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
      }
    }

    // Default animation for other pages
    return {
      hidden: { opacity: 0, y: 10 },
      enter: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -10 },
    }
  }

  const variants = getVariants()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={isFirstMount ? "enter" : "hidden"}
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{
          duration: prefersReducedMotion ? 0.2 : 0.35,
          ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for smooth acceleration/deceleration
        }}
        layout="position"
        className="flex-1"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
