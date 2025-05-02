
import React, { useState } from 'react';
import KalpataruLogo from '../components/KalpataruLogo';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowRight, ChevronLeft } from 'lucide-react';
import WordInput from '../components/WordInput';
import Banner from '../components/Banner';

const Anthem: React.FC = () => {
  const [showInput, setShowInput] = useState(false);
  const [submittedWord, setSubmittedWord] = useState('');
  const [showBanner, setShowBanner] = useState(false);

  const handleContributeClick = () => {
    setShowInput(true);
  };

  const handleWordSubmit = (word: string) => {
    setSubmittedWord(word);
    setShowBanner(true);
    setShowInput(false);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden city-background">
      <Banner word={submittedWord} isVisible={showBanner} />

      <div className="absolute top-6 left-6 md:top-10 md:left-10 z-10 animate-fade-in-up">
        <KalpataruLogo />
      </div>
      
      <Link to="/" className="absolute top-6 right-6 md:top-10 md:right-10 z-10">
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <ChevronLeft size={16} /> Back
        </Button>
      </Link>
      
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 z-10">
        <div className="building-image-large animate-shimmer"></div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-royal-blue mt-8 md:mt-0 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
          The Kalpataru Anthem
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mt-6 font-light max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s", animationFillMode: 'forwards' }}>
          A collection of words that define the essence of luxury living.
        </p>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl w-full opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s", animationFillMode: 'forwards' }}>
          {["Luxurious", "Elegant", "Majestic", "Grand", "Pristine", "Exquisite", "Royal", "Premium"].map((word, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm p-4 rounded-md shadow-md hover:shadow-lg transition-all hover:scale-105 border border-royal-blue/20">
              <p className="text-royal-blue font-medium">{word}</p>
            </div>
          ))}
        </div>
        
        {!showBanner && !showInput && (
          <Button 
            onClick={handleContributeClick}
            className="mt-12 bg-royal-blue hover:bg-royal-blue/90 text-white px-8 py-6 text-lg rounded-md shadow-lg opacity-0 animate-fade-in-up animate-pulse-slow"
            style={{ animationDelay: "0.6s", animationFillMode: 'forwards' }}
            aria-label="Contribute to the anthem"
          >
            Add Your Word <ArrowRight className="ml-2" />
          </Button>
        )}

        {showInput && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-30">
            <WordInput onSubmit={handleWordSubmit} />
          </div>
        )}
      </div>
      
      <div className="buildings-glow"></div>
    </div>
  );
};

export default Anthem;
