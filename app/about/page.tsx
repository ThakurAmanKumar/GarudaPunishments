"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Clock, Globe, Heart, Scale, Star } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/translations"

export default function AboutPage() {
  const lang = useLanguage()
  const t = (k: any) => getTranslation(lang, k)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">{t("aboutHeading")}</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">{t("aboutSubheading")}</p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Clock className="h-5 w-5" />
                {t("originHistoryTitle")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">{t("originHistoryPara1")}</p>
              <p className="text-gray-700 leading-relaxed">{t("originHistoryPara2")}</p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <BookOpen className="h-5 w-5" />
                  {t("structureTitle")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  {["structureBullet1","structureBullet2","structureBullet3","structureBullet4","structureBullet5"]
                    .map(b => <li key={b}>• {t(b)}</li>)}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <Globe className="h-5 w-5" />
                  {t("globalInfluenceTitle")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  {["globalBullet1","globalBullet2","globalBullet3","globalBullet4","globalBullet5"]
                    .map(b => <li key={b}>• {t(b)}</li>)}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Star className="h-5 w-5" />
                {t("keyTeachingsTitle")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Scale className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-blue-800 mb-2">{t("karmaJusticeHeading")}</h4>
                  <p className="text-sm text-gray-600">{t("karmaJusticeBody")}</p>
                </div>
                <div className="text-center">
                  <Heart className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-blue-800 mb-2">{t("compassionDharmaHeading")}</h4>
                  <p className="text-sm text-gray-600">{t("compassionDharmaBody")}</p>
                </div>
                <div className="text-center">
                  <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-blue-800 mb-2">{t("lifeDeathWisdomHeading")}</h4>
                  <p className="text-sm text-gray-600">{t("lifeDeathWisdomBody")}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-900">{t("narakasTitle")}</CardTitle>
              <CardDescription className="text-red-700">{t("narakasSubtitle")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-red-800 leading-relaxed">{t("narakasPara1")}</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">{t("narakasEducationalHeading")}</h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    {["educationalBullet1","educationalBullet2","educationalBullet3","educationalBullet4"]
                      .map(b => <li key={b}>• {t(b)}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">{t("narakasSpiritualHeading")}</h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    {["spiritualBullet1","spiritualBullet2","spiritualBullet3","spiritualBullet4"]
                      .map(b => <li key={b}>• {t(b)}</li>)}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900">{t("modernTitle")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-green-800 leading-relaxed">{t("modernPara1")}</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">{t("personalEthicsHeading")}</h4>
                  <p className="text-sm text-green-700">{t("personalEthicsBody")}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">{t("socialJusticeHeading")}</h4>
                  <p className="text-sm text-green-700">{t("socialJusticeBody")}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">{t("environmentalHeading")}</h4>
                  <p className="text-sm text-green-700">{t("environmentalBody")}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">{t("mentalHealthHeading")}</h4>
                  <p className="text-sm text-green-700">{t("mentalHealthBody")}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900">{t("scholarlyTitle")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-800 leading-relaxed mb-4">{t("scholarlyPara1")}</p>
              <ul className="space-y-2 text-purple-700">
                {["scholarlyBulletHistorical","scholarlyBulletPhilosophical","scholarlyBulletPsychological",
                  "scholarlyBulletComparative","scholarlyBulletLiterary"]
                  .map(b => <li key={b}>• {t(b)}</li>)}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
