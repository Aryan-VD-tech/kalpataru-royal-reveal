
import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <Hero onBeginClick={() => {}} />
    </div>
  );
};

export default Index;
