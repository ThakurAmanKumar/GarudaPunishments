"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Filter } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/translations"

const narakas = [
  {
    id: 1,
    name: { en: "Tamisra", hi: "तमिस्र", ne: "तमिस्र", sa: "तामिस्रः" },
    category: "violence",
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
    severity: "moderate",
  },
  {
    id: 2,
    name: { en: "Andhatamisra", hi: "अंधतमिस्र", ne: "अन्धतमिस्र", sa: "अन्धतमिस्रः" },
    category: "childAbuse",
    sin: {
      en: "Deceiving or harming one's own children or dependents",
      hi: "अपने बच्चों या आश्रितों को धोखा देना या नुकसान पहुँचाना",
      ne: "आफ्ना बच्चा वा आश्रितलाई धोका दिने वा पीडा दिने",
      sa: "स्वकीयबालकानां वा आश्रितानां वञ्चना अथवा हिंसा",
    },
    punishment: {
      en: "Blinded in darkness and attacked by invisible tormentors",
      hi: "गहन अंधकार में अंधा कर दिया जाता है और अदृश्य प्रेत पीड़ा देते हैं",
      ne: "गहिरो अन्धकारमा अन्धो बनाई अदृश्य प्रेतहरूले सताउँछन्",
      sa: "अन्धतमसि चक्षुषं हरित्वा, अदृश्यैः यमदूतैः पीड्यते",
    },
    severity: "severe",
  },
  {
    id: 3,
    name: { en: "Raurava", hi: "रौरव", ne: "रौरव", sa: "रौरवः" },
    category: "cruelty",
    sin: {
      en: "Causing pain to living beings",
      hi: "जीवित प्राणियों को दर्द पहुंचाना",
      ne: "जीवित प्राणीहरूलाई दुःख दिने",
      sa: "जीवेषु पीडां कुर्वन्",
    },
    punishment: {
      en: "Tormented by fierce creatures called Rurus",
      hi: "रुरु नामक भयंकर जीवों द्वारा पीड़ित",
      ne: "रुरु भनिने डरलाग्दो जीवहरूद्वारा पीडा दिने",
      sa: "रुरुनामकैः भयानकैः जीवैः पीडितः",
    },
    severity: "severe",
  },
  {
    id: 4,
    name: { en: "Maharaurava", hi: "महाराौरव", ne: "महाराैरव", sa: "महाराौरवः" },
    category: "destruction",
    sin: {
      en: "Causing destruction of communities, environment, or mass suffering for selfish gains",
      hi: "समुदाय, पर्यावरण या जनसाधारण को स्वार्थवश नष्ट करना",
      ne: "समुदाय, वातावरण वा जनतालाई स्वार्थका लागि विनाश गर्नु",
      sa: "स्वार्थेन जनसमूहस्य वा पर्यावरणस्य विनाशनं",
    },
    punishment: {
      en: "Devoured by fiery beasts again and again amid unending screams",
      hi: "दहकते दैत्य बार-बार चबाते हैं, चारों ओर चीख-पुकार होती है",
      ne: "जलिरहेका जनावरहरूले बारम्बार चपाउँछन्, अन्त्यहीन चिच्याहटबीच",
      sa: "दह्यमानरौरोवैः पुनः पुनः भक्ष्यते निःश्रान्तनादेन सह",
    },
    severity: "extreme",
  },
  {
    id: 5,
    name: { en: "Kumbhipaka", hi: "कुम्भीपाक", ne: "कुम्भीपाक", sa: "कुम्भीपाकः" },
    category: "animalCruelty",
    sin: {
      en: "Killing animals and birds for pleasure",
      hi: "आनंद के लिए जानवरों और पक्षियों को मारना",
      ne: "आनन्दका लागि जनावर र चराहरूलाई मार्ने",
      sa: "आनन्दार्थं पशुपक्षिवधः",
    },
    punishment: {
      en: "Boiled in oil like the animals they killed",
      hi: "उन जानवरों की तरह तेल में उबाला जाना जिन्हें उन्होंने मारा",
      ne: "तिनीहरूले मारेका जनावरहरू जस्तै तेलमा उमालिने",
      sa: "स्वहतपशुवत् तैले क्वथितः",
    },
    severity: "severe",
  },
  {
    id: 6,
    name: { en: "Kalasutra", hi: "कलसूत्र", ne: "कलसूत्र", sa: "कालसूत्रः" },
    category: "disrespect",
    sin: {
      en: "Disrespecting parents, teachers, and elders",
      hi: "माता-पिता, शिक्षक र वृद्धों का अनादर",
      ne: "माता-पिता, शिक्षकहरू र वृद्धहरूको अनादर",
      sa: "मातृपितृगुरुवृद्धानां अनादरः",
    },
    punishment: {
      en: "Burned by hot iron threads and ropes",
      hi: "गर्म लोहे के धागों और रस्सियों से जलाया जाना",
      ne: "तातो फलामका धागो र डोरीहरूले जलाइने",
      sa: "तप्तलौहसूत्ररज्जुभिः दग्धः",
    },
    severity: "severe",
  },
  {
    id: 7,
    name: { en: "Asipatravana", hi: "असिपत्रवन", ne: "असिपत्रवन", sa: "असिपत्रवनम्" },
    category: "sexualMisconduct",
    sin: {
      en: "Adultery and sexual misconduct",
      hi: "व्यभिचार और यौन दुराचार",
      ne: "व्यभिचार र यौन दुराचार",
      sa: "परदारगमनं कामदुराचारश्च",
    },
    punishment: {
      en: "Cut by sword-like leaves in a forest",
      hi: "जंगल में तलवार जैसे पत्तों से काटा जाना",
      ne: "जंगलमा तरवार जस्ता पातहरूले काटिने",
      sa: "वने खड्गसदृशैः पत्रैः छिद्यते",
    },
    severity: "moderate",
  },
  {
    id: 8,
    name: { en: "Sukaramukha", hi: "सूकरमुख", ne: "सूकरमुख", sa: "सूकरमुखः" },
    category: "corruption",
    sin: {
      en: "Accepting bribes and corruption in duty",
      hi: "रिश्वत लेना और कर्तव्य में भ्रष्टाचार",
      ne: "घूस लिनु र कर्तव्यमा भ्रष्टाचार",
      sa: "उपहारग्रहणं कर्तव्ये भ्रष्टाचारश्च",
    },
    punishment: {
      en: "Face becomes like a pig, eating filth",
      hi: "चेहरा सुअर की तरह हो जाना, गंदगी खाना",
      ne: "अनुहार सुँगुर जस्तै बन्ने, फोहोर खाने",
      sa: "मुखं सूकरवत् भवति मलं भक्षयति",
    },
    severity: "moderate",
  },
  {
    id: 9,
    name: { en: "Andhakupa", hi: "अंधकूप", ne: "अन्धकूप", sa: "अन्धकूपः" },
    category: "betrayal",
    sin: {
      en: "Betraying trust and harming friends",
      hi: "विश्वासघात और मित्रों को हानि पहुंचाना",
      ne: "विश्वासघात र साथीहरूलाई हानि पुर्याउनु",
      sa: "विश्वासघातः मित्राणां च पीडा",
    },
    punishment: {
      en: "Thrown into dark wells with venomous creatures",
      hi: "विषैले जीवों के साथ अंधेरे कुओं में फेंका जाना",
      ne: "विषालु जीवहरूसँग अँध्यारो इनारमा फालिने",
      sa: "विषजन्तुभिः सह अन्धकूपे क्षिप्तः",
    },
    severity: "severe",
  },
  {
    id: 10,
    name: { en: "Krimibhojana", hi: "कृमिभोजन", ne: "कृमिभोजन", sa: "कृमिभोजनः" },
    category: "cannibalism",
    sin: {
      en: "Eating human flesh, harming others for food or taboo indulgence",
      hi: "मानव मांस खाना या वर्जित भोजन के लिए दूसरों को नुकसान पहुँचाना",
      ne: "मानव मासु खानु वा निषेधित भोजनका लागि अरुलाई पीडा दिनु",
      sa: "मानवमांसभक्षणं वा निषिद्धान्नसंपादनाय हिंसा",

    },
    punishment: {
      en: "Eaten alive by worms while simultaneously feeding on filth",
      hi: "जीवित रहते कीड़ों द्वारा खाया जाना और खुद गंदगी खाना",
      ne: "जिउँदै कीराबाट खाइने र आफैँ फोहोर खाने",
      sa: "जीवन्नपि कृमिभिः खाद्यते, मलमेव खादति च",
    },
    severity: "extreme",
  },
  {
    id: 11,
    name: { en: "Samsamana", hi: "संसमन", ne: "संसमन", sa: "संसमन्ः" },
    category: "pride",
    sin: {
      en: "Excessive pride and arrogance",
      hi: "अत्यधिक अहंकार और घमंड",
      ne: "अत्यधिक अहंकार र घमण्ड",
      sa: "अत्यधिकाहंकारः दर्पश्च",
    },
    punishment: {
      en: "Crushed repeatedly by heavy stones",
      hi: "भारी पत्थरों से बार-बार कुचला जाना",
      ne: "भारी ढुङ्गाहरूले बारम्बार कुचलिने",
      sa: "गुरुशिलाभिः पुनः पुनः पिष्टः",
    },
    severity: "moderate",
  },
  {
    id: 12,
    name: { en: "Taptasurmi", hi: "तप्तसूर्मि", ne: "तप्तसूर्मि", sa: "तप्तसूर्मिः" },
    category: "alcoholism",
    sin: {
      en: "Excessive drinking and intoxication",
      hi: "अत्यधिक शराब पीना और नशा करना",
      ne: "अत्यधिक रक्सी पिउने र नशा गर्ने",
      sa: "अत्यधिकमद्यपानं मादकसेवनं च",
    },
    punishment: {
      en: "Forced to drink molten iron",
      hi: "पिघला हुआ लोहा पीने के लिए मजबूर",
      ne: "पग्लिएको फलाम पिउन बाध्य पारिने",
      sa: "द्रवीभूतं लौहं पातुं बाध्यः",
    },
    severity: "severe",
  },
  {
    id: 13,
    name: { en: "Vajrakantaka", hi: "वज्रकंटक", ne: "वज्रकण्टक", sa: "वज्रकंटकः" },
    category: "ego",
    sin: {
      en: "Harming others due to ego and selfishness",
      hi: "अहंकार और स्वार्थ के कारण दूसरों को नुकसान पहुंचाना",
      ne: "अहंकार र स्वार्थका कारण अरूलाई हानि पुर्याउनु",
      sa: "अहंकारस्वार्थाभ्यां परेषां हानिकरणम्",
    },
    punishment: {
      en: "Pierced by diamond-hard thorns",
      hi: "हीरे जैसे कठोर कांटों से छेदा जाना",
      ne: "हिराजस्तै कडा काँडाहरूले छेडिने",
      sa: "वज्रकठिनैः कण्टकैः भिद्यते",
    },
    severity: "severe",
  },
  {
    id: 14,
    name: { en: "Vaitarani", hi: "वैतरणी", ne: "वैतरणी", sa: "वैतरणी" },
    category: "multipleSins",
    sin: {
      en: "Multiple grave sins and unrepentant behavior",
      hi: "कई गंभीर पाप और अपश्चाताप रहित व्यवहार",
      ne: "धेरै गम्भीर पापहरू र पश्चाताप नगर्ने व्यवहार",
      sa: "अनेकगुरुपापानि निष्पश्चात्तापव्यवहारश्च",
    },
    punishment: {
      en: "Forced to cross river of blood and pus",
      hi: "खून और मवाद की नदी पार करने के लिए मजबूर",
      ne: "रगत र पिपको नदी पार गर्न बाध्य पारिने",
      sa: "रुधिरपूयनदीं तरितुं बाध्यः",
    },
    severity: "extreme",
  },
  {
    id: 15,
    name: { en: "Puyoda", hi: "पूयोद", ne: "पूयोद", sa: "पूयोदः" },
    category: "dishonesty",
    sin: {
      en: "Persistent lying and false testimony",
      hi: "लगातार झूठ बोलना और झूठी गवाही देना",
      ne: "निरन्तर झूट बोल्ने र झूटो गवाही दिने",
      sa: "निरन्तरमिथ्यावादः मिथ्यासाक्ष्यं च",
    },
    punishment: {
      en: "Immersed in ocean of pus and filth",
      hi: "मवाद और गंदगी के समुद्र में डुबोया जाना",
      ne: "पिप र फोहोरको समुद्रमा डुबाइने",
      sa: "पूयमलसागरे निमज्जितः",
    },
    severity: "severe",
  },
  {
    id: 16,
    name: { en: "Pranarodha", hi: "प्राणरोध", ne: "प्राणरोध", sa: "प्राणरोधः" },
    category: "murder",
    sin: {
      en: "Taking life of innocent beings",
      hi: "निर्दोष प्राणियों की हत्या करना",
      ne: "निर्दोष प्राणीहरूको हत्या गर्ने",
      sa: "निर्दोषप्राणिवधः",
    },
    punishment: {
      en: "Breath repeatedly stopped and restored",
      hi: "सांस को बार-बार रोका और बहाल किया जाना",
      ne: "सास बारम्बार रोकिने र फेरि दिइने",
      sa: "प्राणाः पुनः पुनः रुद्धाः पुनर्दत्ताश्च",
    },
    severity: "extreme",
  },
  {
    id: 17,
    name: { en: "Visasana", hi: "विशसन", ne: "विशसन", sa: "विशसनम्" },
    category: "poisoning",
    sin: {
      en: "Poisoning others or spreading disease",
      hi: "दूसरों को जहर देना या बीमारी फैलाना",
      ne: "अरूलाई विष दिने वा रोग फैलाउने",
      sa: "परेषां विषदानं रोगप्रसारणं वा",
    },
    punishment: {
      en: "Tortured with various poisons",
      hi: "विभिन्न जहरों से यातना दी जाना",
      ne: "विभिन्न विषहरूले यातना दिइने",
      sa: "विविधविषैः यातना दीयते",
    },
    severity: "severe",
  },
  {
    id: 18,
    name: { en: "Lalabhaksa", hi: "लालभक्ष", ne: "लालभक्ष", sa: "लालभक्षकः" },
    category: "forbiddenFood",
    sin: {
      en: "Eating forbidden food and breaking dietary laws",
      hi: "निषिद्ध भोजन खाना और आहार नियमों का उल्लंघन",
      ne: "निषेधित खाना खाने र आहार नियमहरू उल्लंघन गर्ने",
      sa: "निषिद्धाहारसेवनं आहारनियमभंगश्च",
    },
    punishment: {
      en: "Forced to eat saliva and vomit",
      hi: "थूक और उल्टी खाने के लिए मजबूर",
      ne: "थुक र बान्ता खान बाध्य पारिने",
      sa: "लालां वमनं च भक्षितुं बाध्यः",
    },
    severity: "moderate",
  },
  {
    id: 19,
    name: { en: "Sarameyasana", hi: "सारमेयसन", ne: "सारमेयसन", sa: "सारमेयसनः" },
    category: "betrayalOfTrust",
    sin: {
      en: "Betraying those who trusted you",
      hi: "उन लोगों के साथ विश्वासघात जिन्होंने आप पर भरोसा किया",
      ne: "तपाईंमा भरोसा गर्नेहरूसँग विश्वासघात गर्ने",
      sa: "विश्वासकर्तृणां विश्वासघातः",
    },
    punishment: {
      en: "Torn apart by ferocious dogs",
      hi: "भयंकर कुत्तों द्वारा फाड़ा जाना",
      ne: "डरलाग्दो कुकुरहरूद्वारा च्यातिने",
      sa: "उग्रैः श्वानैः विदीर्यते",
    },
    severity: "severe",
  },
  {
    id: 20,
    name: { en: "Avici", hi: "अविचि", ne: "अविचि", sa: "अविचिः" },
    category: "extremeEvil",
    sin: {
      en: "Committing the most heinous crimes",
      hi: "सबसे जघन्य अपराध करना",
      ne: "सबैभन्दा घिनलाग्दो अपराध गर्ने",
      sa: "अत्यन्तघोराणि अपराधानि कुर्वन्",
    },
    punishment: {
      en: "Thrown from great heights repeatedly",
      hi: "बार-बार बड़ी ऊंचाई से गिराया जाना",
      ne: "बारम्बार ठूलो उचाइबाट खसालिने",
      sa: "महदुच्छ्रायात् पुनः पुनः पातितः",
    },
    severity: "extreme",
  },
  {
    id: 21,
    name: { en: "Ayahpana", hi: "अयःपान", ne: "अयःपान", sa: "अयःपानः" },
    category: "alcoholism",
    sin: {
      en: "Torturing others for pleasure",
      hi: "आनंद के लिए दूसरों को यातना देना",
      ne: "आनन्दका लागि अरूलाई यातना दिने",
      sa: "आनन्दार्थं परेषां यातनाकरणम्",
    },
    punishment: {
      en: "Forced to drink molten metal",
      hi: "पिघली हुई धातु पीने के लिए मजबूर",
      ne: "पग्लिएको धातु पिउन बाध्य पारिने",
      sa: "द्रवीभूतं धातुं पातुं बाध्यः",
    },
    severity: "severe",
  },
  {
    id: 22,
    name: { en: "Ksharakardama", hi: "क्षारकर्दम", ne: "क्षारकर्दम", sa: "क्षारकर्दमः" },
    category: "corruption",
    sin: {
      en: "Bribery, corruption, and misuse of authority",
      hi: "घूसखोरी, भ्रष्टाचार और अधिकारों का दुरुपयोग",
      ne: "घूस, भ्रष्टाचार र अधिकारको दुरुपयोग",
      sa: "घोषधनग्रहणं भ्रष्टाचारः च अधिकारस्य दुरुपयोगः",
    },
    punishment: {
      en: "Immersed in caustic mud and acid",
      hi: "कास्टिक कीचड़ और एसिड में डुबोया जाना",
      ne: "तीखो हिलो र एसिडमा डुबाइने",
      sa: "क्षारकर्दमे तीक्ष्णाम्ले च निमज्जितः",
    },
    severity: "severe",
  },
  {
    id: 23,
    name: { en: "Raksogana", hi: "राक्षोगण", ne: "राक्षोगण", sa: "राक्षोगणः" },
    category: "violence",
    sin: {
      en: "Killing innocents, mass violence, and bloodshed",
      hi: "निर्दोषों की हत्या, जनहिंसा और रक्तपात",
      ne: "निष्पापको हत्या, सामूहिक हिंसा र रगतपात",
      sa: "निर्दोषवधः जनहिंसा च रुधिरपातनं च",
    },
    punishment: {
      en: "Torn apart and devoured by bloodthirsty demons repeatedly",
      hi: "रक्तपिपासु राक्षसों द्वारा बार-बार फाड़ा और खाया जाना",
      ne: "रक्तपिपासु राक्षसहरूले बारम्बार च्यातेर खाने सजाय",
      sa: "रक्तलोभिनः राक्षसाः पुनः पुनः विदार्य खादन्ति",
    },
    severity: "extreme",
  },
  {
    id: 24,
    name: { en: "Sulaprota", hi: "शूलप्रोत", ne: "शूलप्रोत", sa: "शूलप्रोतः" },
    category: "cruelty",
    sin: {
      en: "Torturing others for pleasure or power",
      hi: "दूसरों को आनंद या शक्ति के लिए यातना देना",
      ne: "अरुलाई सुख वा शक्ति प्राप्तिका लागि पीडा दिनु",
      sa: "स्वसुखाय वा शक्त्यर्थं परपीड़नं",
    },
    punishment: {
      en: "Impaled by sharp spears from all directions, unending pain",
      hi: "चारों ओर से नुकीले शूलों से बींधा जाना, अंतहीन पीड़ा",
      ne: "सबैतिरबाट धारिला बर्छाले घोचिने, अन्त्य नहुने पीडा",
      sa: "सर्वतः तीक्ष्णैः शूलैः विदारितो नित्यदुःखं प्राप्नोति",
    },
    severity: "extreme",
  },
  {
    id: 25,
    name: { en: "Dandasuka", hi: "दंडशूक", ne: "दण्डशूक", sa: "दण्डसूकः" },
    category: "torture",
    sin: {
      en: "Spreading terror through threats, violence, or coercion",
      hi: "धमकी, हिंसा या ज़बरदस्ती से भय फैलाना",
      ne: "धम्की, हिंसा वा बलजफ्ती गरेर आतंक फैलाउनु",
      sa: "भीषया हिंसायाः बलात्कारेण च त्रासजननं",
    },
    punishment: {
        en: "Devoured repeatedly by venomous serpents",
        hi: "विषैले साँपों द्वारा बार-बार निगला जाना",
        ne: "विषालु सर्पहरूबाट बारम्बार निलिनु",
        sa: "दंशिनां सर्पाणां मुखेन पुनः पुनः निग्रस्यते",
    },
    severity: "severe",
  },
  {
    id: 26,
    name: { en: "Avata", hi: "अवट", ne: "अवट", sa: "अवतः" },
    category: "blasphemy",
    sin: {
      en: "Disrespecting sacred scriptures, saints, or divine rituals",
      hi: "पवित्र ग्रंथों, संतों या धार्मिक अनुष्ठानों का अपमान",
      ne: "पवित्र शास्त्र, सन्त वा धार्मिक कर्महरूको अपमान गर्नु",
      sa: "शास्त्रसन्तानां देवकर्मणां च निन्दा",
      },
    punishment: {
      en: "Thrown into a dark pit filled with venomous insects and filth",
      hi: "अंधेरे गड्ढे में डाला जाता है जहाँ जहरीले कीड़े और गंदगी होती है",
      ne: "अँध्यारो खाल्डोमा हालिन्छ जहाँ विषालु किरा र फोहोर हुन्छ",
      sa: "अन्धकूपे पतत्यसौ, यत्र विषकीटाः च मलिनानि सन्ति",
    },
    severity: "severe",
  },
  {
    id: 27,
    name: { en: "Paryavartana", hi: "पर्यावर्तन", ne: "पर्यावर्तन", sa: "पर्यावर्तनम्" },
    category: "betrayal",
    sin: {
      en: "Turning against one’s benefactor or helper out of envy or malice",
      hi: "अपने उपकारकर्ता के विरुद्ध ईर्ष्या या द्वेष से मुड़ जाना",
      ne: "उपकार गर्नेप्रति ईर्ष्या वा द्वेषले विद्रोह गर्नु",
      sa: "यस्य कृते उपकारः तस्य विरुद्धं इर्ष्यया वा द्वेषेण कार्यम्",
    },
    punishment: {
      en: "Endlessly rotated and crushed in a burning wheel of blades",
      hi: "जलते हुए चक्के में लगातार घुमाया और कुचला जाना",
      ne: "जलिरहेको पाङ्ग्रामा निरन्तर घुमाइने र पिसिने",
      sa: "दह्यमानचक्रे नित्यं परिभ्रम्य पिष्टः भवति",
    },
    severity: "extreme",
  },
  {
    id: 28,
    name: { en: "Suchimukha", hi: "सूचिमुख", ne: "सूचिमुख", sa: "सूचिमुखः" },
    category: "miserliness",
    sin: {
      en: "Extreme miserliness and hoarding wealth without any charity",
      hi: "अत्यधिक कंजूसी और दान में धन का उपयोग न करना",
      ne: "धेरै कन्जुस्याइँ र दान नगरी सम्पत्ति संकलन गर्नु",
      sa: "अत्यल्पव्ययः, दानेन रहितं धनार्जनं च",
    },
    punishment: {
      en: "Pierced all over the body with hot sharp needles",
      hi: "पूरे शरीर को गर्म और नुकीली सुइयों से बींधा जाना",
      ne: "सम्पूर्ण शरीर तातो र धारिला सुइहरूले छेडिन्छ",
      sa: "सर्वाङ्गं तप्तसूचिभिः विदारितं भवति"
    },
    severity: "severe",
  },
]

