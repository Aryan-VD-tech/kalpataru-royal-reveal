
import React from 'react';
import KalpataruLogo from '../components/KalpataruLogo';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Explore: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden city-background">
      <div className="absolute top-6 left-6 md:top-10 md:left-10 z-10 animate-fade-in-up">
        <KalpataruLogo />
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-royal-blue mt-8 md:mt-0 animate-fade-in-up">
          Our Properties
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mt-6 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Discover our premium locations across the city. Each property is designed with luxury and comfort in mind.
        </p>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {/* Placeholder for property cards */}
          <div className="property-card"></div>
          <div className="property-card"></div>
          <div className="property-card"></div>
        </div>
        
        <Link to="/">
          <Button 
            className="mt-12 bg-royal-blue hover:bg-royal-blue/90 text-white px-8 py-2 rounded-md shadow-lg animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            <ArrowLeft className="mr-2" /> Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Explore;
