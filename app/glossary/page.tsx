"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Filter } from "lucide-react"

const glossaryTerms = [
  {
    term: "Ahimsa",
    pronunciation: "ah-HIM-sa",
    definition:
      "Non-violence in thought, word, and deed. A fundamental principle in Hindu ethics emphasizing compassion for all living beings.",
    category: "Ethics",
  },
  {
    term: "Atman",
    pronunciation: "AHT-man",
    definition:
      "The individual soul or self. The eternal, unchanging essence of a person that continues after death and through reincarnation.",
    category: "Philosophy",
  },
  {
    term: "Dharma",
    pronunciation: "DHAR-ma",
    definition:
      "Righteous duty, moral law, or the path of righteousness. It encompasses ethical conduct, religious duty, and natural law.",
    category: "Ethics",
  },
  {
    term: "Garuda",
    pronunciation: "ga-RU-da",
    definition:
      "The divine eagle, vehicle (vahana) of Lord Vishnu. Represents devotion, speed, and the ability to soar above worldly concerns.",
    category: "Deity",
  },
  {
    term: "Karma",
    pronunciation: "KAR-ma",
    definition:
      "The law of cause and effect governing all actions. Every action creates consequences that affect the individual's present and future lives.",
    category: "Philosophy",
  },
  {
    term: "Moksha",
    pronunciation: "MOHK-sha",
    definition:
      "Liberation from the cycle of birth, death, and rebirth. The ultimate spiritual goal of union with the divine consciousness.",
    category: "Philosophy",
  },
  {
    term: "Naraka",
    pronunciation: "na-RA-ka",
    definition:
      "Hell or place of punishment where souls experience consequences of negative karma. The Garuda Purana describes 28 different Narakas.",
    category: "Cosmology",
  },
  {
    term: "Papa",
    pronunciation: "PA-pa",
    definition: "Sin or negative karma created by harmful actions. Leads to suffering and spiritual bondage.",
    category: "Ethics",
  },
  {
    term: "Prayaschitta",
    pronunciation: "pra-ya-SHIT-ta",
    definition:
      "Atonement or penance performed to purify oneself from the effects of sinful actions. Includes repentance and corrective actions.",
    category: "Practice",
  },
  {
    term: "Punya",
    pronunciation: "PUN-ya",
    definition:
      "Merit or positive karma earned through good deeds, righteous actions, and spiritual practices. Leads to happiness and spiritual progress.",
    category: "Ethics",
  },
  {
    term: "Purana",
    pronunciation: "pu-RA-na",
    definition:
      "Ancient Hindu texts containing stories, teachings, and wisdom. The Garuda Purana is one of the eighteen major Puranas.",
    category: "Scripture",
  },
  {
    term: "Samsara",
    pronunciation: "sam-SA-ra",
    definition: "The cycle of birth, death, and rebirth that souls experience until achieving liberation (moksha).",
    category: "Philosophy",
  },
  {
    term: "Svarga",
    pronunciation: "SVAR-ga",
    definition:
      "Heaven or celestial realm where souls with good karma experience happiness and pleasure before being reborn.",
    category: "Cosmology",
  },
  {
    term: "Yama",
    pronunciation: "YA-ma",
    definition:
      "The god of death and justice who judges souls after death and determines their fate based on their karma.",
    category: "Deity",
  },
  {
    term: "Yamaloka",
    pronunciation: "YA-ma-lo-ka",
    definition: "The realm of Yama where souls are judged after death. The place where karmic accounts are settled.",
    category: "Cosmology",
  },
  {
    term: "Brahman",
    pronunciation: "BRAH-man",
    definition:
      "The ultimate reality, the supreme cosmic spirit in Hindu philosophy. The source and essence of all existence.",
    category: "Philosophy",
  },
  {
    term: "Jiva",
    pronunciation: "JEE-va",
    definition: "The individual living soul that transmigrates from body to body until achieving liberation.",
    category: "Philosophy",
  },
  {
    term: "Tapas",
    pronunciation: "ta-PAS",
    definition: "Spiritual discipline, austerity, and penance performed to purify the soul and gain spiritual merit.",
    category: "Practice",
  },
  {
    term: "Vritti",
    pronunciation: "VRIT-ti",
    definition: "Mental modifications or thought patterns that create fluctuations in consciousness.",
    category: "Philosophy",
  },
  {
    term: "Sadhana",
    pronunciation: "sa-DHA-na",
    definition: "Spiritual practice or discipline undertaken to achieve spiritual goals and self-realization.",
    category: "Practice",
  },
]

const categories = ["All", "Philosophy", "Ethics", "Deity", "Cosmology", "Scripture", "Practice"]

export default function GlossaryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredTerms =
    selectedCategory === "All" ? glossaryTerms : glossaryTerms.filter((term) => term.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-teal-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-900 mb-4">Glossary of Terms</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Essential terms and concepts from the Garuda Purana and Hindu philosophy to help you better understand the
            teachings and their significance.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Categories Filter */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="h-5 w-5 text-green-600" />
              <h3 className="text-lg font-semibold text-green-900">Filter by Category:</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`cursor-pointer transition-colors ${
                    selectedCategory === category
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : "hover:bg-green-100 border-green-300 text-green-700"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-sm text-gray-600">
              Showing {filteredTerms.length} of {glossaryTerms.length} terms
              {selectedCategory !== "All" && ` in category: ${selectedCategory}`}
            </p>
          </div>

          {/* Terms Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTerms.map((item, index) => (
              <Card key={index} className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-green-900">{item.term}</CardTitle>
                    <Badge
                      variant="secondary"
                      className={`text-xs ${
                        item.category === "Philosophy"
                          ? "bg-blue-100 text-blue-800"
                          : item.category === "Ethics"
                            ? "bg-purple-100 text-purple-800"
                            : item.category === "Deity"
                              ? "bg-orange-100 text-orange-800"
                              : item.category === "Cosmology"
                                ? "bg-indigo-100 text-indigo-800"
                                : item.category === "Scripture"
                                  ? "bg-red-100 text-red-800"
                                  : "bg-green-100 text-green-800"
                      }`}
                    >
                      {item.category}
                    </Badge>
                  </div>
                  <CardDescription className="text-green-700 italic">
                    Pronunciation: {item.pronunciation}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.definition}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results Message */}
          {filteredTerms.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No terms found in the selected category.</p>
              <button
                onClick={() => setSelectedCategory("All")}
                className="mt-4 text-green-600 hover:text-green-800 underline"
              >
                Show all terms
              </button>
            </div>
          )}

          {/* Additional Information */}
          <Card className="mt-12 border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <BookOpen className="h-5 w-5" />
                Understanding Sanskrit Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-blue-800 leading-relaxed">
                Many terms in the Garuda Purana come from Sanskrit, the ancient language of Hindu scriptures.
                Understanding these terms helps deepen your comprehension of the teachings and their cultural context.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Pronunciation Guide:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• 'a' as in 'but' (short) or 'father' (long)</li>
                    <li>• 'i' as in 'bit' (short) or 'beet' (long)</li>
                    <li>• 'u' as in 'put' (short) or 'boot' (long)</li>
                    <li>• 'r' is slightly rolled</li>
                    <li>• Emphasis usually on the first syllable</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Cultural Context:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Terms carry deep philosophical meaning</li>
                    <li>• Often have multiple layers of interpretation</li>
                    <li>• Reflect ancient Indian worldview</li>
                    <li>• Connect to broader Hindu philosophy</li>
                    <li>• Evolved over thousands of years</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
