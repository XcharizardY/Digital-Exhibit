import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Info, BookOpen, Globe, Lightbulb } from 'lucide-react';

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