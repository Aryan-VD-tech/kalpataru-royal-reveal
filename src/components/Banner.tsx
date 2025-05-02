
import React from 'react';

interface BannerProps {
  word: string;
  isVisible: boolean;
}

const Banner: React.FC<BannerProps> = ({ word, isVisible }) => {
  const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
  
  return (
    <div
      className={`roof-banner w-full ${isVisible ? 'animate-slide-down' : 'opacity-0 -translate-y-full'}`}
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="pill">{capitalizedWord}</div>
    </div>
  );
};

export default Banner;
