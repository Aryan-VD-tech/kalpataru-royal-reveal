
import React from 'react';
import KalpataruLogo from './KalpataruLogo';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  onBeginClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBeginClick }) => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden city-background">
      <div className="absolute top-6 left-6 md:top-10 md:left-10 z-10 animate-fade-in-up">
        <KalpataruLogo />
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 z-10 max-w-3xl mx-auto">
        <div className="building-image animate-float mb-6"></div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-royal-blue mt-8 md:mt-0 opacity-0 animate-fade-in-up stagger-1" style={{ animationFillMode: 'forwards' }}>
          Welcome to<br />Kalpataru Anthem Creation
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mt-6 md:mt-8 font-light max-w-2xl mx-auto opacity-0 animate-fade-in-up stagger-2" style={{ animationFillMode: 'forwards' }}>
          Join us in creating a collective anthem by contributing a single word that represents what Kalpataru means to you.
        </p>
        
        <div className="mt-10 md:mt-12 flex flex-col items-center gap-4">
          <Link to="/anthem">
            <Button 
              className="bg-royal-blue hover:bg-royal-blue/90 text-white px-8 py-6 text-lg rounded-md shadow-lg opacity-0 animate-fade-in-up stagger-3 animate-pulse-slow glowing-button"
              style={{ animationFillMode: 'forwards' }}
              aria-label="Begin your journey with Kalpataru"
            >
              Begin Your Contribution <ArrowRight className="ml-2" />
            </Button>
          </Link>
          
          <Link 
            to="/explore" 
            className="text-royal-blue hover:text-royal-blue/80 mt-4 opacity-0 animate-fade-in-up stagger-4 underline-animation"
            style={{ animationFillMode: 'forwards' }}
          >
            Explore Our Properties
          </Link>
        </div>
      </div>
      
      <div className="buildings animate-glitter"></div>
    </div>
  );
};

export default Hero;
