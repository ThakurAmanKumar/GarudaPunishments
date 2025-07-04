import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Clock, Globe, Heart, Scale, Star } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">About the Garuda Purana</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover the rich history, profound teachings, and spiritual significance of one of Hinduism's most
            important sacred texts.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Origin and History */}
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Clock className="h-5 w-5" />
                Origin and History
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                The Garuda Purana is one of the eighteen Mahapuranas (major Puranas) in Hindu literature, traditionally
                attributed to the sage Vyasa. It is believed to have been composed between the 4th and 11th centuries
                CE, though its oral traditions are much older.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The text is structured as a dialogue between Lord Vishnu and his divine vehicle, Garuda, the great
                eagle. This conversation format allows for deep philosophical discussions about life, death, karma, and
                the afterlife.
              </p>
            </CardContent>
          </Card>

          {/* Structure and Content */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <BookOpen className="h-5 w-5" />
                  Structure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • <strong>19,000 verses</strong> in Sanskrit
                  </li>
                  <li>
                    • Divided into <strong>two main parts</strong>
                  </li>
                  <li>
                    • <strong>Purva Khanda:</strong> General teachings
                  </li>
                  <li>
                    • <strong>Preta Khanda:</strong> Death and afterlife
                  </li>
                  <li>• Contains stories, rituals, and moral guidance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <Globe className="h-5 w-5" />
                  Global Influence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Translated into many languages</li>
                  <li>• Influences Hindu funeral practices</li>
                  <li>• Studied by scholars worldwide</li>
                  <li>• Inspires art and literature</li>
                  <li>• Guides ethical living globally</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Key Teachings */}
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Star className="h-5 w-5" />
                Key Teachings and Themes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Scale className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-blue-800 mb-2">Karma and Justice</h4>
                  <p className="text-sm text-gray-600">
                    Every action has consequences, and divine justice ensures balance in the universe.
                  </p>
                </div>
                <div className="text-center">
                  <Heart className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-blue-800 mb-2">Compassion and Dharma</h4>
                  <p className="text-sm text-gray-600">
                    Living righteously with compassion for all beings leads to spiritual growth.
                  </p>
                </div>
                <div className="text-center">
                  <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-blue-800 mb-2">Life and Death Wisdom</h4>
                  <p className="text-sm text-gray-600">
                    Understanding the nature of existence helps us live more meaningfully.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* The Narakas Section */}
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-900">Understanding the Narakas</CardTitle>
              <CardDescription className="text-red-700">
                Why the Garuda Purana describes punishments in detail
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-red-800 leading-relaxed">
                The detailed descriptions of the 28 Narakas (hells) in the Garuda Purana serve multiple purposes:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Educational Purpose:</h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Illustrate the law of karma</li>
                    <li>• Show consequences of actions</li>
                    <li>• Guide moral decision-making</li>
                    <li>• Encourage righteous living</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Spiritual Significance:</h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Metaphors for inner suffering</li>
                    <li>• Represent states of consciousness</li>
                    <li>• Path to liberation through understanding</li>
                    <li>• Development of compassion</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Modern Relevance */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900">Modern Relevance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-green-800 leading-relaxed">
                The teachings of the Garuda Purana remain highly relevant in today's world:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Personal Ethics:</h4>
                  <p className="text-sm text-green-700">
                    Guides individuals in making ethical choices in complex modern situations, from business dealings to
                    personal relationships.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Social Justice:</h4>
                  <p className="text-sm text-green-700">
                    Emphasizes the importance of justice, fairness, and protecting the vulnerable in society.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Environmental Consciousness:</h4>
                  <p className="text-sm text-green-700">
                    Teachings about respecting all life forms align with modern environmental and animal rights
                    movements.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Mental Health:</h4>
                  <p className="text-sm text-green-700">
                    Understanding karma and consequences can provide psychological frameworks for dealing with guilt,
                    forgiveness, and personal growth.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Scholarly Perspective */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900">Scholarly Perspective</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-800 leading-relaxed mb-4">
                Modern scholars approach the Garuda Purana from various perspectives:
              </p>
              <ul className="space-y-2 text-purple-700">
                <li>
                  • <strong>Historical:</strong> Understanding ancient Indian society and values
                </li>
                <li>
                  • <strong>Philosophical:</strong> Exploring concepts of justice, karma, and ethics
                </li>
                <li>
                  • <strong>Psychological:</strong> Analyzing the text's impact on human behavior
                </li>
                <li>
                  • <strong>Comparative:</strong> Relating to similar concepts in other religions
                </li>
                <li>
                  • <strong>Literary:</strong> Appreciating the poetic and narrative elements
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
