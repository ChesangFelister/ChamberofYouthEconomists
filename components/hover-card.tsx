"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { useReducedMotion } from "framer-motion"

interface HoverCardProps {
  children: ReactNode
  className?: string
  variant?: "lift" | "glow" | "border" | "scale" | "highlight"
  color?: string
}

export function HoverCard({
  children,
  className = "",
  variant = "lift",
  color = "rgba(0, 128, 0, 0.2)", // Default green color with low opacity
}: HoverCardProps) {
  const prefersReducedMotion = useReducedMotion()

  // If user prefers reduced motion, don't animate
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  // Different animation variants
  const animations = {
    lift: {
      whileHover: {
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
      },
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    glow: {
      whileHover: {
        boxShadow: `0 0 20px ${color}`,
      },
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    border: {
      whileHover: {
        boxShadow: `inset 0 0 0 2px ${color}`,
      },
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    scale: {
      whileHover: {
        scale: 1.03,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
      },
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    highlight: {
      whileHover: {
        backgroundColor: color,
      },
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div className={className} {...animations[variant]}>
      {children}
    </motion.div>
  )
}
