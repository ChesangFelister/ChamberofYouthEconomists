"use client"

import { type ReactNode, createContext, useContext, useState } from "react"
import { usePathname } from "next/navigation"

interface TransitionContextType {
  isTransitioning: boolean
  previousPath: string | null
  currentPath: string
}

const TransitionContext = createContext<TransitionContextType>({
  isTransitioning: false,
  previousPath: null,
  currentPath: "/",
})

export const useTransition = () => useContext(TransitionContext)

interface TransitionProviderProps {
  children: ReactNode
}

export function TransitionProvider({ children }: TransitionProviderProps) {
  const pathname = usePathname()
  const [previousPath, setPreviousPath] = useState<string | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Update previous path when pathname changes
  if (pathname !== previousPath && previousPath !== null) {
    setIsTransitioning(true)
    setTimeout(() => {
      setIsTransitioning(false)
    }, 300) // Match this with the transition duration
    setPreviousPath(pathname)
  } else if (previousPath === null) {
    setPreviousPath(pathname)
  }

  return (
    <TransitionContext.Provider
      value={{
        isTransitioning,
        previousPath,
        currentPath: pathname,
      }}
    >
      {children}
    </TransitionContext.Provider>
  )
}
