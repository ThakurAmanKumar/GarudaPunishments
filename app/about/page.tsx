"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Clock, Globe, Heart, Scale, Star } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/translations"

export default function AboutPage() {
  const { language } = useLanguage()
  const t = (k: any) => getTranslation(language, k)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">{t("aboutTitle")}</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">{t("aboutSubtitle")}</p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Clock className="h-5 w-5" />
                {t("originAndHistory")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">{t("garudaPuranaDescription")}</p>
              <p className="text-gray-700 leading-relaxed">{t("moralGuidanceDescription")}</p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <BookOpen className="h-5 w-5" />
                  {t("structure")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{t("spiritualGrowthDescription")}</p>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <Globe className="h-5 w-5" />
                  {t("globalInfluence")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{t("exploreNarakasDescription")}</p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Star className="h-5 w-5" />
                {t("keyTeachings")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Scale className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-blue-800 mb-2">{t("karmaAndJustice")}</h4>
                  <p className="text-sm text-gray-600">{t("moralClarityDescription")}</p>
                </div>
                <div className="text-center">
                  <Heart className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-blue-800 mb-2">{t("compassionAndDharma")}</h4>
                  <p className="text-sm text-gray-600">{t("socialHarmonyDescription")}</p>
                </div>
                <div className="text-center">
                  <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-blue-800 mb-2">{t("lifeAndDeathWisdom")}</h4>
                  <p className="text-sm text-gray-600">{t("spiritualGrowthDescription")}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-900">{t("understandingNarakas")}</CardTitle>
              <CardDescription className="text-red-700">{t("whyNarakasDetailed")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-red-800 leading-relaxed">{t("narakasDescription")}</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">{t("educationalPurposeTitle")}</h4>
                  <p className="text-sm text-red-700">{t("educationalWebsiteDescription")}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">{t("spiritualSignificanceTitle")}</h4>
                  <p className="text-sm text-red-700">{t("narakasEducationalNote")}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900">{t("modernRelevance")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-green-800 leading-relaxed">{t("heroDescription")}</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">{t("personalEthics")}</h4>
                  <p className="text-sm text-green-700">{t("moralClarityDescription")}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">{t("socialJustice")}</h4>
                  <p className="text-sm text-green-700">{t("socialHarmonyDescription")}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">{t("environmentalConsciousness")}</h4>
                  <p className="text-sm text-green-700">{t("spiritualGrowthDescription")}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">{t("mentalHealth")}</h4>
                  <p className="text-sm text-green-700">{t("exploreNarakasDescription")}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900">{t("scholarlyPerspective")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-800 leading-relaxed mb-4">{t("educationalWebsiteDescription")}</p>
              <p className="text-purple-700">{t("narakasEducationalNote2")}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
