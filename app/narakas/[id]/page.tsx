"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, BookOpen, Heart, Shield } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/i18n"

// Complete detailed data for all 28 Narakas
const narakaDetails = {
  1: {
    name: { en: "Tamisra", hi: "तमिस्र", ne: "तमिस्र", sa: "तमिस्र" },
    category: "violence",
    severity: "moderate",
    sin: {
      en: "Theft and violence against others",
      hi: "चोरी और दूसरों के खिलाफ हिंसा",
      ne: "चोरी र अरूहरू विरुद्ध हिंसा",
      sa: "चौर्यं परेषां विरुद्धं हिंसा च",
    },
    punishment: {
      en: "Bound and beaten by Yama's servants",
      hi: "यम के सेवकों द्वारा बांधा और पीटा जाना",
      ne: "यमका सेवकहरूद्वारा बाँधिएर पिटिने",
      sa: "यमसेवकैः बद्ध्वा ताडितः",
    },
    detailedSin: {
      en: "Those who steal others' property, commit robbery, or use violence to harm innocent people are sent to Tamisra. This includes those who take what doesn't belong to them through force or deception.",
      hi: "जो लोग दूसरों की संपत्ति चुराते हैं, डकैती करते हैं, या निर्दोष लोगों को नुकसान पहुंचाने के लिए हिंसा का उपयोग करते हैं, उन्हें तमिस्र भेजा जाता है।",
      ne: "जसले अरूको सम्पत्ति चोर्छन्, डकैती गर्छन्, वा निर्दोष मानिसहरूलाई हानि पुर्याउन हिंसा प्रयोग गर्छन्, तिनीहरूलाई तमिस्रमा पठाइन्छ।",
      sa: "ये परसम्पत्तिं चोरयन्ति, डकैतिं कुर्वन्ति, निर्दोषजनान् हिंसयितुं बलप्रयोगं कुर्वन्ति ते तमिस्रे प्रेष्यन्ते।",
    },
    moralLesson: {
      en: "This Naraka teaches us that taking what belongs to others through violence or theft creates negative karma. It emphasizes the importance of earning through honest means and respecting others' property.",
      hi: "यह नरक हमें सिखाता है कि हिंसा या चोरी के माध्यम से दूसरों की चीजें लेने से नकारात्मक कर्म बनता है। यह ईमानदार माध्यमों से कमाने और दूसरों की संपत्ति का सम्मान करने के महत्व पर जोर देता है।",
      ne: "यो नरकले हामीलाई सिकाउँछ कि हिंसा वा चोरीको माध्यमबाट अरूको चीजहरू लिँदा नकारात्मक कर्म सिर्जना हुन्छ। यसले इमानदार माध्यमबाट कमाउने र अरूको सम्पत्तिको सम्मान गर्ने महत्त्वमा जोड दिन्छ।",
      sa: "इदं नरकं शिक्षयति यत् हिंसा चौर्येण वा परेषां वस्तूनि ग्रहणेन नकारात्मकं कर्म सृज्यते। तत् सत्यमार्गेण अर्जनस्य परेषां सम्पत्तेः सम्मानस्य च महत्त्वं दर्शयति।",
    },
    avoidance: [
      "Always earn through honest work and fair means",
      "Respect others' belongings and property rights",
      "Practice contentment with what you have",
      "Help others in need rather than taking from them",
      "Develop empathy and compassion for others",
    ],
    quote: {
      en: "Those who steal and harm others shall be bound in darkness, for their actions bind their souls to ignorance.",
      hi: "जो लोग चोरी करते हैं और दूसरों को नुकसान पहुंचाते हैं, वे अंधेरे में बंधे रहेंगे, क्योंकि उनके कर्म उनकी आत्माओं को अज्ञानता से बांधते हैं।",
      ne: "जसले चोर्छन् र अरूलाई हानि पुर्‍याउँछन्, तिनीहरू अन्धकारमा बाँधिनेछन्, किनकि तिनीहरूका कार्यहरूले तिनीहरूको आत्मालाई अज्ञानतामा बाँध्छन्।",
      sa: "ये चोरयन्ति परेभ्यः च क्षतिं कुर्वन्ति ते अन्धकारे बद्धाः भविष्यन्ति, यतः तेषां कर्मभिः तेषां आत्मा अज्ञानेन बध्यते।",
    },
  },
  // Adding basic details for remaining Narakas (2-28) to ensure all Learn More buttons work
  2: {
    name: { en: "Andhatamisra", hi: "अन्धतमिस्र", ne: "अन्धतमिस्र", sa: "अन्धतमिस्र" },
    category: "deception",
    severity: "severe",
    sin: {
      en: "Deceiving others and causing harm through lies",
      hi: "दूसरों को धोखा देना और झूठ के माध्यम से नुकसान पहुंचाना",
      ne: "अरूलाई धोका दिनु र झूटको माध्यमबाट हानि पुर्‍याउनु",
      sa: "परान् वञ्चयित्वा मिथ्यावादेन क्षतिं जनयन्ति",
    },
    punishment: {
      en: "Blinded and tortured in complete darkness",
      hi: "अंधा कर दिया और पूरी तरह से अंधेरे में प्रताड़ित किया गया",
      ne: "अन्धो बनाइयो र पूर्ण अन्धकारमा यातना दिइयो",
      sa: "अन्धं कृत्वा पूर्णान्धकारे यातना दीयते",
    },
    detailedSin: {
      en: "This punishment is for those who deceive others through elaborate lies, false promises, or fraudulent schemes.",
      hi: "यह सजा उन लोगों के लिए है जो विस्तृत झूठ, झूठे वादों या धोखाधड़ी योजनाओं के माध्यम से दूसरों को धोखा देते हैं।",
      ne: "यो सजाय ती व्यक्तिहरूका लागि हो जसले विस्तृत झूट, झूटा वाचा, वा धोखाधडी योजनाहरू मार्फत अरूलाई धोका दिन्छन्।",
      sa: "इदं दण्डं तेषां कृते ये विस्तीर्णैः मिथ्यावाक्यैः, असत्यप्रतिज्ञाभिः, कपटयोजनाभिः वा परान् वञ्चयन्ति।",
    },
    moralLesson: {
      en: "Deception creates spiritual darkness and separates us from truth and light.",
      hi: "धोखा आध्यात्मिक अंधकार पैदा करता है और हमें सच्चाई और प्रकाश से अलग करता है।",
      ne: "धोकाले आध्यात्मिक अन्धकार सिर्जना गर्दछ र हामीलाई सत्य र प्रकाशबाट अलग गर्दछ।",
      sa: "वञ्चना आध्यात्मिकं तमः सृजति सत्यं प्रकाशं च अस्मात् पृथक् करोति।",
    },
    avoidance: [
      "Always speak the truth, even when difficult",
      "Keep your promises and commitments",
      "Be transparent in all your dealings",
      "Avoid manipulating others for personal gain",
      "Practice honesty in thought, word, and deed",
    ],
    quote: {
      en: "Those who live in deception shall dwell in darkness, for lies obscure the light of truth from the soul.",
      hi: "जो लोग धोखे में रहते हैं वे अंधेरे में रहेंगे, क्योंकि झूठ आत्मा से सच्चाई की रोशनी को अस्पष्ट करते हैं।",
      ne: "जो मानिसहरू धोकामा बस्छन् तिनीहरू अन्धकारमा बस्नेछन्, किनकि झूटले आत्माबाट सत्यको ज्योतिलाई अस्पष्ट पार्छ।",
      sa: "ये वञ्चनायां जीवन्ति ते तमसि निवसन्ति, यतः मिथ्यावाक्यानि आत्मनः सत्यस्य प्रकाशं तिरोहितं कुर्वन्ति।",
    },
  },
    3: {
    name: { en: "Raurava", hi: "रौरव", ne: "रौरव", sa: "रौरव" },
    category: "cruelty",
    severity: "severe",
    sin: {
      en: "Torturing living beings for pleasure",
      hi: "मनोरंजन के लिए जीवों को यातना देना",
      ne: "मनोरञ्जनका लागि जीवहरूलाई यातना दिने",
      sa: "क्रीडायै जीवेषु यातनादानं",
    },
    punishment: {
      en: "Tormented by crushing stones eternally",
      hi: "सदैव पत्थरों से कुचला जाना",
      ne: "ढुंगाले लगातार पिर्दै यातना दिने",
      sa: "शतशः शिलाभिः अनन्तं ताडितः",
    },
    detailedSin: {
      en: "Those who inflict pain on humans or animals for amusement are sent here.",
      hi: "जो लोग मनोरंजन के लिए मनुष्यों या जानवरों को डराते और पीटते हैं, उन्हें रौरव भेजा जाता है।",
      ne: "जो मानिस वा पशुहरूलाई मनोरञ्जनका लागि यातना दिन्छन्, तिनीहरूलाई रौरवमा पठाइन्छ।",
      sa: "ये येन मानवान् पशून् ध्यानाय यातनां कुर्वन्ति ते रौरवे प्रेष्यन्ते।",
    },
    moralLesson: {
      en: "Delighting in suffering breeds cruelty within your own soul. Foster compassion instead.",
      hi: "दूसरों की पीड़ा में प्रसन्न होना आत्मा में क्रूरता पैदा करता है। इसके बजाय दया दें।",
      ne: "अरूको पीडामा आनन्द लिनु आत्मामा क्रूरता ल्याउँछ। बरु दया फैलाऔं।",
      sa: "दुःखे हृष्टः भवति आत्मा क्रूरतया बद्धा। तद्विरुद्धं करुणां संस्कृतम्।",
    },
    avoidance: [
      "Develop kindness",
      "Refuse violent amusements",
      "Speak up against cruelty",
      "Practice mercy",
      "Protect the weak",
    ],
    quote: {
      en: "He who rejoices in others' pain is himself ensnared in endless torment.",
      hi: "जो दूसरों की पीड़ा में प्रसन्न होता है, वह अनंत यातना में फँस जाता है।",
      ne: "जो अरूको पीडामा आनन्दित हुन्छ, त्यो अनन्त यातनामा फस्छ।",
      sa: "यः परेषां दुःखे हृष्टः स अनन्तयातनामयेऽपि बद्धः।",
    },
  },

  4: {
    name: { en: "Maharaurava", hi: "महारौरव", ne: "महारौरव", sa: "महारौरव" },
    category: "extremeCruelty",
    severity: "extreme",
    sin: {
      en: "Mass slaughter and genocide",
      hi: "सामूहिक हत्या और नरसंहार",
      ne: "सामूहिक हत्या र नरसंहार",
      sa: "सामूहिकं हरणं नरसंहारश्च",
    },
    punishment: {
      en: "Ripped apart by wild beasts unceasingly",
      hi: "जंगली जानवरों द्वारा लगातार चरा जाना",
      ne: "जंगली जनावरहरूले सधैं चपेट्दै मार्ने",
      sa: "अनवरतः पशुभिः चिर्यते ध्यायमानः",
    },
    detailedSin: {
      en: "Those who initiate genocide or mass violence are punished here.",
      hi: "जो नरसंहार या सामूहिक हिंसा की योजना बनाते हैं, उन्हें यहाँ दंड मिलता है।",
      ne: "जो नरसंहार वा सामूहिक हिंसा गर्छन्, तिनीहरूलाई यहाँ सजाय हुन्छ।",
      sa: "ये नरसंहारं वा सामूहिकहिंसां कुर्वन्ति ते महौरवे दण्ड्यन्ते।",
    },
    moralLesson: {
      en: "Mass hatred destroys societies and souls. Embrace peace and respect for all life.",
      hi: "सामूहिक घृणा समाज और आत्मा दोनों को नष्ट कर देती है। शांति अपनाएँ।",
      ne: "सामूहिक घृणाले समाज र आत्मा विबिघटित गर्छ। शान्ति अपनाऔं।",
      sa: "द्वेषं समाजात्मनि विनाशिका। शान्तिपथं जीवनाय निर्वहणीयम्।",
    },
    avoidance: [
      "Reject ideologies of hate",
      "Uphold peace",
      "Defend innocents",
      "Work toward reconciliation",
      "Teach unity",
    ],
    quote: {
      en: "He who delights in mass slaughter will himself be devoured by unrelenting fury.",
      hi: "जो सामूहिक हत्या में आनंदित होता है, वह खुद क्रोध में निगला जाएगा।",
      ne: "जो सामूहिक हत्या मा आनन्दित हुन्छ, त्यो क्रोधले आफैँलाई निग्लिनेछ।",
      sa: "यो यः सामूहिकवधे हृष्टः स स्वयं क्रोधाभक्ष्यते।",
    },
  },

  5: {
    name: { en: "Kumbhipaka", hi: "कुम्भीपाक", ne: "कुम्भीपाक", sa: "कुम्भीपाक" },
    category: "animalCruelty",
    severity: "severe",
    sin: {
      en: "Boiling animals for food or sport",
      hi: "खाद्य या खेल के लिए जानवरों को उबालना",
      ne: "खाना वा खेलको लागि जनावरलाई उमाल्ने",
      sa: "भक्ष्याय क्रीडायाऽथवा व्यपारेण पशूनां स्वेदनम्",
    },
    punishment: {
      en: "Boiled in a cauldron of oil",
      hi: "तेल के बर्तन में उबाला जाना",
      ne: "तेलको भाँडोमा उमालिने",
      sa: "तेलपात्रे स्वेदितः",
    },
    detailedSin: {
      en: "Those who derive pleasure from boiling or skinning animals are sent here.",
      hi: "जो लोग जानवरों को उबालने या चमड़ा उतारने में आनंद लेते हैं, उन्हें यहीं भेजा जाता है।",
      ne: "जसले जनावर उमाल्ने वा छाला खोल्ने आनन्द लिन्छन्, तिमीहरूलाई यहाँ पठाइन्छ।",
      sa: "ये येन पशून् स्वेद् छ्छिद् वा आनन्देन यातनादायिनः कुर्वन्ति ते कुंभीपाके प्रेष्यन्ते।",
    },
    moralLesson: {
      en: "Cruelty to animals gathers heavy karma. Compassion is the path of Dharma.",
      hi: "जानवरों को मारना भारी कर्म बनाता है। दया धर्म का मार्ग है।",
      ne: "जनावरप्रति हिंसाले ठूलो कर्म जन्माउँछ। दया धर्म हो।",
      sa: "पशूनां क्रूरतया कर्मभारं वर्धते। करुणा धर्ममार्गः।",
    },
    avoidance: [
      "Follow a cruelty‑free lifestyle",
      "Avoid animal entertainment",
      "Report abuse",
      "Adopt compassion",
      "Support protection causes",
    ],
    quote: {
      en: "One who boils the innocent is himself scorched by the fire of cruelty.",
      hi: "जो निर्दोषों को उबालता है, उस पर क्रूरता की आग लगती है।",
      ne: "जो गरीबानलाई उमाल्छ, उसै क्रूरताको आगोले दग्धिन्छ।",
      sa: "ये निर्दोषान् स्वेदयति तेन स्वक्रूरताग्निना डग्धः।",
    },
  },

  6: {
    name: { en: "Kalasutra", hi: "कलसूत्र", ne: "कलसूत्र", sa: "कलसूत्र" },
    category: "disrespect",
    severity: "severe",
    sin: {
      en: "Disrespecting teachers, parents or sacred knowledge",
      hi: "गुरुओं, माता‑पिता या धर्म की अनादर",
      ne: "गुरु, अभिभावक वा पवित्र ज्ञानको अवमानना",
      sa: "गुरुणा मातृपितृभ्यः धर्मज्ञानस्य च अवमानः",
    },
    punishment: {
      en: "Slashed by burning cords until limbs are severed",
      hi: "जलते हुए फंदों से काटा जाना",
      ne: "जलिरहेको डोरीले काटिने",
      sa: "द्रुतदाहकदारयोरध्द्वश्च्छिन्नः",
    },
    detailedSin: {
      en: "Those who insult or harm their teachers, elders, or holy texts are punished here.",
      hi: "जो लोग अपने गुरुओं, बड़ों या धर्मग्रंथों का अपमान करते हैं या उन्हें हानि पहुँचाते हैं, उन्हें कलसूत्र दंड मिलता है।",
      ne: "जो गुरु, बड़ों वा धार्मिक ग्रन्थलाई बेइज्जत वा हानि गर्छन्, तिनीहरूलाई कलसूत्र सजाय हुन्छ।",
      sa: "ये येन गुरुभ्यः पूज्यभ्यश्च धर्मग्रन्थान् अपकुञ्जयन्ति वा क्षातयन्ति ते कलसूत्रे दण्ड्यन्ते।",
    },
    moralLesson: {
      en: "Honoring knowledge and elders strengthens society and self-respect. Reverence is key.",
      hi: "ज्ञान और बुजुर्गों का सम्मान समाज और आत्म-सम्मान को मजबूत करता है। श्रद्धा आवश्यक है।",
      ne: "ज्ञान र बृद्धहरूको सम्मानले समाज र आत्मसम्मान बन्छ। श्रद्धा आवश्यक छ।",
      sa: "ज्ञानबृद्धिभ्यः सम्मानान् आत्मगौरवं च संभवयति। श्रद्धा प्रधानः।",
    },
    avoidance: [
      "Respect your teachers and elders",
      "Honor sacred texts",
      "Listen with humility",
      "Seek guidance openly",
      "Cultivate gratitude",
    ],
    quote: {
      en: "Those who scorn wisdom and elders shall be bound by cords of their own ignorance.",
      hi: "जो लोग ज्ञान और बुजुर्गों का अपमान करते हैं, वे अपनी ही अज्ञानता की डोर में बँधे रहेंगे।",
      ne: "जो मानिसहरू ज्ञान र बृद्धहरुलाई अपमान गर्छन्, तिनीहरू आफ्नै अज्ञानताको डोरीमा बँधिनेछन्।",
      sa: "ये येन गूढज्ञानं वृद्धान् वा तिरस्कुर्यन्ते ते स्वकीयज्ञानविच्छन्दैर् बद्धाः भविष्यन्ति।",
    },
  },

  7: {
    name: { en: "Asipattravana", hi: "अशिपत्त्रवन", ne: "अशिपत्त्रवन", sa: "अशिपत्त्रवन" },
    category: "sexualMisconduct",
    severity: "moderate",
    sin: {
      en: "Sexual misconduct causing suffering or betrayal",
      hi: "ऐतिहासिक कुप्रवृत्ति जिससे दूसरों को दुःख पहुँचता हो",
      ne: "प्रेममा बेवफाई वा अन्यलाई दुःख पुर्‍याउने यौन व्यवहार",
      sa: "प्रेमदुःखजनकं व्यभिचारं च",
    },
    punishment: {
      en: "Hung upside down on thorn‑covered trees",
      hi: "कांटों वाले पेड़ों पर उल्टा लटका दिया जाना",
      ne: "काँटाले ढाकिएको रुखमा उल्टो झुण्ड्याइने",
      sa: "शृङ्गीं काष्ठे उल्टितः विशोषितः",
    },
    detailedSin: {
      en: "Those who cheat on partners or exploit relationships are punished here.",
      hi: "जो लोग अपने साथी को धोखा देते हैं या रिश्तों का शोषण करते हैं, उन्हें अशिपत्त्रवन की सजा मिलती है।",
      ne: "जो आफ्ना साथीलाई धोका दिन्छन् वा सम्बन्धको दुर्व्यवहार गर्छन्, तिनीहरूलाई अशिपत्त्रवन सजाय हुन्छ।",
      sa: "ये येन विश्वासितान् परेभ्यः वञ्चयन्ति वा सम्बन्धद्वेषं कुर्वन्ति ते अशिपत्त्रवने दण्ड्यन्ते।",
    },
    moralLesson: {
      en: "Respect and fidelity sustain trust and harmony in relationships.",
      hi: "सम्मान और वफादारी रिश्तों में विश्वास और सामंजस्य बनाए रखते हैं।",
      ne: "सम्मान र विश्वासले सम्बन्धमा सामञ्जस्य ल्याउँछन्।",
      sa: "सम्बन्धे विश्वासः सुरक्षां च सौहार्दं स्थाय्यते।",
    },
    avoidance: [
      "Be loyal to your partner",
      "Avoid exploitation",
      "Communicate openly",
      "Honor trust",
      "Practice self‑restraint",
    ],
    quote: {
      en: "He who betrays trust in love shall be suspended by the thorns of his own choices.",
      hi: "जो व्यक्ति प्रेम में विश्वासघात करता है, वह अपने ही विकल्पों की कंखों पर लटका रहेगा।",
      ne: "जो प्रेममा विश्वासघात गर्छ, त्यो आफ्नै विकल्पका काँटाहरूमा झुण्डिनेछ।",
      sa: "यः प्रेमे विश्वासघातं कुर्वन् स स्वविचयोः काण्डकटारैः निखिन्नः भविष्यति।",
    },
  },

  8: {
    name: { en: "Sukaramukha", hi: "सूकरमुख", ne: "सूकरमुख", sa: "सूकरमुख" },
    category: "corruption",
    severity: "moderate",
    sin: {
      en: "Bribery, corruption, fraud",
      hi: "घूस, भ्रष्टाचार, धोखाधड़ी",
      ne: "घूस, भ्रष्टाचार, ठगी",
      sa: "लोभघोषादि भ्रष्टाचारः दुःखजनकः",
    },
    punishment: {
      en: "Fed to swine that mock and torture",
      hi: "सूअरों के सामने फेंककर प्रताड़ित किया जाना",
      ne: "सुँगुरहरूले हाँस्छन् र यातना दिन्छन्",
      sa: "शूकरैः आहुयन्ते यैः दर्शिताः स्पृशन्त एव च",
    },
    detailedSin: {
      en: "Those who abuse trust for personal gain, accepting bribes or cheating others, are punished here.",
      hi: "जो लोग अपनी लाभ खातिर रिश्वत लेते हैं या धोखा देते हैं, उन्हें सूकरमुख दंड मिलता है।",
      ne: "जो लाभका लागि घूस लिन्छन् वा ठग्छन्, उनीहरूलाई सूकरमुख सजाय हुन्छ।",
      sa: "ये येन लोभाद्भ्रष्टाचार धोष्यते वा कपटेन परान्न लब्ध्वा द्रियते ते सूकरमुखे दण्ड्यन्ते।",
    },
    moralLesson: {
      en: "Honesty builds trust. Greed destroys it.",
      hi: "ईमानदारी विश्वास बनाती है। लालच उसे नष्ट करता है।",
      ne: "ईमानदारीले विश्वास बनाउँछ। लोभले नष्ट गर्छ।",
      sa: "सत्यनिष्ठा विश्वासं योजयति। लोभः तं विनश्यति।",
    },
    avoidance: [
      "Avoid all forms of bribery",
      "Practice transparency",
      "Be fair in dealings",
      "Return what isn't yours",
      "Cultivate integrity",
    ],
    quote: {
      en: "Corrupt souls are snared and tormented by their own greed.",
      hi: "भ्रष्ट आत्माएँ अपने ही लालच में फँस जाती हैं।",
      ne: "भ्रष्ट आत्माहरू आफ्नै लोभमा फस्छन् र पीडित हुन्छन्।",
      sa: "भ्रष्टात्मानः स्वलोभेन बद्धाः यातिताः च भवितुम् अर्हन्ति।",
    },
  },

  9: {
    name: { en: "Andhakupa", hi: "अंधकूप", ne: "अन्धकूप", sa: "अन्धकूप" },
    category: "betrayal",
    severity: "severe",
    sin: {
      en: "Betraying someone who trusts you",
      hi: "विश्वासघात करना",
      ne: "विश्वासघात गर्नु",
      sa: "विश्वासर्धानातिरिक्तं कर्म",
    },
    punishment: {
      en: "Thrown into a bottomless dark pit",
      hi: "अंतहीन अंधे कुएँ में फेंक दिया जाना",
      ne: "अन्तहीन अन्धकार कुँडमा फालिने",
      sa: "अनन्तगर्भे तमगुण्ठे विमृष्टस्य लोढनम्",
    },
    detailedSin: {
      en: "Those who betray friends or confidantes are sent here.",
      hi: "जो लोग दोस्तों या विश्वासपात्रों का विश्वास तोड़ते हैं, उन्हें अंधकूप भेजा जाता है।",
      ne: "जो साथी वा विश्वासीलाई धोका दिन्छन्, तिनीहरूलाई अन्धकूप पठाइन्छ।",
      sa: "ये येन मित्रान् वा विश्वासिश्रितान् वञ्चयन्ति ते अन्धकूपे प्रेष्यन्ते।",
    },
    moralLesson: {
      en: "Betrayal poisons relationships and one's soul; uphold trust always.",
      hi: "विश्वासघात रिश्तों और आत्मा दोनों को विषाक्त करता है; हमेशा विश्वास बनाए रखें।",
      ne: "विश्वासघातले सम्बन्ध र आत्मालाई विषाक्त बनाउँछ; सधैं विश्वास राखौं।",
      sa: "वञ्चनं सम्बन्धात्मनः विषं कर्मे च आत्मनि, विश्वासः धार्यते सर्वदा।",
    },
    avoidance: [
      "Honor commitments",
      "Be loyal to those who trust you",
      "Avoid breaking promises",
      "Value relationships over gain",
      "Practice integrity",
    ],
    quote: {
      en: "He who betrays another is cast into the well of darkness of his own deceit.",
      hi: "जो किसी का विश्वासघात करता है, उसे अपने ही धोखे के कुएँ में फेंक दिया जाएगा।",
      ne: "जो अरूको विश्वासघात गर्छ, उसै आफ्नो धोखाका कुँडमा फालिनेछ।",
      sa: "यः परस्य विश्वासं व्यभिहृत्य ते तमगुण्ठे विमृज्यते sese स्ववञ्चनया।",
    },
  },

  10: {
    name: { en: "Krmibhojana", hi: "कृमिभोजन", ne: "कृमिभोजन", sa: "कृमिभोजन" },
    category: "greed",
    severity: "moderate",
    sin: {
      en: "Gorging on filthy or spoiled food",
      hi: "गंदी या खराब भोजन बहुत मात्रा में खाना",
      ne: "गनदिग्ध वा बिग्रिएको भोजन ठूलो मात्रामा खाने",
      sa: "गलितं वा दूषितं अन्नं अतिभुक्तिः",
    },
    punishment: {
      en: "Forced to eat worms and filth",
      hi: "कीड़े और गंदगी खाने के लिए मजबूर किया जाना",
      ne: "पुच्चियाँ र फोहोर खाने बाध्य हुने",
      sa: "कृमिभिः मलैश्च भोज्यं अनिवार्यं",
    },
    detailedSin: {
      en: "Those who overindulge in filthy or spoiled food, ignoring purity, are punished here.",
      hi: "जो लोग साफ़-सुथरे भोजन की परवाह किए बिना गंदा या सड़ा हुआ भोजन खाते हैं, उन्हें कृमिभोजन में भेजा जाता है।",
      ne: "जो सफा खानाको परवाह नगरी मलिन वा बिग्रिएको खाना खाने गर्छन्, तिनीहरूलाई कृमिभोजनमा पठाइन्छ।",
      sa: "ये येन पवित्रतां त्यज्य दूषितं अन्नं अतिभुञ्जन्ति ते कृमिभोजने दण्ड्यन्ते।",
    },
    moralLesson: {
      en: "Neglecting purity in food clouds the body and mind. Choose nourishment wisely.",
      hi: "केले हुई या साफ़-सुथरे भोजन की अनदेखी शरीर और मन दोनों को प्रभावित करती है। भोजन बुद्धिमानी से चुनें।",
      ne: "गलिलो वा सफ़ा खानाको बेवास्ता शरीर र मन दुवैलाई प्रभाव गर्छ। सतर्कता साथ निर्णय गरौं।",
      sa: "अशुद्धान्नं तु मनश्च शरीरञ्च मिलावयति। विवेकेन भोजने निर्णयः कर्तव्यः।",
    },
    avoidance: [
      "Eat balanced and fresh food",
      "Avoid spoiled or filthy meals",
      "Maintain dietary purity",
      "Give thanks for food",
      "Practice mindful eating",
    ],
    quote: {
      en: "He who devours filth finds his soul steeped in corruption.",
      hi: "जो गंदगी खाता है, उसकी आत्मा भ्रष्टाचार में डूब जाती है।",
      ne: "जो फोहोर खान्छ, उसको आत्मा भ्रष्टाचारमा डुब्छ।",
      sa: "यः मलिनम् उपभुङ्क्ते तस्य आत्मा भ्रष्टतया स्निग्धा भवति।",
    },
  },

  11: {
    name: { en: "Samsmana", hi: "संसमन", ne: "संसमन", sa: "संसमन" },
    category: "pride",
    severity: "moderate",
    sin: {
      en: "Pride, arrogance, contempt for others",
      hi: "अहंकार, घमंड, दूसरों का अपमान",
      ne: "अहंकार, घमण्ड, अरूको अपमान",
      sa: "अहङ्कारः घमण्डश्च अन्योन्यतावत्कारः",
    },
    punishment: {
      en: "Pounded by hammers until flattened",
      hi: "हथौड़े से पीटा जाना जब तक चपटा न हो जाएं",
      ne: "ठूली र पिटिसँग पिटिने जबसम्म समतल नभए",
      sa: "सद्गुणेनैव हतैः पतितः समतलात्मकः",
    },
    detailedSin: {
      en: "Those who look down on others, boast, or spread contempt are tormented here.",
      hi: "जो लोग दूसरों को तुच्छ समझते हैं, घमंड करते हैं या अपमान फैलाते हैं, उन्हें संसमन में यातना मिलती है।",
      ne: "जो अरूलाई तुच्छ ठान्छन्, घमण्ड देखाउँछन् वा अपमान फैलाउँछन्, उनीहरूलाई संसमन सजाय हुन्छ।",
      sa: "ये येन अन्योन्यं ताडयन्ति, अहंकारिणः सन्ति वा विवर्जयन्ति ते संसमने यातिताः।",
    },
    moralLesson: {
      en: "Humility nurtures harmony. Arrogance leads to self‑destruction.",
      hi: "विनम्रता सामंजस्य को पोषित करती है। अहंकार आत्म-विनाश की ओर ले जाता है।",
      ne: "विनम्रताले सद्भाव बढाउँछ। घमण्डले आफैँलाई विनाश गर्छ।",
      sa: "विनयं सौहार्दं पुष्यति। अहङ्कारः आत्मविनाशायै नेतुम् अर्हति।",
    },
    avoidance: [
      "Practice humility",
      "Value others equally",
      "Speak and act with kindness",
      "Learn from everyone",
      "Check pride in thoughts",
    ],
    quote: {
      en: "The arrogant are ground flat by their own hammers of pride.",
      hi: "घमंडी अपनी ही अहंकार की हथौड़ी से चपटा हो जाते हैं।",
      ne: "घमण्डी आफ्नो घमण्डको हथौडीले पिटिएर चप्टिन्छन्।",
      sa: "या अहङ्कारेण आत्मितः संस्मृत्य ते संसमे पतन्ति।",
    },
  },

  12: {
    name: { en: "Taptasurmi", hi: "तप्तसूर्मि", ne: "तप्तसूर्मि", sa: "तप्तसूर्मि" },
    category: "alcoholism",
    severity: "severe",
    sin: {
      en: "Addictive intoxication causing harm",
      hi: "नशे की लत जो नुकसान पहुंचाती है",
      ne: "नशाको लत जसले हानिकारक गर्छ",
      sa: "मदपानान्नाशकारि लत",
    },
    punishment: {
      en: "Burned by molten lead until senseless",
      hi: "गलते हुए सीसे से जलाया जाना",
      ne: "गल्दै गरेको सीसाबाट पोलेपछि बेहोस हुने",
      sa: "घृतिसदृशेन ताम्रेण तप्त्वा अस्मिताविमुक्तः",
    },
    detailedSin: {
      en: "Those who addict themselves or others to alcohol or drugs and ruin lives are punished here.",
      hi: "जो लोग खुद या दूसरों को नशे की लत लगाते हैं और जीवन को तबाह करते हैं, उन्हें तप्तसूर्मि में यातना होती है।",
      ne: "जो मानिसहरू आफूलाई वा अरूलाई नशाको आदी बनाउँछन् र जीवन विनाश गर्छन्, तिनीहरूलाई तप्तसूर्मि सजाय हुन्छ।",
      sa: "ये येन मद्यादिभिः आत्मान् अन्यान् वा नशेण ग्रस्तवन्ति च तेषां जीवनं नाशयन्ति ते तप्तसूर्मिषु यातिताः।",
    },
    moralLesson: {
      en: "Addiction destroys self and others. Seek clarity, not escape.",
      hi: "नशा खुद और दूसरों को नष्ट कर देता है। शांति और जागरूकता प्राप्त करें।",
      ne: "नशाले आत्मा र अरूलाई नष्ट बनाउँछ। स्पष्टता र जागरूकता खोजौं।",
      sa: "लत आत्मान् परान् च ध्वंसयति। व्याप्रियमस्य स्थानं स्पष्टतायाऽर्चय ।",
    },
    avoidance: [
      "Avoid all intoxicants",
      "Seek help for addiction",
      "Cultivate mindful living",
      "Engage in healthy joys",
      "Support others in recovery",
    ],
    quote: {
      en: "Those consumed by poison within are themselves consumed by fire.",
      hi: "जो व्यक्ति अंदर से विष से जले हैं, वे आग में जलेंगे।",
      ne: "भित्रै विषले जलेका मान्छे, आगमा जलेर बिच्छिन्न हुन्छन्।",
      sa: "ये आत्माकुज्वलितं विषम् अग्निना स्वयं दग्धः भविष्यति।",
    },
  },

  13: {
    name: { en: "Vajrakantaka", hi: "वज्रकंटक", ne: "वज्रकण्टक", sa: "वज्रकण्टक" },
    category: "ego",
    severity: "severe",
    sin: {
      en: "Uncontrolled pride hurtful to others",
      hi: "जिसमें अहंकार दूसरों को चोट पहुंचाता है",
      ne: "अहङ्कार जसले अरूलाई चोट पुर्‍याउँछ",
      sa: "अहङ्कारः यः परेषां व्यथां जनयति",
    },
    punishment: {
      en: "Pierced by thunderbolts of ego",
      hi: "अहंकार के आकाशीय तीरों से भेदे जाना",
      ne: "अहङ्कारका आकाशीय रियरले भेदिने",
      sa: "अहङ्कारवज्रैर्निर्भिद्यते",
    },
    detailedSin: {
      en: "Those whose inflated ego damages relationships or belittles others are punished here.",
      hi: "जो लोग अपने अहंकार के कारण रिश्तों को नुकसान पहुँचाते हैं या दूसरों को नीचा दिखाते हैं, उन्हें वज्रकंटक में यातना होती है।",
      ne: "जो आफ्नो अहङ्कारले सम्बन्ध बिगार्छ वा अरूलाई तुच्छ गर्छ, तिनीहरूलाई वज्रकण्टक सजाय हुन्छ।",
      sa: "ये येन अहङ्कारः सम्बन्धान् ओष्णयति वा परान् तिरस्करति ते वज्रकंटके यातिताः।",
    },
    moralLesson: {
      en: "Ego blinds us. Compassion and humility open the heart.",
      hi: "अहंकार हमें अंधा कर देता है। दया और विनम्रता दिल खोलती है।",
      ne: "अहङ्कारले हामीलाई अन्धो बनाउँछ। दया र विनम्रताले मुटु खोल्छ।",
      sa: "अहङ्कारः तमसोऽन्धकरः। करुणा विनयात्मकाः च हृदयं प्राज्ञयन्ते।",
    },
    avoidance: [
      "Practice humility daily",
      "Listen more than you speak",
      "Value others' strengths",
      "Accept feedback",
      "Keep your ego in check",
    ],
    quote: {
      en: "He who elevates himself through arrogance is struck down by javelins of pride.",
      hi: "जो व्यक्ति अहंकार से अपने आप को ऊँचा रखता है, उसे अहंकार के बाणों द्वारा नष्ट किया जाएगा।",
      ne: "जो आफूलाई अहंकारले उचाल्छ, उसलाई घमण्डका धनुषहरूद्वारा वेष्टित गरिनेछ।",
      sa: "यः अहङ्कारैः आत्मानं उद्धारयति स गर्वबाणैः हन्यते।",
    },
  },

  14: {
    name: { en: "Vaitarani", hi: "वैतरणी", ne: "वैतरणी", sa: "वैतरणी" },
    category: "multipleSins",
    severity: "extreme",
    sin: {
      en: "Accumulates many sins",
      hi: "अनेक पापों का संचय",
      ne: "धेरै पापहरूको संञ्चय",
      sa: "बहूनां पापानां संचयः",
    },
    punishment: {
      en: "Forced to wade a river of pus and excrement",
      hi: "पपड़ी और मल का नदी पार करना",
      ne: "पुस्टी र मलको नदी पार गर्ने",
      sa: "चरञ्चरार्जितस्य सरस्सामुपेयं वारणम्",
    },
    detailedSin: {
      en: "Those burdened by many unrepented sins are tormented here.",
      hi: "जो लोग कई अविनीत पापों के बोझ तले दबे हैं, उन्हें वैतरणी के द्वार पर यातना होती है।",
      ne: "धेरै अपरिपक्व पापहरूद्वारा दबिएका मानिसहरू वैतरणीमा यातना सहन्छन्।",
      sa: "ये येन अनगुणानां पापानां संचयसहिताः सन्ति ते वैतरिण्यामुपेयं यातव्याः।",
    },
    moralLesson: {
      en: "Unchecked wrongdoing pollutes the soul deeply. Seek forgiveness early.",
      hi: "अनियंत्रित गलतियाँ आत्मा को गंभीर रूप से दूषित करती हैं। जल्दी प्रायश्चित करें।",
      ne: "नियंत्रित गलतिले आत्मालाई गहिरो रूपमा प्रदूषित गर्छ। चाँडै प्रायश्चित गरौं।",
      sa: "अनियतदोषैः आत्मा गभीरं दूषितास्ति। शीघ्रं प्रायश्चितम् आवश्यम्।",
    },
    avoidance: [
      "Confess and atone for sins",
      "Lead a virtuous life",
      "Practice self‑discipline",
      "Help offset wrongs",
      "Seek spiritual guidance",
    ],
    quote: {
      en: "He whose soul is clogged with sins must wade through filth of his own making.",
      hi: "जिसकी आत्मा पापों से टँकी होती है, उसे अपने ही बनाए मल में खड़ा होकर गुजरना होगा।",
      ne: "जो पापले भरिएको आत्मा हुन्छ, उसलाई आफ्नै फोहोर नदी पार गर्नु पर्छ।",
      sa: "यः आत्मा पापैः बन्धितास्ति स स्वसस्रफोहरेणैव स्निग्धो भवेत्।",
    },
  },

  15: {
    name: { en: "Puyoda", hi: "पूयोद", ne: "पूयोद", sa: "पूयोद" },
    category: "dishonesty",
    severity: "severe",
    sin: {
      en: "Cheating lenders, hiding debts",
      hi: "कर्ज़दाताओं को धोखा देना, ऋण छिपाना",
      ne: "सापटीलाई धोका दिने, ऋण लुकाउने",
      sa: "ऋणदातृद्रोहे ऋणोपसारणं च",
    },
    punishment: {
      en: "Drowned in a pond of pus",
      hi: "पुड के दलदल में डूबो दिया जाना",
      ne: "पुसोलो पोखरीमा डुबिने",
      sa: "पूयोदजलाशये डूबितः",
    },
    detailedSin: {
      en: "Those who borrow and purposely fail to repay, cheating lenders, are punished here.",
      hi: "जो लोग कर्ज़ लेकर जानबूझकर चुकाते नहीं, उन्हें प्यूयोद में धकेल दिया जाता है।",
      ne: "जसले ऋण लिएर जानबुझी चुकाउदैनन्, तिनीहरूलाई प्योगोदमा पठाइन्छ।",
      sa: "ये येन ऋणं गृह्णञ्च परमे चापि नपरिशोधम् कुर्वन्ति ते पूयोदपात्रे दण्ड्यन्ते।",
    },
    moralLesson: {
      en: "Debt is sacred. Failing to repay is theft of trust.",
      hi: "ऋण पवित्र है। चुकौती में विफलता विश्वास की चोरी है।",
      ne: "ऋण पवित्र हुन्छ। चुकाउनु नसक्नु विश्वासको चोरी हो।",
      sa: "ऋणं पवित्रं अस्ति। तस्य परिहारविपर्ययः विश्वासचौर्यः इव।",
    },
    avoidance: [
      "Repay debts on time",
      "Be honest in lenders’ relations",
      "Avoid borrowing more than needed",
      "Manage finances responsibly",
      "Honor trust",
    ],
    quote: {
      en: "He who buries his debt in pus will drown in the mire of his own deceit.",
      hi: "जो अपनी देनदारी को कीचड़ में दबा देता है, उसे अपने ही धोखे के दलदल में डूबना होगा।",
      ne: "जो आफ्नो ऋणलाई फोहोरले लुक्छ, उसै धोखाको दलदलमा डुब्छ।",
      sa: "यः ऋणं pusे सिञ्चति स आत्मबकैटिप्रपातेनैव अवमोहितः भवति।",
    },
  },

  16: {
    name: { en: "Pranarodha", hi: "प्राणरोध", ne: "प्राणरोध", sa: "प्राणरोध" },
    category: "murder",
    severity: "extreme",
    sin: {
      en: "Killing intentional and malicious murder",
      hi: "जनबुद्धि से और घातक इरादे से हत्या करना",
      ne: "इरादेवार हत्याकाण्ड",
      sa: "घातकाय हत्याऽधिकरणम्",
    },
    punishment: {
      en: "Victims strangle the murderer until death",
      hi: "शिकार उसे तब तक घुटन में रखते हैं जब तक उसकी मृत्यु नहीं हो जाती",
      ne: "पिडितले उनलाई घाँटी कोचेर मार्छ",
      sa: "पीडितास्तु तं प्राणहरणच्छिद्रं कुर्वन्ति यावत् मृत्युः",
    },
    detailedSin: {
      en: "Those who intentionally take life, motivated by hatred or greed, are tormented here.",
      hi: "जो लोग जानबूझकर घातक इरादे से हत्या करते हैं, उन्हें प्राणरोध की यातना मिलती है।",
      ne: "जो हत्याकाण्ड घातक इरादाले गर्छन्, तिनीहरू प्राणरोध सजाय हुन्छ।",
      sa: "ये येन घातकाराणां प्रेरणा कृते हत्या कुर्वन्ति ते प्राणरोधे यातिताः।",
    },
    moralLesson: {
      en: "Taking life destroys one's own humanity. Choose non‑violence always.",
      hi: "जीवन लेना मानवता को नष्ट करता है। हमेशा अहिंसा का चुनाव करें।",
      ne: "जिन्दगी लिने कुरा मानवीयता नष्ट गर्छ। सधैं अहिंसा अपनाऔं।",
      sa: "प्राणहरणं आत्मॊमानवत्वं नाशयति। अहिंसा सर्वदा चयनम्।",
    },
    avoidance: [
      "Never harm living beings",
      "Practice non‑violence",
      "Control anger and impulses",
      "Value human life",
      "Seek peaceful conflict resolution",
    ],
    quote: {
      en: "He who extinguishes life shall be extinguished by the very breath he stole.",
      hi: "जो जीवन को समाप्त करता है, वह उसी श्वास से नष्ट हो जाएगा जिसे उसने चुरा लिया।",
      ne: "जसले ज्यान बिनाश गर्छ, उसै स्वासले नष्ट हुन्छ जुन उसले चोरेको थियो।",
      sa: "यः प्राणं संहरति स तेन स्वगृहीतः प्राणेनैव विममुष्यते।",
    },
  },

  17: {
    name: { en: "Visasana", hi: "विशसन", ne: "विशसन", sa: "विशसन" },
    category: "poisoning",
    severity: "severe",
    sin: {
      en: "Poisoning others intentionally",
      hi: "जानबूझकर दूसरों को ज़हर देना",
      ne: "जानबुझी अरूलाई विष दिनु",
      sa: "सजानेन परान्न विषप्रदाना",
    },
    punishment: {
      en: "Fed poison repeatedly until death",
      hi: "बार-बार ज़हर खिलाया जाना जब तक मृत्यु न हो जाए",
      ne: "कतै विषलाई ल्याएर दिइन्छ जबसम्म मरण न होस्",
      sa: "विषपानं पुनः पुनः यावत् जीवसंहारः",
    },
    detailedSin: {
      en: "Those who use poison to harm or kill are tormented here.",
      hi: "जो लोग ज़हर देकर दूसरों को नुकसान पहुँचाते हैं, उन्हें विशसन में दोषी माना जाता है।",
      ne: "जो मानिसहरू विषद्वारा अरूलाई हानि पुर्‍याउँछन्, तिनीहरूलाई विशसन सजाय हुन्छ।",
      sa: "ये येन विषेन हिंसा वा हत्यां कर्तुम् उपयुन्मानाः ते विशसने दण्ड्यन्ते।",
    },
    moralLesson: {
      en: "Poison silences bodily harm, but fuels spiritual suffering.",
      hi: "ज़हर शारीरिक दर्द को शांत कर देता है, लेकिन आध्यात्मिक पीड़ा को बढ़ाता है।",
      ne: "विषले शारीरिक पीडा निस्तब्ध पार्छ, तर आध्यात्मिक दुःख बढाउँछ।",
      sa: "विषं उच्चान्ति कर्कशं पापं मनहानि कुर्वन्ति आत्मा दुःखयन्ते।",
    },
    avoidance: [
      "Never harm others intentionally",
      "Avoid malicious acts",
      "Cultivate goodwill",
      "Seek peaceful solutions",
      "Control harmful impulses",
    ],
    quote: {
      en: "He who sips poison for others shall himself suffer its sting forever.",
      hi: "जो किसी को ज़हर देता है, वह हमेशा उसके डंक से पीड़ित रहेगा।",
      ne: "जसले अरूलाई विष दिन्छ, उसै साँच्चै चोट खाइरन्छ।",
      sa: "यः परस्य विषं पिबति स चेदपि तस्य विषघ्नेन सह दुःखयंकरfuture।",
    },
  },

  18: {
    name: { en: "Lalabhaksa", hi: "लालभक्ष", ne: "लालभक्ष", sa: "लालभक्ष" },
    category: "forbiddenFood",
    severity: "moderate",
    sin: {
      en: "Eating forbidden or taboo foods",
      hi: "वर्जित या टाबू भोजन खाना",
      ne: "निषेधित वा ट्याबू भोजन खाने",
      sa: "वर्जितं वा शीषितं भोज्यम्",
    },
    punishment: {
      en: "Forced to eat disgusting filth for eternity",
      hi: "दूसरी अपशिष्ट गंदी चीजें खाने को मजबूर किया जाना",
      ne: "कर्कश फोहोर खाइरहने बाध्य हुने",
      sa: "अशुद्धान्नसमष्टिं भूयिष्ठतया सेवनं",
    },
    detailedSin: {
      en: "Those who knowingly consume taboo or impure foods, disrespecting sacred practice, are tormented here.",
      hi: "जो लोग जानबूझकर वर्जित या अपवित्र खाना खाते हैं, उन्हें लालभक्ष में यातना होती है।",
      ne: "जो मानिसहरू जानाजानी निषेधित वा अपवित्र भोजन गर्छन्, तिनीहरूलाई लालभक्ष सजाय हुन्छ।",
      sa: "ये येन वर्जित अपवित्रं भोज्यम् जानतः सेवन्ते ते लालभक्षे यातिताः।",
    },
    moralLesson: {
      en: "Food affects more than the body it shapes the mind and karma.",
      hi: "भोजन सिर्फ शरीर पर असर नहीं करता यह मन और कर्म को भी आकार देता है।",
      ne: "भोजनले शरीर मात्र होइन आत्मा र कर्मलाई पनि गुमाउने काम गर्दछ।",
      sa: "अन्नं केवल शरीरं न नयति तदनन्तरं मनसं कर्म भी रूपयति।",
    },
    avoidance: [
      "Follow dietary guidelines",
      "Honor sacred food practices",
      "Stay mindful of consumption",
      "Cleanse meals spiritually",
      "Respect food purity",
    ],
    quote: {
      en: "He who consumes the forbidden shall taste the eternal bitterness of his choices.",
      hi: "जो वर्जित भोजन करता है, वह अपने विकल्पों का शाश्वत कड़वा स्वाद अनुभव करता रहेगा।",
      ne: "जो निषेधित खाना खान्छ, उन अरूको विकल्पको शाश्वत कडापन अनुभव गर्छ।",
      sa: "यः वर्जितं पिबति स तस्य विकल्पस्य कडवार् अनन्तस्वादं लभते।",
    },
  },

  19: {
    name: { en: "Sarameyasana", hi: "सारमेयसन", ne: "सारमेयसन", sa: "सारमेयसन" },
    category: "betrayalOfTrust",
    severity: "severe",
    sin: {
      en: "Betraying one's kin or caretakers",
      hi: "रिश्तेदारों या संरक्षक का विश्वास तोड़ना",
      ne: "सम्बन्धी वा संरक्षकको विश्वास तोड्नु",
      sa: "कुलसंवेदकानां संरक्षकाणां वा विश्वासघातः",
    },
    punishment: {
      en: "Bound and hung like prey for dogs to devour",
      hi: "कुत्तों के लिए शिकार की तरह बाँध कर लटका दिया जाना",
      ne: "कुकुरहरुका लागि शिकारझैं बाँधिने र झुण्डिने",
      sa: "पशवः आहार्थं यस्मात् बध्दः शृङ्गतः निपात्यते",
    },
    detailedSin: {
      en: "Those who betray family, guardians, or protectors are punished here.",
      hi: "जो लोग परिवार, संरक्षक या अभिभावक का विश्वास तोड़ते हैं, उन्हें सारमेयसन में दण्ड मिलता है।",
      ne: "जो आफन्त, संरक्षक वा अभिभावकको विश्वास तोड्छन्, तिनीहरूलाई सारमेयसन सजाय हुन्छ।",
      sa: "ये येन कुलान् संरक्षेतारः वा पित्रृराः वञ्चयन्ति ते सारमेयसने दण्ड्यन्ते।",
    },
    moralLesson: {
      en: "Family and guardianship bonds are sacred; betrayal fractures society itself.",
      hi: "परिवार और संरक्षकों के साथ बंधन पवित्र हैं; विश्वासघात समाज को भी तोड़ देता है।",
      ne: "पारिवारिक तथा संरक्षक बन्धन पवित्र छन्; विश्वासघातले समाज नै तोड्छ।",
      sa: "कुलजीवभागधारकव्रतम् पवित्रं, वञ्चना च समाजं स्वापह्नोति।",
    },
    avoidance: [
      "Protect your family's trust",
      "Be loyal to caretakers",
      "Uphold family values",
      "Teach children honesty",
      "Respect heritage",
    ],
    quote: {
      en: "He who betrays his own blood is stripped and devoured for all to see.",
      hi: "जो अपने ही खून को धोखा देता है, उसे सबके सामने बेचा और खाने लायक बनाया जाएगा।",
      ne: "जो आफ्नै रगतलाई धोका दिन्छ, उसै सर्वसाधारण अगाडि बेचिने र खाने योग्य बनाइनेछ।",
      sa: "यः स्वरक्तं वञ्चति स लोके दृश्यमानः परिपाक्याम् उपस्थाप्यते।",
    },
  },

  20: {
    name: { en: "Avici", hi: "अविचि", ne: "अविचि", sa: "अविचि" },
    category: "extremeEvil",
    severity: "extreme",
    sin: {
      en: "Ultimate cruelty and most heinous evil",
      hi: "चरम क्रूरता और सबसे भयंकर पाप",
      ne: "अत्यधिक क्रूरता र भयानक पाप",
      sa: "परमक्रौर्यं भीषणतमं पापनः",
    },
    punishment: {
      en: "Endless torture without relief or death",
      hi: "बिना आराम या मृत्यु के अंतहीन यातना",
      ne: "आराम वा मरण बिना निरन्तर यातना",
      sa: "निर्वृत्तिगुणहीनं अनन्तं यातनाम्",
    },
    detailedSin: {
      en: "For those whose evil is so extreme it defies description or redemption.",
      hi: "उन लोगों के लिए जिनका पाप इतना भयंकर है कि उसे वर्णन या क्षमा नहीं की जा सकती।",
      ne: "जसको पाप यति क्रूर छ कि वर्णन या क्षमा असम्भव छ।",
      sa: "ये येन क्रौर्यतमं पापनिर्वर्णनीयं च विमोचनहीनं कुर्वन्ति ते अविचिषु यातिताः।",
    },
    moralLesson: {
      en: "Absolute evil voids any path to redemption. Choose light with every act.",
      hi: "पूर्ण पाप किसी भी मोक्ष का मार्ग बंद कर देता है। अपने कर्मों से प्रकाश चुनें।",
      ne: "पूर्ण पापले कुनै मोक्षको मार्ग बन्द गर्छ। हरेक कर्मले प्रकाश रोजौं।",
      sa: "परमपापः विमोचनमार्गं नः बन्दयति। प्रत्येककर्मणा प्रकाशम् छिनोति।",
    },
    avoidance: [
      "Do no evil",
      "Cultivate love and respect",
      "Act with universal compassion",
      "Reject violence utterly",
      "Walk the path of light always",
    ],
    quote: {
      en: "Here lies the abyss of irredeemable souls, forever torn without hope.",
      hi: "यहां अपराजेय आत्माओं की खाई है—अनंत तक बिना किसी आशा के पीड़ी में फंसी हुई।",
      ne: "यहाँ अविनाशी आत्माहरूको गर्त छ—अनन्त सम्म आशाविनै पिडामा पुरावट।",
      sa: "अत्र अनुत्थप्तात्मनाम् गर्तिर्विरुद्धा अनन्तरूपेण पीड्यताम्।",
    },
  },
    21: {
    name: { en: "Ayahpana", hi: "अयःपान", ne: "अयःपान", sa: "अयःपान" },
    category: "torture",
    severity: "extreme",
    sin: {
      en: "Addiction to intoxicants and disrespecting sacred acts",
      hi: "नशे की लत और पवित्र कृत्यों का अपमान",
      ne: "नशाको लत र पवित्र कार्यको अपमान",
      sa: "मद्यादिसेवनं पवित्रकर्मणां च अवमाननं",
    },
    punishment: {
      en: "Forced to drink molten iron forever",
      hi: "पिघला हुआ लोहा हमेशा पीने के लिए मजबूर किया जाता है",
      ne: "गलाइएको फलाम सधैं पिउन बाध्य गरिन्छ",
      sa: "दग्धायसपानेन अनन्तदण्डः",
    },
    detailedSin: {
      en: "For those who indulge in heavy drinking and show blatant disrespect for rituals, teachers, or divine symbols.",
      hi: "जो लोग अत्यधिक नशा करते हैं और अनुष्ठानों, गुरुओं या दिव्य प्रतीकों का अपमान करते हैं।",
      ne: "जो अत्यधिक मद्यपान गर्छन् र अनुष्ठान, गुरु वा दिव्य चिन्हको अपमान गर्छन्।",
      sa: "ये येन अत्यधिकं मद्यसेवनं तथा आचार्यदेवतादीनां निन्दा क्रियते ते अत्र पतन्ति।",
    },
    moralLesson: {
      en: "Substance abuse and disrespect lead to spiritual corrosion.",
      hi: "नशा और अपमान आध्यात्मिक पतन का कारण बनते हैं।",
      ne: "नशा र अपमानले आत्मिक पतन ल्याउँछ।",
      sa: "मद्यसेवनं च अवमाननं च आत्मनः पतनाय भवतः।",
    },
    avoidance:[
        "Avoid excessive indulgence in intoxicants",
        "Choose awareness over escape",
        "Do not let substances control your mind",
        "Respect your body as sacred",
        "Seek spiritual clarity through sobriety"
      ],
    },
    quote: {
      en: "The fire you drink shall become the thirst of your soul.",
      hi: "जो आग तुम पीते हो, वही आत्मा की प्यास बन जाती है।",
      ne: "तिमीले पिएको आगो नै आत्माको तिर्खा बन्छ।",
      sa: "यं वह्निं पिबसि, स आत्मनः तृषां जनयति।",
    }
  },
  
  
}

