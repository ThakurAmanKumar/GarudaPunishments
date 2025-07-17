"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Heart, Scale, Users } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/translations"

export default function HomePage() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-900 mb-6">{getTranslation(language, "title")}</h1>
          <p className="text-xl md:text-2xl text-orange-700 mb-4">{getTranslation(language, "subtitle")}</p>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">{getTranslation(language, "heroDescription")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
              <Link href="/narakas">{getTranslation(language, "exploreNarakas")}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-orange-600 text-orange-600 bg-transparent">
              <Link href="/about">{getTranslation(language, "learnAbout")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What is Garuda Purana Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-orange-900 mb-12">
            {getTranslation(language, "whatIsGarudaPurana")}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-800">
                  <BookOpen className="h-5 w-5" />
                  {getTranslation(language, "sacredScripture")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{getTranslation(language, "garudaPuranaDescription")}</p>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-800">
                  <Scale className="h-5 w-5" />
                  {getTranslation(language, "moralGuidance")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{getTranslation(language, "moralGuidanceDescription")}</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg border border-orange-200">
            <h3 className="text-2xl font-semibold text-orange-900 mb-4">
              {getTranslation(language, "whyStudyNarakas")}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Heart className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <h4 className="font-semibold text-orange-800 mb-2">{getTranslation(language, "spiritualGrowth")}</h4>
                <p className="text-sm text-gray-600">{getTranslation(language, "spiritualGrowthDescription")}</p>
              </div>
              <div className="text-center">
                <Scale className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <h4 className="font-semibold text-orange-800 mb-2">{getTranslation(language, "moralClarity")}</h4>
                <p className="text-sm text-gray-600">{getTranslation(language, "moralClarityDescription")}</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <h4 className="font-semibold text-orange-800 mb-2">{getTranslation(language, "socialHarmony")}</h4>
                <p className="text-sm text-gray-600">{getTranslation(language, "socialHarmonyDescription")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-orange-900 mb-6">{getTranslation(language, "beginJourney")}</h2>
          <p className="text-lg text-gray-700 mb-8">{getTranslation(language, "exploreNarakasDescription")}</p>
          <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
            <Link href="/narakas">{getTranslation(language, "startExploring")}</Link>
          </Button>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-orange-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-orange-800">
            <strong>{getTranslation(language, "educationalPurpose")}:</strong> {getTranslation(language, "disclaimer")}
          </p>
        </div>
      </section>
    </div>
  )
}
