"use client"

import { motion } from "framer-motion"
import { useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedIconProps {
  children: ReactNode
  className?: string
  variant?: "rotate" | "pulse" | "bounce" | "shake" | "scale"
}

export function AnimatedIcon({ children, className = "", variant = "rotate" }: AnimatedIconProps) {
  const prefersReducedMotion = useReducedMotion()

  // If user prefers reduced motion, don't animate
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  // Different animation variants
  const animations = {
    rotate: {
      whileHover: { rotate: 10, scale: 1.1 },
      transition: { duration: 0.2 },
    },
    pulse: {
      whileHover: {
        scale: [1, 1.05, 1],
        transition: {
          duration: 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        },
      },
    },
    bounce: {
      whileHover: {
        y: [0, -5, 0],
        transition: {
          duration: 0.6,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        },
      },
    },
    shake: {
      whileHover: {
        x: [0, -2, 2, -2, 0],
        transition: {
          duration: 0.4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        },
      },
    },
    scale: {
      whileHover: { scale: 1.2 },
      transition: { duration: 0.2 },
    },
  }

  return (
    <motion.div className={className} {...animations[variant]}>
      {children}
    </motion.div>
  )
}
