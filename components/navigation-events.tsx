"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import NProgress from "nprogress"

export function NavigationEvents() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Configure NProgress
    NProgress.configure({
      showSpinner: false,
      minimum: 0.15,
      easing: "ease-out",
      speed: 350,
      trickleSpeed: 150,
    })

    // Start progress bar when navigation starts
    const handleStart = () => {
      NProgress.start()
    }

    // Complete progress bar when navigation finishes
    const handleComplete = () => {
      NProgress.done()
    }

    // Add event listeners for router events
    window.addEventListener("beforeunload", handleStart)
    window.addEventListener("load", handleComplete)

    // Clean up event listeners
    return () => {
      window.removeEventListener("beforeunload", handleStart)
      window.removeEventListener("load", handleComplete)
    }
  }, [])

  // Trigger progress bar on route change
  useEffect(() => {
    NProgress.done()
  }, [pathname, searchParams])

  return null
}
