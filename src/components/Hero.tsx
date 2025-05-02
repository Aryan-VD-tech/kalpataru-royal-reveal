
import React from 'react';
import KalpataruLogo from './KalpataruLogo';
import { Button } from './ui/button';

interface HeroProps {
  onBeginClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBeginClick }) => {
  return (
    <div className="min-h-screen flex flex-col p-6 md:p-10">
      <div className="absolute top-6 left-6 md:top-10 md:left-10">
        <KalpataruLogo />
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-royal-blue mt-16 md:mt-0">
          Welcome to Kalpataru
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mt-4 md:mt-6 font-light">
          Experience royalty in every home.
        </p>
        <Button 
          onClick={onBeginClick} 
          className="mt-8 md:mt-12 bg-royal-blue hover:bg-royal-blue/90 text-white px-8 py-6 text-lg rounded-md"
          aria-label="Begin your journey with Kalpataru"
        >
          Begin
        </Button>
      </div>
    </div>
  );
};

export default Hero;
