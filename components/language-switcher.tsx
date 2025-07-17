"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Globe, ChevronDown } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

const languages = [
  { code: "en", name: "English", nativeName: "English", flag: "🇺🇸" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", flag: "🇮🇳" },
  { code: "ne", name: "Nepali", nativeName: "नेपाली", flag: "🇳🇵" },
  { code: "sa", name: "Sanskrit", nativeName: "संस्कृतम्", flag: "🕉️" },
]

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentLanguage = languages.find((lang) => lang.code === language) || languages[0]

  const handleLanguageSelect = (langCode: string) => {
    setLanguage(langCode as any)
    setIsOpen(false)
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest(".language-switcher")) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("click", handleClickOutside)
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isOpen])

  if (!mounted) {
    return (
      <Button variant="outline" size="sm" className="flex items-center gap-2 border-orange-200 min-w-[140px] bg-white">
        <Globe className="h-4 w-4 text-orange-600" />
        <span className="font-medium text-sm">English</span>
        <ChevronDown className="h-3 w-3 text-orange-600" />
      </Button>
    )
  }

  return (
    <div className="relative language-switcher">
      <Button
        onClick={toggleDropdown}
        variant="outline"
        size="sm"
        className="flex items-center gap-2 border-orange-200 hover:bg-orange-50 hover:border-orange-300 bg-white min-w-[140px]"
      >
        <Globe className="h-4 w-4 text-orange-600" />
        <span className="font-medium text-sm">{currentLanguage.nativeName}</span>
        <ChevronDown className={`h-3 w-3 text-orange-600 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </Button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 w-[220px] bg-white border border-orange-200 rounded-md shadow-lg z-50">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                className={`w-full text-left px-4 py-3 hover:bg-orange-50 focus:bg-orange-50 transition-colors ${
                  language === lang.code ? "bg-orange-100 text-orange-900 font-medium" : "text-gray-700"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{lang.flag}</span>
                  <div className="flex flex-col">
                    <span className="font-medium text-base">{lang.nativeName}</span>
                    <span className="text-xs text-gray-500">{lang.name}</span>
                  </div>
                  {language === lang.code && <span className="ml-auto text-orange-600 font-bold">✓</span>}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
