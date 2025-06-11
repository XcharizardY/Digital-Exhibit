import React, { useState } from 'react';
import { ExternalLink, Clock, Globe, BookOpen } from 'lucide-react';
import { ImageModal } from './ImageModal';

interface ArtifactCardProps {
  title: string;
  image: string;
  description: string;
  purpose: string;
  impact: string;
  theme: string;
  modernLegacy: string;
  inquiryQuestion: string;
  citation: string;
}

export const ArtifactCard: React.FC<ArtifactCardProps> = ({
  title,
  image,
  description,
  purpose,
  impact,
  theme,
  modernLegacy,
  inquiryQuestion,
  citation,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="relative group">
          <img
            src={image}
            alt={title}
            className="w-full h-80 object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
            onClick={openModal}
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center cursor-pointer" onClick={openModal}>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ExternalLink className="text-white" size={32} />
            </div>
          </div>
          <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            Islamic Golden Age
          </div>
        </div>
        
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{title}</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                <BookOpen className="mr-2 text-amber-600" size={20} />
                Description
              </h3>
              <p className="text-gray-700 leading-relaxed">{description}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                <Clock className="mr-2 text-amber-600" size={20} />
                Purpose
              </h3>
              <p className="text-gray-700 leading-relaxed">{purpose}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                <Globe className="mr-2 text-amber-600" size={20} />
                Historical Impact
              </h3>
              <p className="text-gray-700 leading-relaxed">{impact}</p>
            </div>
            
            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Central Theme</h3>
              <p className="text-amber-700 leading-relaxed">{theme}</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Modern Legacy</h3>
              <p className="text-blue-700 leading-relaxed">{modernLegacy}</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Historical Inquiry</h3>
              <p className="text-green-700 leading-relaxed italic">{inquiryQuestion}</p>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Citation</h3>
              <p className="text-sm text-gray-600 italic">{citation}</p>
            </div>
          </div>
        </div>
      </div>

      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageUrl={image}
        title={title}
      />
    </>
  );
};