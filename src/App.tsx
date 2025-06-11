import React, { useState } from 'react';
import { BookOpen, Scroll, Home, Lightbulb, Users, Crown, Zap, Star, Target, Heart } from 'lucide-react';

interface Artifact {
  id: number;
  title: string;
  civilization: string;
  category: 'Religion' | 'Innovation' | 'Politics' | 'Economy';
  description: string;
  purpose: string;
  impact: string;
  theme: string;
  significance: string;
  modernLegacy: string;
  historicalInquiry: string;
  citation: string;
  comparison: {
    text: string;
  };
  imageUrl: string;
}

const artifacts: Artifact[] = [
  {
    id: 1,
    title: "Cuneiform Tablets",
    civilization: "Ancient Mesopotamia",
    category: "Innovation",
    description: "Cuneiform tablets are clay artifacts inscribed with one of the earliest known writing systems, developed by the Sumerians of ancient Mesopotamia around 3200 BCE. The term 'cuneiform' derives from the Latin 'cuneus,' meaning 'wedge,' reflecting the wedge-shaped marks made by a stylus on clay surfaces. These tablets vary in size and content, encompassing administrative records, legal documents, literature, and scholarly texts.",
    purpose: "Initially devised for record-keeping, cuneiform writing facilitated the administration of complex societies by documenting transactions, laws, and historical events. Over time, its use expanded to include literary compositions, religious hymns, and scientific treatises, serving as a medium for cultural expression and knowledge transmission.",
    impact: "Cuneiform writing was instrumental in the development of urban civilization in the ancient Near East. It enabled the codification of laws, such as the Code of Hammurabi, and the preservation of epic literature like the 'Epic of Gilgamesh.' The script's adaptability allowed it to be used across various languages and cultures, influencing subsequent writing systems and administrative practices.",
    theme: "The emergence of cuneiform tablets underscores the significance of written communication in state formation, economic management, and cultural continuity. They exemplify humanity's drive to record and systematize information, laying the groundwork for historical documentation and literary tradition.",
    significance: "Cuneiform writing was instrumental in the development of urban civilization in the ancient Near East. It enabled the codification of laws, such as the Code of Hammurabi, and the preservation of epic literature like the 'Epic of Gilgamesh.' The script's adaptability allowed it to be used across various languages and cultures, influencing subsequent writing systems and administrative practices.",
    modernLegacy: "The decipherment of cuneiform in the 19th century opened a window into ancient Mesopotamian civilization, reshaping our understanding of human history. These tablets continue to inform contemporary studies in linguistics, archaeology, and the history of science, highlighting the enduring relevance of ancient innovations.",
    historicalInquiry: "How did the development and use of cuneiform writing influence the administrative and cultural evolution of ancient Mesopotamian societies?",
    citation: "Khan Academy. \"Cuneiform.\" Khan Academy. Accessed June 7, 2025. https://www.khanacademy.org/humanities/ancient-art-civilizations/ancient-near-east1/the-ancient-near-east-an-introduction/a/cuneiform.",
    comparison: {
      text: "Like the development of the printing press in medieval Europe or the invention of digital databases today, cuneiform tablets represented a revolutionary leap in information storage and retrieval. Just as modern societies depend on written contracts, laws, and records, ancient Mesopotamian civilizations used cuneiform to create the world's first comprehensive administrative and legal systems. The transition from oral to written culture that cuneiform enabled mirrors how digital technology is transforming information management in our contemporary world."
    },
    imageUrl: "https://ichef.bbci.co.uk/images/ic/640x360/p08z9y49.jpg"
  },
  {
    id: 2,
    title: "The Silk Road",
    civilization: "Multiple Civilizations",
    category: "Economy",
    description: "The Silk Road was an extensive network of trade routes connecting East Asia with the Middle East, Europe, and parts of Africa from roughly the 2nd century BCE to the 15th century CE. It facilitated the exchange of goods such as silk, spices, ceramics, and precious metals, as well as ideas, technologies, religions, and cultures across thousands of miles.",
    purpose: "The primary purpose of the Silk Road was economic: to enable trade between distant regions. However, it also served political, diplomatic, and religious functions, fostering cross-cultural interactions and strengthening ties between empires such as the Han, Persian, Byzantine, and later Islamic Caliphates.",
    impact: "The Silk Road profoundly influenced global history by promoting economic prosperity, cultural diffusion, and technological innovation. It spread major world religions—Buddhism, Islam, and Christianity—and played a crucial role in shaping the medieval world system. It also contributed to the transmission of the Black Death across Eurasia in the 14th century.",
    theme: "The Silk Road exemplifies the theme of interconnectedness in world history. It shows how human societies have long been linked through trade, travel, and communication, demonstrating that globalization is not a modern phenomenon.",
    significance: "The Silk Road profoundly influenced global history by promoting economic prosperity, cultural diffusion, and technological innovation. It spread major world religions—Buddhism, Islam, and Christianity—and played a crucial role in shaping the medieval world system. It also contributed to the transmission of the Black Death across Eurasia in the 14th century.",
    modernLegacy: "Today, the Silk Road is recognized as a symbol of intercultural exchange and mutual influence. It inspires modern initiatives such as China's Belt and Road Initiative, and its legacy is preserved in UNESCO World Heritage sites and museums worldwide. The concept has become central to global studies and discussions of historical globalization.",
    historicalInquiry: "In what ways did the Silk Road shape the economic, cultural, and religious landscapes of the regions it connected?",
    citation: "Hansen, Valerie. The Silk Road: A New History. Oxford: Oxford University Press, 2012.",
    comparison: {
      text: "The Silk Road can be compared to today's global internet infrastructure and international trade networks. Just as modern supply chains connect manufacturers in Asia with consumers worldwide, the Silk Road created the first truly global economy, linking Chinese silk producers with Roman buyers thousands of miles away. Like how the internet facilitates not just commerce but also cultural exchange through social media and digital platforms, the Silk Road transmitted not only goods but also religions, technologies, and ideas across continents. The Belt and Road Initiative represents a modern attempt to recreate this ancient model of connectivity and economic integration."
    },
    imageUrl: "https://www.worldhistory.org/img/r/p/1500x1500/146.png"
  },
  {
    id: 3,
    title: "Temple of Philae",
    civilization: "Ancient Egypt",
    category: "Religion",
    description: "The Temple of Philae is an ancient Egyptian temple complex dedicated primarily to the goddess Isis. Originally located on Philae Island in the Nile River, near Aswan, it was constructed during the Ptolemaic dynasty (3rd century BCE) and added to under Roman rule. It features classical Egyptian architecture and inscriptions, with Hellenistic and Roman influences.",
    purpose: "Built to honor Isis, the temple served as a religious sanctuary and pilgrimage site, central to the worship of this powerful goddess. It also played a political role in legitimizing the Ptolemaic rulers through their association with divine authority.",
    impact: "Philae became one of the last strongholds of ancient Egyptian religion. Even after the advent of Christianity, pagan worship continued there until it was officially shut down in the 6th century CE by Byzantine decree. Its long religious activity symbolizes the resilience of Egyptian traditions amidst foreign rule.",
    theme: "The Temple of Philae illustrates the continuity and adaptation of religious practices under shifting political powers. It embodies themes of cultural synthesis, sacred space, and the endurance of belief systems through antiquity.",
    significance: "Philae became one of the last strongholds of ancient Egyptian religion. Even after the advent of Christianity, pagan worship continued there until it was officially shut down in the 6th century CE by Byzantine decree. Its long religious activity symbolizes the resilience of Egyptian traditions amidst foreign rule.",
    modernLegacy: "Threatened by the construction of the Aswan High Dam in the 20th century, the temple was relocated block by block to nearby Agilkia Island in a massive UNESCO-led effort (1972–1980). Today, it stands as a testament to both ancient spiritual life and modern heritage conservation.",
    historicalInquiry: "How did the Temple of Philae reflect the fusion of Egyptian, Hellenistic, and Roman religious and political influences?",
    citation: "Wilkinson, Richard H. The Complete Temples of Ancient Egypt. London: Thames & Hudson, 2000.",
    comparison: {
      text: "The Temple of Philae's remarkable preservation story parallels modern heritage conservation efforts worldwide, such as the relocation of Abu Simbel or the restoration of Notre-Dame Cathedral. Just as UNESCO coordinates international efforts to preserve cultural sites today, the Philae rescue operation demonstrated how global cooperation can save irreplaceable heritage. The temple's role as a pilgrimage site for Isis worship can be compared to modern religious destinations like Vatican City or Mecca, where spiritual significance transcends political boundaries. Its architectural fusion of Egyptian, Greek, and Roman elements mirrors how contemporary sacred spaces often blend traditional and modern design elements."
    },
    imageUrl: "https://www.thediscoveriesof.com/wp-content/uploads/2022/06/Philae-Temple-Aswan-19.jpg"
  },
  {
    id: 4,
    title: "Faded Hieroglyphs",
    civilization: "Ancient Egypt",
    category: "Innovation",
    description: "Faded hieroglyphs refer to ancient Egyptian inscriptions whose carvings have been eroded by time, weather, or human activity. Found on temple walls, tombs, and monuments, hieroglyphs were Egypt's sacred writing system, using pictures and symbols to convey religious, political, and cultural meanings.",
    purpose: "Hieroglyphs served both practical and sacred functions. They were used to record royal decrees, religious texts, funerary spells, and historical events. Their presence on monuments was also believed to activate divine power and ensure the deceased's successful journey to the afterlife.",
    impact: "As one of the earliest and most intricate writing systems, hieroglyphs allowed the ancient Egyptians to preserve a rich historical and religious legacy. Their inscriptions became essential to the administration of the state and the transmission of religious ideology for over three millennia.",
    theme: "Faded hieroglyphs symbolize the passage of time and the fragility of cultural memory. They also embody themes of language, belief, and the power of writing to shape identity and history.",
    significance: "As one of the earliest and most intricate writing systems, hieroglyphs allowed the ancient Egyptians to preserve a rich historical and religious legacy. Their inscriptions became essential to the administration of the state and the transmission of religious ideology for over three millennia.",
    modernLegacy: "The decipherment of hieroglyphs—especially after the 1822 breakthrough with the Rosetta Stone by Jean-François Champollion—revolutionized Egyptology. Even in faded form, they continue to inform modern archaeology and inspire contemporary art, media, and mysticism.",
    historicalInquiry: "What challenges do faded hieroglyphs present to historians and archaeologists seeking to reconstruct ancient Egyptian belief systems?",
    citation: "Allen, James P. Middle Egyptian: An Introduction to the Language and Culture of Hieroglyphs. Cambridge: Cambridge University Press, 2012.",
    comparison: {
      text: "Faded hieroglyphs present challenges similar to those faced by digital archaeologists trying to recover corrupted data from obsolete storage media. Just as modern researchers use advanced imaging techniques and AI to restore damaged digital files, Egyptologists employ multispectral imaging, 3D scanning, and computer analysis to reveal faded inscriptions. The gradual loss of hieroglyphic knowledge after the Roman period parallels how programming languages and file formats become obsolete, making it difficult for future generations to access our digital heritage. Both situations highlight the importance of preserving not just the artifacts themselves, but also the knowledge systems needed to interpret them."
    },
    imageUrl: "https://thumbs.dreamstime.com/b/egyptian-hieroglyphs-5758718.jpg"
  },
  {
    id: 5,
    title: "Hellenistic-Egyptian Statue",
    civilization: "Ancient Egypt",
    category: "Politics",
    description: "This type of statue represents the artistic fusion of Hellenistic (Greek) and Egyptian styles that flourished during the Ptolemaic period (305–30 BCE) in Egypt. Figures like Isis-Aphrodite combine Egyptian religious iconography with Greek sculptural techniques and aesthetics, reflecting a hybrid cultural identity.",
    purpose: "These statues were often created for temples, homes, or public spaces to honor gods, deities, or rulers. They functioned as religious icons, symbols of divine protection, and emblems of political legitimacy for Greek rulers seeking to associate themselves with Egyptian tradition.",
    impact: "Hellenistic-Egyptian statues highlight the cultural syncretism that characterized the Ptolemaic kingdom. They allowed Greek elites to adopt local traditions while reinforcing their power and appealed to both Greek and Egyptian subjects by merging familiar artistic and religious motifs.",
    theme: "This artifact underscores the theme of cultural hybridity and political adaptation. It illustrates how art and religion were used to bridge distinct traditions and establish legitimacy in a multicultural empire.",
    significance: "Hellenistic-Egyptian statues highlight the cultural syncretism that characterized the Ptolemaic kingdom. They allowed Greek elites to adopt local traditions while reinforcing their power and appealed to both Greek and Egyptian subjects by merging familiar artistic and religious motifs.",
    modernLegacy: "Today, such statues are emblematic of cross-cultural exchange in antiquity. They challenge rigid distinctions between civilizations and help scholars understand how ancient identities were negotiated. Museums continue to study and display them as evidence of the dynamic interplay between politics, religion, and art.",
    historicalInquiry: "How did Hellenistic-Egyptian statues function as tools of cultural integration and political propaganda in Ptolemaic Egypt?",
    citation: "Stanwick, Paul Edmund. Portraits of the Ptolemies: Greek Kings as Egyptian Pharaohs. Austin: University of Texas Press, 2002.",
    comparison: {
      text: "Hellenistic-Egyptian statues can be compared to modern examples of cultural fusion in political art, such as how contemporary leaders commission artworks that blend traditional and modern elements to appeal to diverse constituencies. Just as these ancient statues helped Ptolemaic rulers navigate between Greek and Egyptian identities, modern political monuments often incorporate multiple cultural symbols to represent multicultural societies. The strategic use of religious and artistic symbolism in these statues parallels how modern governments use public art and architecture to communicate political messages and legitimize authority across different cultural groups."
    },
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4ouUCbzkZH53cQN-pd3_d3O1entb3FzjNg&s"
  },
  {
    id: 6,
    title: "Greco-Buddhist Statue",
    civilization: "Gandhāra (Pakistan/Afghanistan)",
    category: "Religion",
    description: "Greco-Buddhist statues are a product of cultural fusion between Hellenistic art and Buddhist iconography, particularly flourishing in the region of Gandhāra (modern-day Pakistan and Afghanistan) between the 1st century BCE and the 4th century CE. These statues depict the Buddha with naturalistic, Greco-Roman artistic features—wavy hair, realistic drapery, and idealized anatomy—blending classical form with spiritual content.",
    purpose: "These statues served as devotional images for worship in monasteries and temples. They visually communicated the teachings of the Buddha and helped devotees concentrate on meditation and prayer. Their aesthetic appeal also made Buddhist ideals more accessible to Hellenized populations along trade routes.",
    impact: "Greco-Buddhist art was instrumental in shaping the standard iconography of the Buddha for centuries to come. It marked the first time the Buddha was represented in human form, moving away from earlier aniconic symbols such as footprints or the Bodhi tree.",
    theme: "The statue embodies themes of cultural interaction, religious transmission, and artistic innovation. It illustrates how religious ideas adapt visually and conceptually when transmitted across diverse regions and civilizations.",
    significance: "Greco-Buddhist art was instrumental in shaping the standard iconography of the Buddha for centuries to come. It marked the first time the Buddha was represented in human form, moving away from earlier aniconic symbols such as footprints or the Bodhi tree.",
    modernLegacy: "Today, Greco-Buddhist statues are celebrated as icons of cultural syncretism and are studied as evidence of early globalization along the Silk Road. Their stylistic legacy influenced Buddhist art across Central Asia, China, Korea, and Japan.",
    historicalInquiry: "How did Greco-Roman artistic traditions influence the visual representation of the Buddha, and what does this suggest about the cultural dynamics of the Silk Road?",
    citation: "Boardman, John. The Diffusion of Classical Art in Antiquity. Princeton: Princeton University Press, 1994.",
    comparison: {
      text: "Greco-Buddhist statues can be compared to how contemporary global religions adapt their visual representations to local cultural contexts. Just as modern Christian churches in Asia might incorporate local architectural styles, or how Buddhist temples in the West blend Eastern spirituality with Western aesthetics, these ancient statues show how Buddhism adapted Greek artistic conventions to make the religion more accessible to Hellenized populations. The fusion of Greek naturalism with Buddhist spirituality parallels how modern interfaith dialogue and globalization create new hybrid forms of religious expression that bridge different cultural traditions while maintaining core spiritual messages."
    },
    imageUrl: "https://artlogic-res.cloudinary.com/w_1200,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/barakatgallery/images/view/7f09ba65a6f29b9447752d9f92fd80c8j/barakatgallery-gandhara-schist-sculpture-of-the-seated-buddha-200-ce-500-ce.jpg"
  },
  {
    id: 7,
    title: "Qur'anic Manuscript on Parchment",
    civilization: "Islamic Civilization",
    category: "Religion",
    description: "A Qur'anic manuscript on parchment is a handwritten copy of verses from the Qur'an, Islam's holy book, inscribed on prepared animal skin using early Arabic scripts such as Ḥijāzī or Kūfī. These manuscripts, dating as early as the 7th century CE, often display intricate calligraphy and were sometimes decorated with gold or geometric motifs.",
    purpose: "These manuscripts served to preserve and transmit the divine revelations received by the Prophet Muhammad. They were used for personal devotion, teaching, and recitation. Parchment—valued for its durability—was chosen to ensure the sacred text endured through time.",
    impact: "The Qur'anic manuscripts helped unify the Arabic language and played a key role in the standardization of Islamic theology and law. Their production spurred the development of Islamic calligraphy and manuscript art, becoming central to religious and intellectual life in the Muslim world.",
    theme: "This artifact speaks to the theme of sacred text and authority. It highlights the reverence for divine revelation and the ways in which faith traditions seek to preserve and beautify their holiest words.",
    significance: "The Qur'anic manuscripts helped unify the Arabic language and played a key role in the standardization of Islamic theology and law. Their production spurred the development of Islamic calligraphy and manuscript art, becoming central to religious and intellectual life in the Muslim world.",
    modernLegacy: "Qur'anic manuscripts remain objects of deep reverence and are widely preserved in libraries and museums around the world. They are also studied for their historical, linguistic, and artistic significance. Contemporary Islamic calligraphy continues to draw inspiration from these early forms.",
    historicalInquiry: "How did the physical form and script of early Qur'anic manuscripts shape the religious, artistic, and intellectual traditions of the Islamic world?",
    citation: "Déroche, François. The Abbasid Tradition: Qur'ans of the 8th to the 10th Centuries AD. London: Nour Foundation, 1992.",
    comparison: {
      text: "Qur'anic manuscripts on parchment can be compared to how sacred texts are preserved and transmitted in the digital age. Just as these ancient manuscripts required skilled calligraphers and careful preservation to maintain textual accuracy, modern religious communities use digital archives, scholarly databases, and multimedia platforms to preserve and share sacred texts. The artistic beauty of Islamic calligraphy in these manuscripts parallels how contemporary religious communities use visual design, typography, and digital art to make sacred texts more accessible and meaningful. The standardization of Qur'anic text through these manuscripts mirrors how modern religious institutions use technology to ensure consistent transmission of religious teachings across global communities."
    },
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnMiwIdanwWV43LAH9p03xYcBVFY5V5ABGCg&s"
  },
  {
    id: 8,
    title: "Dome of the Rock Inscriptions",
    civilization: "Islamic Civilization",
    category: "Religion",
    description: "The Dome of the Rock in Jerusalem (constructed in 691–692 CE under Umayyad Caliph ʿAbd al-Malik) features some of the earliest known monumental Arabic inscriptions. These inscriptions, carved in elegant Kufic script on marble and mosaics, contain verses from the Qur'an emphasizing the oneness of God and the role of Muhammad as His Messenger—rejecting Christian doctrines such as the divinity of Jesus.",
    purpose: "The inscriptions served religious and political purposes: affirming Islamic monotheism, promoting Qur'anic doctrine, and asserting the legitimacy of Umayyad rule in a contested sacred space long venerated by Jews and Christians.",
    impact: "The Dome's inscriptions represent a turning point in Islamic art and architecture, marking the use of text as a dominant decorative and ideological feature. They also helped establish Arabic as a script of authority and devotion across the Islamic empire.",
    theme: "This artifact embodies the themes of religious identity and political expression. It illustrates how sacred spaces and scriptures were used to assert theological beliefs and imperial authority.",
    significance: "The Dome's inscriptions represent a turning point in Islamic art and architecture, marking the use of text as a dominant decorative and ideological feature. They also helped establish Arabic as a script of authority and devotion across the Islamic empire.",
    modernLegacy: "The Dome of the Rock remains a key Islamic shrine and a symbol of Jerusalem's religious and political complexity. Its inscriptions continue to be studied for their historical, artistic, and theological significance, influencing Islamic architectural decoration worldwide.",
    historicalInquiry: "What do the inscriptions of the Dome of the Rock reveal about early Islamic theology and its relationship to Christianity and Judaism?",
    citation: "Grabar, Oleg. The Dome of the Rock. Cambridge, MA: Belknap Press of Harvard University Press, 2006.",
    comparison: {
      text: "The Dome of the Rock inscriptions can be compared to how modern nations use public monuments and buildings to assert national identity and values. Just as the Lincoln Memorial's inscribed speeches communicate American ideals of unity and freedom, the Dome's Qur'anic verses proclaimed Islamic theological principles in a contested sacred space. The strategic placement of these inscriptions in Jerusalem parallels how contemporary governments use public art, monuments, and architectural symbolism to establish legitimacy and communicate political messages. The use of Arabic calligraphy as both decoration and ideological statement mirrors how modern societies employ visual design and typography in public spaces to reinforce cultural identity and political authority."
    },
    imageUrl: "https://squarekufic.com/wp-content/uploads/2014/08/g1-cupola-della-roccia1.jpg?w=1000"
  },
  {
    id: 9,
    title: "Samarra Stucco Panels",
    civilization: "Islamic Civilization",
    category: "Innovation",
    description: "The Samarra stucco panels are ornamental wall decorations excavated from the Abbasid palace complex at Samarra, Iraq, the capital of the Abbasid Caliphate in the 9th century CE. Made from carved and molded plaster (stucco), they feature a variety of designs—geometric, vegetal (arabesque), and abstract motifs—categorized into Styles A, B, and C.",
    purpose: "These decorative panels adorned the interiors of elite structures, including caliphal palaces, showcasing refinement, luxury, and artistic innovation. They served both aesthetic and symbolic functions, conveying sophistication and Islamic visual identity.",
    impact: "The Samarra stucco panels mark a pivotal development in Islamic art, representing a break from naturalistic Greco-Roman styles toward a distinctive Islamic abstract aesthetic. Their influence spread widely across the Islamic world, shaping architectural ornamentation from North Africa to Central Asia.",
    theme: "The panels reflect themes of artistic identity and abstraction in Islamic art. They illustrate how visual culture evolved to express religious values such as aniconism (avoidance of figurative imagery) and divine transcendence through pattern and design.",
    significance: "The Samarra stucco panels mark a pivotal development in Islamic art, representing a break from naturalistic Greco-Roman styles toward a distinctive Islamic abstract aesthetic. Their influence spread widely across the Islamic world, shaping architectural ornamentation from North Africa to Central Asia.",
    modernLegacy: "Samarra's artistic legacy persists in Islamic architecture, design, and even modern art. The panels are studied by scholars and admired by designers for their early role in forming a uniquely Islamic artistic language. Many are preserved in major museums across Europe and the Middle East.",
    historicalInquiry: "How did the stucco designs of Samarra contribute to the development of a distinct Islamic aesthetic, and what cultural or religious values did they express?",
    citation: "Creswell, K. A. C. Early Muslim Architecture: Umayyads, Early Abbasids and Tulunids. Oxford: Oxford University Press, 1969.",
    comparison: {
      text: "The Samarra stucco panels can be compared to how modern design movements develop distinctive visual languages that reflect cultural values. Just as Art Deco or Bauhaus created recognizable aesthetic principles that spread globally, the Samarra panels established Islamic artistic conventions that influenced architecture from Spain to India. Their abstract geometric patterns parallel how contemporary Islamic designers continue to use non-figurative motifs in modern architecture, from the geometric facades of contemporary mosques to the patterns used in Islamic fashion and graphic design. The panels' role in defining Islamic visual identity mirrors how modern cultural movements use distinctive design elements to express shared values and create recognizable cultural brands."
    },
    imageUrl: "https://smarthistory.org/wp-content/uploads/2021/12/Berli%CC%81n_Samarra_IX.jpg"
  },
  {
    id: 10,
    title: "Al-Fazari's Astrolabe",
    civilization: "Islamic Civilization",
    category: "Innovation",
    description: "Al-Fazari's astrolabe refers to one of the earliest Islamic adaptations of this ancient Greek astronomical instrument. Al-Fazari—an 8th-century Muslim astronomer and mathematician—is credited with constructing the first Islamic astrolabe based on Greek sources, particularly those of Ptolemy. The astrolabe is a flat, circular device used to solve problems related to time, astronomy, and navigation.",
    purpose: "Astrolabes were used to determine the time of day or night, find the direction of Mecca (qibla), calculate prayer times, and navigate using celestial bodies. Al-Fazari's version made these tools accessible and relevant to the Islamic world by incorporating Arabic and Islamic astronomical concepts.",
    impact: "Al-Fazari's work laid the foundation for centuries of Islamic astronomical innovation. His adaptation of the astrolabe spurred its widespread use and further refinement across the Islamic world, significantly influencing science in both the Islamic Golden Age and later medieval Europe.",
    theme: "This artifact embodies the themes of scientific transmission, innovation, and the integration of faith with empirical knowledge. It reflects how Islamic scholars preserved and enhanced Greek science within a religious and practical context.",
    significance: "Al-Fazari's work laid the foundation for centuries of Islamic astronomical innovation. His adaptation of the astrolabe spurred its widespread use and further refinement across the Islamic world, significantly influencing science in both the Islamic Golden Age and later medieval Europe.",
    modernLegacy: "Astrolabes symbolize the scientific achievements of the Islamic Golden Age and are preserved in museums as masterpieces of craftsmanship and intellect. Their principles still influence modern astronomy education and inspire contemporary Islamic art and engineering.",
    historicalInquiry: "How did Al-Fazari's adaptation of the astrolabe reflect the broader process of scientific translation and innovation in the early Islamic world?",
    citation: "Saliba, George. Islamic Science and the Making of the European Renaissance. Cambridge, MA: MIT Press, 2007.",
    comparison: {
      text: "Al-Fazari's astrolabe can be compared to how modern scientists adapt existing technologies for new purposes and contexts. Just as contemporary researchers modify GPS technology for different applications—from navigation to precision agriculture—Al-Fazari took Greek astronomical instruments and adapted them for Islamic religious and practical needs. The astrolabe's role in determining prayer times and the direction of Mecca parallels how modern technology is customized for specific cultural and religious requirements, such as smartphone apps that provide prayer times and qibla direction. The preservation and enhancement of Greek scientific knowledge through Islamic scholarship mirrors how modern open-source software communities build upon existing code to create improved versions that serve diverse global needs."
    },
    imageUrl: "https://encyclopedia.pub/media/common/202211/mceclip11-637f16696425c.png"
  },
  {
    id: 11,
    title: "Gold Dinar of ʿAbd al-Malik",
    civilization: "Islamic Civilization",
    category: "Economy",
    description: "The gold dinar of ʿAbd al-Malik ibn Marwān, minted in 77 AH (696–697 CE), was the first purely Islamic coin to feature only Arabic inscriptions and no human or animal imagery. Made of high-quality gold, it bears Qur'anic verses and religious declarations such as \"There is no god but God alone\" and \"Muḥammad is the Messenger of God.\"",
    purpose: "The dinar served as both currency and ideological symbol. It replaced earlier Byzantine-style coins and helped unify the economic system of the Umayyad Caliphate under a distinctly Islamic identity. The inscriptions emphasized Islamic monotheism and political authority.",
    impact: "ʿAbd al-Malik's reform of coinage was a major act of cultural and political assertion, signaling a break from Byzantine and Sassanian influence. The new coins became a standard model across the Islamic world for centuries, spreading Arabic script and Qur'anic messages far beyond Arabia.",
    theme: "This artifact reflects themes of religious identity, political sovereignty, and cultural independence. It illustrates how economic tools can be employed for ideological and state-building purposes.",
    significance: "ʿAbd al-Malik's reform of coinage was a major act of cultural and political assertion, signaling a break from Byzantine and Sassanian influence. The new coins became a standard model across the Islamic world for centuries, spreading Arabic script and Qur'anic messages far beyond Arabia.",
    modernLegacy: "The gold dinar remains a landmark in Islamic history and numismatics. It is studied as a symbol of the early Islamic state's consolidation of power, and replicas are sometimes referenced in contemporary Islamic finance debates.",
    historicalInquiry: "In what ways did the introduction of the gold dinar by ʿAbd al-Malik reflect broader shifts in Islamic political and religious identity?",
    citation: "Walker, John. A Catalogue of the Arab-Byzantine and Post-Reform Umayyad Coins. London: British Museum, 1956.",
    comparison: {
      text: "The gold dinar of ʿAbd al-Malik can be compared to how modern nations use currency design to assert national identity and values. Just as the Euro features architectural elements representing European unity, or how American currency displays founding fathers and national symbols, the Islamic dinar used religious inscriptions to communicate political and theological messages. The replacement of Byzantine-style imagery with purely Arabic text parallels how newly independent nations often redesign their currency to reflect their cultural identity and break from colonial influences. The dinar's role in spreading Arabic script and Islamic messages across trade networks mirrors how modern currency designs and digital payment systems can serve as vehicles for cultural soft power and national branding in the global economy."
    },
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Gold_dinar_of_Abd_al-Malik_697-98.png"
  }
];

