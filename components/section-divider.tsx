import { cn } from "@/lib/utils"

interface SectionDividerProps {
  variant?: "gradient" | "wave" | "angled" | "shadow" | "line"
  className?: string
}

export function SectionDivider({ variant = "gradient", className }: SectionDividerProps) {
  if (variant === "gradient") {
    return (
      <div className={cn("w-full py-8 flex justify-center", className)}>
        <div className="h-0.5 w-24 md:w-32 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
      </div>
    )
  }

  if (variant === "wave") {
    return (
      <div className={cn("w-full h-16 relative overflow-hidden", className)}>
        <svg
          className="absolute w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-current text-background"
          ></path>
        </svg>
      </div>
    )
  }

  if (variant === "angled") {
    return (
      <div className={cn("w-full h-12 relative overflow-hidden", className)}>
        <div className="absolute left-0 right-0 h-24 bg-background transform -skew-y-2 -top-12"></div>
      </div>
    )
  }

  if (variant === "shadow") {
    return (
      <div className={cn("w-full py-4", className)}>
        <div className="h-px bg-gray-200 dark:bg-gray-700 shadow-md"></div>
      </div>
    )
  }

  // Default line divider
  return (
    <div className={cn("w-full py-8 flex justify-center", className)}>
      <div className="h-px w-16 md:w-24 bg-gray-300 dark:bg-gray-600"></div>
    </div>
  )
}
