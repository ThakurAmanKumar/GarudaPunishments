"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { BookOpen, Menu, Home, List, Info, HelpCircle, BookMarked } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/translations"
import { useState, useEffect } from "react"

export function Navigation() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const { language } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navigation = [
    { name: mounted ? getTranslation(language, "home") : "Home", href: "/", icon: Home },
    { name: mounted ? getTranslation(language, "narakas") : "Narakas", href: "/narakas", icon: List },
    { name: mounted ? getTranslation(language, "about") : "About", href: "/about", icon: Info },
    { name: mounted ? getTranslation(language, "faq") : "FAQ", href: "/faq", icon: HelpCircle },
    { name: mounted ? getTranslation(language, "glossary") : "Glossary", href: "/glossary", icon: BookMarked },
  ]

  const title = mounted ? getTranslation(language, "title") : "Garuda Purana"

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-orange-600" />
            <span className="font-bold text-xl text-orange-900">{title}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-orange-600 ${
                    pathname === item.href ? "text-orange-600" : "text-gray-700"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
            <div className="ml-4">
              <LanguageSwitcher />
            </div>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center space-x-2 text-lg font-medium transition-colors hover:text-orange-600 ${
                          pathname === item.href ? "text-orange-600" : "text-gray-700"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                        <span>{item.name}</span>
                      </Link>
                    )
                  })}
                </div>
                <div className="mt-6 pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">
                      {mounted ? getTranslation(language, "selectLanguage") : "Select Language"}:
                    </span>
                  </div>
                  <div className="mt-2">
                    <LanguageSwitcher />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
