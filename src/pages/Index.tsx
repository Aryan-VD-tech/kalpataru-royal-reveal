
import React, { useState } from 'react';
import Hero from '../components/Hero';
import WordInput from '../components/WordInput';
import Banner from '../components/Banner';

const Index: React.FC = () => {
  const [showInput, setShowInput] = useState(false);
  const [submittedWord, setSubmittedWord] = useState('');
  const [showBanner, setShowBanner] = useState(false);

  const handleBeginClick = () => {
    setShowInput(true);
  };

  const handleWordSubmit = (word: string) => {
    setSubmittedWord(word);
    setShowBanner(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Banner word={submittedWord} isVisible={showBanner} />
      
      <div className={`flex-1 ${showBanner ? 'mt-12' : ''}`}>
        <Hero onBeginClick={handleBeginClick} />
        {showInput && !showBanner && (
          <div className="transition-all duration-300 ease-in">
            <WordInput onSubmit={handleWordSubmit} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
