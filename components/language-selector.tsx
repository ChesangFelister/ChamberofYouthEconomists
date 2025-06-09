"use client"

import { useState } from "react"
import { Check, ChevronDown, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type Language = {
  code: string
  name: string
  flag: string
}

const languages: Language[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
]

export function LanguageSelector() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0])
  const [open, setOpen] = useState(false)

  const handleSelectLanguage = (language: Language) => {
    setCurrentLanguage(language)
    setOpen(false)
    // In a real implementation, you would also change the site's language here
    console.log(`Language changed to: ${language.name} (${language.code})`)
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-1 h-9 px-2 py-1 hover:bg-green-50 hover:text-green-700 dark:hover:bg-green-900/20 dark:hover:text-green-300"
        >
          <Globe className="h-4 w-4 text-green-600" />
          <span className="text-sm font-medium hidden sm:inline-block">{currentLanguage.code.toUpperCase()}</span>
          <span className="text-sm font-medium sm:hidden">{currentLanguage.flag}</span>
          <ChevronDown className={`h-3 w-3 opacity-50 transition-transform ${open ? "rotate-180" : ""}`} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            className={`flex items-center justify-between cursor-pointer ${
              currentLanguage.code === language.code
                ? "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300"
                : ""
            }`}
            onClick={() => handleSelectLanguage(language)}
          >
            <div className="flex items-center gap-2">
              <span className="text-base">{language.flag}</span>
              <span className="text-sm">{language.name}</span>
            </div>
            {currentLanguage.code === language.code && <Check className="h-4 w-4 text-green-600" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