const categories = [
  "all",
  "violence",
  "cruelty",
  "animalCruelty",
  "disrespect",
  "sexualMisconduct",
  "corruption",
  "betrayal",
  "pride",
  "alcoholism",
  "ego",
  "multipleSins",
  "dishonesty",
  "murder",
  "poisoning",
  "forbiddenFood",
  "betrayalOfTrust",
  "extremeEvil",
  "torture",
  "childAbuse",
  "cannibalism",
  "destruction",
  "miserliness",
  "blasphemy",
]

export default function NarakasPage() {
  const { language } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredNarakas =
    selectedCategory === "all" ? narakas : narakas.filter((naraka) => naraka.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-orange-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-red-900 mb-4">{getTranslation(language, "narakasTitle")}</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">{getTranslation(language, "narakasDescription")}</p>
        </div>

        {/* Categories Filter */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-red-600" />
            <h3 className="text-lg font-semibold text-red-900">{getTranslation(language, "filterByCategory")}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`cursor-pointer transition-colors ${
                  selectedCategory === category
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "hover:bg-red-100 border-red-300 text-red-700"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {getTranslation(language, category)}
              </Badge>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-gray-600">
            {getTranslation(language, "showingResults")} {filteredNarakas.length}{" "}
            {getTranslation(language, "ofResults")} {narakas.length} {getTranslation(language, "narakasText")}
            {selectedCategory !== "all" &&
              ` ${getTranslation(language, "inCategory")} ${getTranslation(language, selectedCategory)}`}
          </p>
        </div>

        {/* Narakas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredNarakas.map((naraka) => (
            <Card key={naraka.id} className="hover:shadow-lg transition-shadow border-red-200">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-red-900">{naraka.name[language as keyof typeof naraka.name]}</CardTitle>
                  <Badge
                    variant={
                      naraka.severity === "extreme"
                        ? "destructive"
                        : naraka.severity === "severe"
                          ? "default"
                          : "secondary"
                    }
                  >
                    {getTranslation(language, naraka.severity)}
                  </Badge>
                </div>
                <CardDescription className="text-red-700">
                  {getTranslation(language, "category")}: {getTranslation(language, naraka.category)}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-800 mb-1">
                      {getTranslation(language, "sinPunished")}:
                    </h4>
                    <p className="text-sm text-gray-600">{naraka.sin[language as keyof typeof naraka.sin]}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-800 mb-1">
                      {getTranslation(language, "punishment")}:
                    </h4>
                    <p className="text-sm text-gray-600">
                      {naraka.punishment[language as keyof typeof naraka.punishment]}
                    </p>
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-full mt-4 bg-transparent hover:bg-red-50">
                    <Link href={`/narakas/${naraka.id}`} className="flex items-center justify-center gap-2">
                      {getTranslation(language, "learnMore")} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Educational Note */}
        <div className="bg-white rounded-lg p-8 shadow-lg border border-red-200">
          <h3 className="text-2xl font-semibold text-red-900 mb-4">
            {getTranslation(language, "understandingPurpose")}
          </h3>
          <p className="text-gray-700 mb-4">{getTranslation(language, "narakasEducationalNote")}</p>
          <p className="text-gray-700">{getTranslation(language, "narakasEducationalNote2")}</p>
        </div>
      </div>
    </div>
  )
}
