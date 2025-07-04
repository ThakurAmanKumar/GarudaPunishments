"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Language } from "@/lib/translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Load saved language from localStorage after component mounts
    try {
      const saved = localStorage.getItem("language") as Language
      if (saved && ["en", "hi", "ne", "sa"].includes(saved)) {
        setLanguageState(saved)
      }
    } catch (error) {
      console.warn("Could not load language from localStorage:", error)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (mounted) {
      try {
        localStorage.setItem("language", lang)
      } catch (error) {
        console.warn("Could not save language to localStorage:", error)
      }
    }
  }

  const value = {
    language,
    setLanguage,
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  return context
}
