"use client"

import Link from "next/link"
import { BookOpen, Heart, Scale, Users } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/translations"

export function Footer() {
  const { language } = useLanguage()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-orange-400" />
              <span className="font-bold text-xl">{getTranslation(language, "title")}</span>
            </div>
            <p className="text-gray-400 text-sm">{getTranslation(language, "educationalWebsiteDescription")}</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">{getTranslation(language, "exploreSection")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  {getTranslation(language, "home")}
                </Link>
              </li>
              <li>
                <Link href="/narakas" className="text-gray-400 hover:text-white transition-colors">
                  {getTranslation(language, "narakas")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  {getTranslation(language, "about")}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  {getTranslation(language, "faq")}
                </Link>
              </li>
              <li>
                <Link href="/glossary" className="text-gray-400 hover:text-white transition-colors">
                  {getTranslation(language, "glossary")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">{getTranslation(language, "categoriesSection")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-gray-400">
                  {getTranslation(language, "violence")} & {getTranslation(language, "cruelty")}
                </span>
              </li>
              <li>
                <span className="text-gray-400">
                  {getTranslation(language, "deception")} & {getTranslation(language, "theft")}
                </span>
              </li>
              <li>
                <span className="text-gray-400">{getTranslation(language, "sexualMisconduct")}</span>
              </li>
              <li>
                <span className="text-gray-400">
                  {getTranslation(language, "disrespect")} & {getTranslation(language, "pride")}
                </span>
              </li>
              <li>
                <span className="text-gray-400">
                  {getTranslation(language, "greed")} & {getTranslation(language, "corruption")}
                </span>
              </li>
            </ul>
          </div>

          {/* Values */}
          <div>
            <h3 className="font-semibold mb-4">{getTranslation(language, "ourValues")}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Heart className="h-4 w-4 text-red-400" />
                <span className="text-sm text-gray-400">Compassion</span>
              </div>
              <div className="flex items-center space-x-2">
                <Scale className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-gray-400">Justice</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-400">Respect</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-4 w-4 text-purple-400" />
                <span className="text-sm text-gray-400">Wisdom</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              2024 © {getTranslation(language, "title")} {getTranslation(language, "footerCopyright")}
            </p>
            <p className="text-gray-400 text-sm">{getTranslation(language, "footerRespect")}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