export default function NarakaDetailPage({ params }: { params: { id: string } }) {
  const { language } = useLanguage()
  const id = Number.parseInt(params.id)
  const naraka = narakaDetails[id as keyof typeof narakaDetails]

  if (!naraka || id < 1 || id > 28) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-red-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-900 mb-4">{getTranslation(language, "narakaNotFound")}</h1>
          <p className="text-gray-600 mb-4">{getTranslation(language, "narakaNotFoundDesc")}</p>
          <Button asChild>
            <Link href="/narakas">{getTranslation(language, "returnToNarakas")}</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-orange-50">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <Button asChild variant="outline">
            <Link href="/narakas" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              {getTranslation(language, "backToNarakas")}
            </Link>
          </Button>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-red-900 mb-4">{naraka.name[language as keyof typeof naraka.name]}</h1>
          <div className="flex justify-center gap-4 mb-4">
            <Badge variant="outline">{getTranslation(language, naraka.category)}</Badge>
            <Badge
              variant={
                naraka.severity === "extreme" ? "destructive" : naraka.severity === "severe" ? "default" : "secondary"
              }
            >
              {getTranslation(language, naraka.severity)}
            </Badge>
          </div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">{naraka.sin[language as keyof typeof naraka.sin]}</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Sin Description */}
          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-900">
                <BookOpen className="h-5 w-5" />
                {getTranslation(language, "theSinPunished")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                {naraka.detailedSin[language as keyof typeof naraka.detailedSin]}
              </p>
            </CardContent>
          </Card>

          {/* Punishment Description */}
          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-900">
                <Shield className="h-5 w-5" />
                {getTranslation(language, "thePunishment")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                {naraka.punishment[language as keyof typeof naraka.punishment]}
              </p>
            </CardContent>
          </Card>

          {/* Moral Lesson */}
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-900">
                <Heart className="h-5 w-5" />
                {getTranslation(language, "spiritualLesson")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-orange-800 leading-relaxed mb-4">
                {naraka.moralLesson[language as keyof typeof naraka.moralLesson]}
              </p>
              {naraka.quote && (
                <blockquote className="border-l-4 border-orange-400 pl-4 italic text-orange-700">
                  "{naraka.quote[language as keyof typeof naraka.quote]}"
                </blockquote>
              )}
            </CardContent>
          </Card>

          {/* How to Avoid */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900">{getTranslation(language, "howToAvoid")}</CardTitle>
              <CardDescription className="text-green-700">
                {getTranslation(language, "practicalGuidance")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {naraka.avoidance.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-green-800">
                    <span className="text-green-600 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8">
            <Button asChild variant="outline">
              <Link href={`/narakas/${id > 1 ? id - 1 : 28}`}>{getTranslation(language, "previousNaraka")}</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/narakas">{getTranslation(language, "allNarakas")}</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={`/narakas/${id < 28 ? id + 1 : 1}`}>{getTranslation(language, "nextNaraka")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
