"use client"

import * as React from "react"
import NextLink from "next/link"
import { usePathname } from "next/navigation"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const linkVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300",
        nav: "text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400",
        button: "bg-green-600 text-white hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700",
        outline:
          "border border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900/20 dark:hover:text-green-300",
        ghost: "hover:bg-green-50 hover:text-green-700 dark:hover:bg-green-900/20 dark:hover:text-green-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof linkVariants> {
  href: string
  activeClassName?: string
  animate?: boolean
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, size, href, activeClassName, animate = true, ...props }, ref) => {
    const pathname = usePathname()
    const isActive = pathname === href

    if (!animate) {
      return (
        <NextLink
          href={href}
          className={cn(linkVariants({ variant, size }), isActive && activeClassName, className)}
          ref={ref}
          {...props}
        />
      )
    }

    return (
      <motion.div
        whileHover={{
          scale: variant === "nav" ? 1.05 : 1.02,
          y: variant === "nav" ? -1 : 0,
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        layout="position"
      >
        <NextLink
          href={href}
          className={cn(linkVariants({ variant, size }), isActive && activeClassName, className)}
          ref={ref}
          {...props}
        />
      </motion.div>
    )
  },
)
Link.displayName = "Link"

export { Link, linkVariants }
