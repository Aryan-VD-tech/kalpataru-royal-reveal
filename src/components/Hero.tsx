
import React from 'react';
import KalpataruLogo from './KalpataruLogo';
import { Button } from './ui/button';
import { Building, MapPin, ArrowRight } from 'lucide-react';

interface HeroProps {
  onBeginClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBeginClick }) => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden city-background">
      <div className="absolute top-6 left-6 md:top-10 md:left-10 z-10 animate-fade-in-up">
        <KalpataruLogo />
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 z-10">
        <Building className="text-royal-blue w-14 h-14 mb-4 md:mb-6 animate-float" />
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-royal-blue mt-8 md:mt-0 opacity-0 animate-fade-in-up stagger-1" style={{ animationFillMode: 'forwards' }}>
          Welcome to Kalpataru
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mt-4 md:mt-6 font-light max-w-md mx-auto opacity-0 animate-fade-in-up stagger-2" style={{ animationFillMode: 'forwards' }}>
          Experience royalty in every home.
        </p>
        
        <div className="mt-6 md:mt-10 flex items-center gap-2 opacity-0 animate-fade-in-up stagger-3" style={{ animationFillMode: 'forwards' }}>
          <MapPin className="text-royal-blue" />
          <span className="text-gray-600">Premium locations across the city</span>
        </div>
        
        <Button 
          onClick={onBeginClick} 
          className="mt-8 md:mt-12 bg-royal-blue hover:bg-royal-blue/90 text-white px-8 py-6 text-lg rounded-md shadow-lg opacity-0 animate-fade-in-up stagger-3 animate-pulse-slow"
          style={{ animationFillMode: 'forwards' }}
          aria-label="Begin your journey with Kalpataru"
        >
          Begin <ArrowRight className="ml-2" />
        </Button>
      </div>
      
      <div className="buildings"></div>
    </div>
  );
};

export default Hero;
