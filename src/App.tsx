import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Info, BookOpen, Globe, Lightbulb, History, Landmark } from 'lucide-react';

// Define the artifact type
interface Artifact {
  id: number;
  title: string;
  theme: string;
  themeIcon: React.ReactNode;
  description: string;
  purpose: string;
  impact: string;
  themeConnection: string;
  inquiryQuestion: string;
  image: string;
}

function App() {
  // Artifact data
  const artifacts: Artifact[] = [
    {
      id: 1,
      title: "Cuneiform Tablets",
      theme: "Innovation & Invention",
      themeIcon: <Lightbulb className="w-5 h-5" />,
      description: "Cuneiform tablets are clay tablets inscribed with one of the earliest known writing systems, developed by the Sumerians around 3100 BCE in Mesopotamia. This script used wedge-shaped marks made by pressing a stylus into wet clay, which was then baked or left to dry.",
      purpose: "Cuneiform was used for a variety of administrative, religious, and literary purposes. Early on, it primarily recorded economic transactions, legal codes, treaties, and religious texts. Over time, it became a medium for literature, including epic poetry such as The Epic of Gilgamesh.",
      impact: "Cuneiform played a crucial role in organizing and structuring early civilizations. It facilitated record-keeping for trade and governance, contributed to the development of legal systems, and helped preserve knowledge for future generations. Its influence extended to later writing systems, such as those developed by the Akkadians, Babylonians, and Persians.",
      themeConnection: "As an innovation, cuneiform was a groundbreaking advancement in communication and administration. It allowed for the documentation of laws, economic exchanges, and historical records, forming the foundation of complex governance and economic systems in Mesopotamia and beyond.",
      inquiryQuestion: "How did the development of cuneiform influence social hierarchy and governance in early Mesopotamian civilizations?",
      image: "/Image/cuneiform tablets.png"
    },
    {
      id: 2,
      title: "The Silk Road",
      theme: "Agriculture, Trade & Economy",
      themeIcon: <Globe className="w-5 h-5" />,
      description: "The Silk Road was a vast network of trade routes that connected China, Persia, India, and Europe, flourishing between the 2nd century BCE and the 15th century CE. It facilitated the exchange of goods, such as silk, spices, precious metals, and art, as well as ideas, technologies, and religions.",
      purpose: "The primary function of the Silk Road was to enable long-distance trade, creating economic interdependence between regions. Merchants, diplomats, and travelers moved goods and knowledge across vast territories, contributing to cultural diffusion and economic prosperity.",
      impact: "The Silk Road was instrumental in shaping global trade and economic stability. It allowed for economic growth in various civilizations, strengthened diplomatic relationships, and spread technological innovations, such as paper-making and gunpowder from China. Additionally, it facilitated the exchange of religious beliefs, including Buddhism, Christianity, and Islam.",
      themeConnection: "As a key element in trade and economy, the Silk Road significantly contributed to economic stability and growth by linking distant regions. It fostered commercial expansion, urbanization, and cross-cultural interactions that reshaped societies and economies throughout Eurasia.",
      inquiryQuestion: "How did the Silk Road influence cultural and technological exchanges between East and West, and what long-term effects did it have on global trade?",
      image: "/Image/Silk Road.png"
    },
    {
      id: 3,
      title: "Temple of Philae",
      theme: "Cultural Transformation",
      themeIcon: <Landmark className="w-5 h-5" />,
      description: "The Temple of Philae is one of the last major temples built in Ancient Egypt, originally dedicated to the goddess Isis. Located on an island in the Nile, it served as a sacred site well into the Greco-Roman period. Its architecture and carvings preserve classic Egyptian religious imagery, but also reveal signs of later cultural influence.",
      purpose: "This artifact shows both continuity and change. The temple was still in use even after Egypt came under Roman control, but its religious practices eventually merged with Greco-Roman customs. Egyptian gods were worshipped alongside Roman deities, and later, parts of the temple were converted for Christian use.",
      impact: "Its importance lies in its ability to illustrate Egypt's cultural resilience. Even as political power shifted, religious life adapted, keeping Egyptian identity alive in new forms. The Temple of Philae stands as a symbol of endurance and transformation.",
      themeConnection: "The Temple of Philae exemplifies how Egyptian culture adapted under foreign rule while maintaining core elements of its identity. It represents the dynamic nature of cultural transformation and the persistence of religious traditions.",
      inquiryQuestion: "How did Egyptian religious practices evolve during the Greco-Roman period, and what does this tell us about cultural adaptation under foreign rule?",
      image: "/Image/temple of philae.jpg"
    },
    {
      id: 4,
      title: "Faded Hieroglyphs",
      theme: "Cultural Loss",
      themeIcon: <History className="w-5 h-5" />,
      description: "Hieroglyphs were the written language of Ancient Egypt, used for everything from temple walls to tomb inscriptions. But by the later periods, especially under Roman rule, the ability to read and write hieroglyphs had begun to disappear. Today, many inscriptions are weathered and faded, both physically and culturally.",
      purpose: "This artifact represents change—specifically, the loss of literacy in the sacred language that once defined Egyptian identity. As newer languages like Greek and later Coptic became dominant, the meaning of hieroglyphs was forgotten for over a thousand years until modern scholars decoded them in the 19th century.",
      impact: "Faded hieroglyphs are important because they capture the moment when a civilization's written memory began to vanish. They show how even the most powerful empires can lose touch with their roots when traditions are no longer passed down.",
      themeConnection: "The fading of hieroglyphic literacy represents a profound cultural loss and transformation. It demonstrates how the discontinuation of cultural practices can lead to the erosion of a civilization's core identity.",
      inquiryQuestion: "What factors contributed to the loss of hieroglyphic literacy, and how did this affect the preservation of Egyptian cultural knowledge?",
      image: "/Image/Faded Hieroglyphs.PNG"
    },
    {
      id: 5,
      title: "Hellenistic-Egyptian Statue",
      theme: "Cultural Fusion",
      themeIcon: <Landmark className="w-5 h-5" />,
      description: "This statue blends classic Egyptian style with Hellenistic (Greek) influence. You might see a traditional Egyptian pose—rigid and frontal—but with Greek-style robes or facial features. These kinds of statues appeared during the rule of the Ptolemies, a Greek dynasty that took control of Egypt after Alexander the Great.",
      purpose: "The artifact reflects change in Egypt's artistic identity. While Egyptian symbols and styles remained, they were adapted to fit the tastes and ideas of new rulers. This cultural fusion created something unique but also marked a departure from purely Egyptian traditions.",
      impact: "This statue is important because it shows how foreign rule reshaped Egypt's image of itself. It tells a story of compromise and change, as the old civilization merged with the new.",
      themeConnection: "The Hellenistic-Egyptian statue exemplifies the process of cultural fusion, showing how artistic traditions can blend and evolve under new influences while maintaining connections to their origins.",
      inquiryQuestion: "How did the fusion of Egyptian and Greek artistic styles reflect broader cultural and political changes in Ptolemaic Egypt?",
      image: "/Image/Hellenistic Egyptian Statue.jpg"
    }
  ];

  const [currentArtifactIndex, setCurrentArtifactIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'description' | 'purpose' | 'impact' | 'connection'>('description');

  const currentArtifact = artifacts[currentArtifactIndex];

  const goToNextArtifact = () => {
    setCurrentArtifactIndex((prevIndex) => (prevIndex + 1) % artifacts.length);
    setActiveTab('description');
  };

  const goToPreviousArtifact = () => {
    setCurrentArtifactIndex((prevIndex) => (prevIndex - 1 + artifacts.length) % artifacts.length);
    setActiveTab('description');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-indigo-900 text-white py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight">Digital Exhibit: Historical Artifacts</h1>
          <p className="mt-2 text-indigo-200">Exploring the innovations and economies of ancient civilizations</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Navigation Controls */}
          <div className="flex justify-between items-center p-4 bg-indigo-50">
            <button 
              onClick={goToPreviousArtifact}
              className="flex items-center text-indigo-700 hover:text-indigo-900 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Previous
            </button>
            <div className="text-indigo-900 font-medium">
              Artifact {currentArtifactIndex + 1} of {artifacts.length}
            </div>
            <button 
              onClick={goToNextArtifact}
              className="flex items-center text-indigo-700 hover:text-indigo-900 transition-colors"
            >
              Next
              <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          </div>

          {/* Artifact Display */}
          <div className="md:flex">
            {/* Image Section */}
            <div className="md:w-1/2 relative">
              <img 
                src={currentArtifact.image} 
                alt={currentArtifact.title} 
                className="w-full h-80 md:h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-indigo-700 text-white px-3 py-1 rounded-full flex items-center">
                {currentArtifact.themeIcon}
                <span className="ml-1 text-sm font-medium">{currentArtifact.theme}</span>
              </div>
            </div>

            {/* Content Section */}
            <div className="md:w-1/2 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{currentArtifact.title}</h2>
              
              {/* Tabs */}
              <div className="border-b border-gray-200 mb-4">
                <nav className="flex -mb-px space-x-6">
                  <button
                    onClick={() => setActiveTab('description')}
                    className={`py-2 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'description'
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Description
                  </button>
                  <button
                    onClick={() => setActiveTab('purpose')}
                    className={`py-2 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'purpose'
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Purpose
                  </button>
                  <button
                    onClick={() => setActiveTab('impact')}
                    className={`py-2 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'impact'
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Impact
                  </button>
                  <button
                    onClick={() => setActiveTab('connection')}
                    className={`py-2 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'connection'
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Theme
                  </button>
                </nav>
              </div>

              {/* Tab Content */}
              <div className="prose max-w-none">
                {activeTab === 'description' && (
                  <div>
                    <p className="text-gray-700">{currentArtifact.description}</p>
                  </div>
                )}
                {activeTab === 'purpose' && (
                  <div>
                    <p className="text-gray-700">{currentArtifact.purpose}</p>
                  </div>
                )}
                {activeTab === 'impact' && (
                  <div>
                    <p className="text-gray-700">{currentArtifact.impact}</p>
                  </div>
                )}
                {activeTab === 'connection' && (
                  <div>
                    <p className="text-gray-700">{currentArtifact.themeConnection}</p>
                  </div>
                )}
              </div>

              {/* Inquiry Question */}
              <div className="mt-6 bg-indigo-50 p-4 rounded-lg">
                <h3 className="flex items-center text-lg font-medium text-indigo-800 mb-2">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Historical Inquiry Question
                </h3>
                <p className="text-indigo-900 italic">{currentArtifact.inquiryQuestion}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Citations */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Citations</h3>
          <div className="text-gray-700 space-y-2">
            <p>British Museum. "Cuneiform Tablet with Writing." Mesopotamia, c. 3100 BCE. Held at the British Museum, London. Museum Number: ME 22633.</p>
            <p>UNESCO. "The Silk Roads: A Historical Overview." Accessed March 2025. <a href="https://en.unesco.org/silkroad/about-silk-road" className="text-indigo-600 hover:text-indigo-800 underline">https://en.unesco.org/silkroad/about-silk-road</a></p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-300">© 2025 Digital Exhibit. All rights reserved.</p>
          </div>
          <div className="flex items-center space-x-4">
            <Info className="w-5 h-5 text-gray-400" />
            <span className="text-gray-300">Educational use only</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;