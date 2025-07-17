"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/translations"

export default function FAQPage() {
  const { language } = useLanguage()

  const faqItems = [
    { question: "faqQuestion1", answer: "faqAnswer1" },
    { question: "faqQuestion2", answer: "faqAnswer2" },
    { question: "faqQuestion3", answer: "faqAnswer3" },
    { question: "faqQuestion4", answer: "faqAnswer4" },
    { question: "faqQuestion5", answer: "faqAnswer5" },
    { question: "faqQuestion6", answer: "faqAnswer6" },
    { question: "faqQuestion7", answer: "faqAnswer7" },
    { question: "faqQuestion8", answer: "faqAnswer8" },
    { question: "faqQuestion9", answer: "faqAnswer9" },
    { question: "faqQuestion10", answer: "faqAnswer10" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-900 mb-4">{getTranslation(language, "faqTitle")}</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">{getTranslation(language, "faqSubtitle")}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-900">
                <HelpCircle className="h-5 w-5" />
                {getTranslation(language, "questionsAndAnswers")}
              </CardTitle>
              <CardDescription>{getTranslation(language, "exploreAnswers")}</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index + 1}`}>
                    <AccordionTrigger className="text-left">
                      {getTranslation(language, item.question as any)}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 leading-relaxed">
                      {getTranslation(language, item.answer as any)}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
