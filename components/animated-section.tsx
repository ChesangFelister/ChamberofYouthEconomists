"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { useReducedMotion } from "framer-motion"

interface AnimatedSectionProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  className?: string
  once?: boolean
}

export function AnimatedSection({
  children,
  delay = 0,
  direction = "up",
  className = "",
  once = true,
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: "-100px 0px" })
  const prefersReducedMotion = useReducedMotion()

  // If user prefers reduced motion, don't animate
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  // Set initial and animate values based on direction
  let initial = { opacity: 0 }
  if (direction === "up") initial = { ...initial, y: 30 }
  if (direction === "down") initial = { ...initial, y: -30 }
  if (direction === "left") initial = { ...initial, x: 30 }
  if (direction === "right") initial = { ...initial, x: -30 }

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={
        isInView
          ? { opacity: 1, y: 0, x: 0 }
          : {
              opacity: 0,
              y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
              x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
            }
      }
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
