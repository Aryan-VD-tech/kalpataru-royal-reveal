import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import WordInput from '../components/WordInput';
import Banner from '../components/Banner';

const Index: React.FC = () => {
  const [showInput, setShowInput] = useState(false);
  const [submittedWord, setSubmittedWord] = useState('');
  const [showBanner, setShowBanner] = useState(false);
  const [inputAnimationComplete, setInputAnimationComplete] = useState(false);

  const handleBeginClick = () => {
    setShowInput(true);
    // Add a slight delay to ensure smooth animation
    setTimeout(() => setInputAnimationComplete(true), 600);
  };

  const handleWordSubmit = (word: string) => {
    setSubmittedWord(word);
    setShowBanner(true);
    // Keep the input visible but disable interaction
    setTimeout(() => {
      setInputAnimationComplete(false);
      setShowInput(false);
    }, 1000);
  };

  // Reset animation states when component unmounts
  useEffect(() => {
    return () => {
      setShowInput(false);
      setInputAnimationComplete(false);
      setShowBanner(false);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <Banner word={submittedWord} isVisible={showBanner} />
      
      <div className={`flex-1 ${showBanner ? 'mt-12' : ''} transition-all duration-500`}>
        {/* Hero section with conditional visibility */}
        <div className={`transition-opacity duration-700 ease-in-out ${showInput && !showBanner ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}>
          <Hero onBeginClick={handleBeginClick} />
        </div>
        
        {/* WordInput with animation */}
        {showInput && (
          <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg transition-all duration-700 z-20
                         ${inputAnimationComplete ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <WordInput onSubmit={handleWordSubmit} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