const categoryIcons = {
  Religion: BookOpen,
  Innovation: Lightbulb,
  Politics: Crown,
  Economy: Users
};

const categoryColors = {
  Religion: 'bg-purple-100 text-purple-800',
  Innovation: 'bg-yellow-100 text-yellow-800',
  Politics: 'bg-blue-100 text-blue-800',
  Economy: 'bg-green-100 text-green-800'
};

function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'ancient' | 'islamic' | 'reflection'>('home');
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact | null>(null);

  const ancientArtifacts = artifacts.filter(artifact => 
    ['Ancient Mesopotamia', 'Ancient Egypt', 'Ancient Greece', 'Ancient Rome', 'Multiple Civilizations', 'Gandhāra (Pakistan/Afghanistan)'].includes(artifact.civilization)
  );

  const islamicArtifacts = artifacts.filter(artifact => 
    artifact.civilization === 'Islamic Civilization'
  );

  const renderArtifactCard = (artifact: Artifact) => {
    const IconComponent = categoryIcons[artifact.category];
    
    return (
      <div 
        key={artifact.id}
        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
        onClick={() => setSelectedArtifact(artifact)}
      >
        <div className="relative h-48 overflow-hidden">
          <img 
            src={artifact.imageUrl} 
            alt={artifact.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-4 right-4">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${categoryColors[artifact.category]}`}>
              <IconComponent className="w-3 h-3 mr-1" />
              {artifact.category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{artifact.title}</h3>
          <p className="text-sm text-gray-600 mb-3 font-medium">{artifact.civilization}</p>
          <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
            {artifact.description}
          </p>
          <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
            <span>Learn more</span>
            <Zap className="w-4 h-4 ml-1" />
          </div>
        </div>
      </div>
    );
  };

  const renderModal = () => {
    if (!selectedArtifact) return null;

    const IconComponent = categoryIcons[selectedArtifact.category];

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto">
          <div className="relative">
            <img 
              src={selectedArtifact.imageUrl} 
              alt={selectedArtifact.title}
              className="w-full h-64 object-cover"
            />
            <button 
              onClick={() => setSelectedArtifact(null)}
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            >
              ✕
            </button>
            <div className="absolute bottom-4 left-4">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${categoryColors[selectedArtifact.category]}`}>
                <IconComponent className="w-4 h-4 mr-1" />
                {selectedArtifact.category}
              </span>
            </div>
          </div>
          
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedArtifact.title}</h2>
            <p className="text-lg text-gray-600 mb-6 font-medium">{selectedArtifact.civilization}</p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-700 leading-relaxed">{selectedArtifact.description}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Purpose</h3>
                <p className="text-gray-700 leading-relaxed">{selectedArtifact.purpose}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Impact</h3>
                <p className="text-gray-700 leading-relaxed">{selectedArtifact.impact}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Theme</h3>
                <p className="text-gray-700 leading-relaxed">{selectedArtifact.theme}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Modern Legacy</h3>
                <p className="text-gray-700 leading-relaxed">{selectedArtifact.modernLegacy}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cross-Civilization Comparison</h3>
                <p className="text-gray-700 leading-relaxed">{selectedArtifact.comparison.text}</p>
              </div>
              
              {/* Highlighted Historical Inquiry Question */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                  <Lightbulb className="w-5 h-5 mr-2 text-blue-600" />
                  Historical Inquiry Question
                </h3>
                <p className="text-blue-800 text-lg font-medium italic leading-relaxed">
                  {selectedArtifact.historicalInquiry}
                </p>
              </div>
              
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Citation</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{selectedArtifact.citation}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Digital Exhibit</span>
            </div>
            
            <div className="flex space-x-1">
              <button
                onClick={() => setActiveTab('home')}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'home' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Home className="w-4 h-4 mr-2" />
                Home
              </button>
              <button
                onClick={() => setActiveTab('ancient')}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'ancient' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Scroll className="w-4 h-4 mr-2" />
                Ancient Civilizations
              </button>
              <button
                onClick={() => setActiveTab('islamic')}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'islamic' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Islamic Civilization
              </button>
              <button
                onClick={() => setActiveTab('reflection')}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'reflection' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Star className="w-4 h-4 mr-2" />
                Learning Reflection
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'home' && (
          <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center space-y-6">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Digital Exhibit: Historical Artifacts
              </h1>
              <h2 className="text-2xl text-gray-600 font-medium">
                Exploring the innovations and economies of ancient civilizations
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Welcome to our comprehensive digital exhibit showcasing pivotal artifacts from ancient and Islamic civilizations. 
                  This exhibit explores how human innovation, religious beliefs, and economic systems shaped the foundations of our modern world. 
                  Through carefully selected artifacts, we examine the lasting impact of these civilizations on contemporary society, 
                  demonstrating the continuous thread of human progress across millennia.
                </p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 max-w-3xl mx-auto">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Guiding Question</h3>
                <p className="text-blue-800 text-lg italic">
                  "How did belief and innovation shape civilizations, and what lasting legacies do we see in our modern world?"
                </p>
              </div>
            </div>

            {/* Featured Categories */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(categoryIcons).map(([category, IconComponent]) => (
                <div key={category} className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${categoryColors[category as keyof typeof categoryColors]}`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category}</h3>
                  <p className="text-gray-600 text-sm">
                    {category === 'Religion' && 'Sacred texts and spiritual practices that unified civilizations'}
                    {category === 'Innovation' && 'Technological and intellectual breakthroughs that advanced humanity'}
                    {category === 'Politics' && 'Governance systems that organized societies and influenced modern democracy'}
                    {category === 'Economy' && 'Trade networks and financial systems that connected the ancient world'}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">{artifacts.length}</div>
                  <div className="text-blue-100">Historical Artifacts</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">5</div>
                  <div className="text-blue-100">Civilizations Explored</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">5,200+</div>
                  <div className="text-blue-100">Years of History</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'ancient' && (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Ancient Civilizations</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore the foundational innovations and systems that emerged from Mesopotamia, Egypt, Greece, and Rome, 
                shaping the bedrock of human civilization.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ancientArtifacts.length === 0 ? (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500 text-lg">No artifacts added yet. Add your ancient civilization artifacts here.</p>
                </div>
              ) : (
                ancientArtifacts.map(renderArtifactCard)
              )}
            </div>
          </div>
        )}

        {activeTab === 'islamic' && (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Islamic Civilization</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the remarkable achievements of Islamic civilization during its Golden Age, 
                from scientific innovations to sophisticated governance and economic systems.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {islamicArtifacts.length === 0 ? (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500 text-lg">No artifacts added yet. Add your Islamic civilization artifacts here.</p>
                </div>
              ) : (
                islamicArtifacts.map(renderArtifactCard)
              )}
            </div>
          </div>
        )}

        {activeTab === 'reflection' && (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Learning Reflection</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Personal insights and reflections on cultural interactions throughout history
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Self-Check Score */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-8 rounded-r-xl">
                <div className="flex items-center mb-4">
                  <Star className="w-6 h-6 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold text-green-900">Self-Check Score: 4/5</h2>
                </div>
                <p className="text-green-800 text-lg leading-relaxed">
                  I gave myself a 4 because I understand how cultural interactions shaped ancient history and can explain an example clearly. 
                  I still want to practice identifying different forms of interaction (like assimilation vs. borrowing) more confidently.
                </p>
              </div>

              {/* Next Steps */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-8 rounded-r-xl">
                <div className="flex items-center mb-4">
                  <Target className="w-6 h-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-blue-900">Next Steps</h2>
                </div>
                <p className="text-blue-800 text-lg leading-relaxed">
                  I'm curious about how these cultural exchanges affected daily life—not just art or religion, but things like food, clothing, or language. 
                  I'd like to explore that in future lessons.
                </p>
              </div>

              {/* Faith Connection */}
              <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-l-4 border-purple-500 p-8 rounded-r-xl">
                <div className="flex items-center mb-4">
                  <Heart className="w-6 h-6 text-purple-600 mr-3" />
                  <h2 className="text-2xl font-bold text-purple-900">Faith Connection</h2>
                </div>
                <p className="text-purple-800 text-lg leading-relaxed mb-4">
                  An Islamic value that connects to this topic is <span className="font-semibold">seeking knowledge</span>. 
                  Civilizations like the Greeks and Indians shared ideas through art, science, and philosophy.
                </p>
                <p className="text-purple-800 text-lg leading-relaxed">
                  If more societies approached foreign cultures with a desire to learn instead of conquer, 
                  history might be filled with more peaceful exchanges and lasting innovations.
                </p>
              </div>

              {/* Connection to Artifacts */}
              <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Connections to Our Artifacts</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">Examples of Cultural Learning</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong>Greco-Buddhist Statues:</strong> Greeks learning Buddhist spiritual concepts</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong>Hellenistic-Egyptian Art:</strong> Greeks adopting Egyptian religious traditions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong>The Silk Road:</strong> Peaceful exchange of goods, ideas, and technologies</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">Islamic Contributions</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong>Qur'anic Manuscripts:</strong> Preserving and sharing divine knowledge</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong>Dome of the Rock:</strong> Engaging with Jewish and Christian traditions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong>Samarra Stucco Panels:</strong> Developing distinctive Islamic artistic identity</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong>Al-Fazari's Astrolabe:</strong> Adapting Greek science for Islamic purposes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong>Gold Dinar:</strong> Creating independent Islamic economic identity</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Modal */}
      {renderModal()}
    </div>
  );
}

export default App;