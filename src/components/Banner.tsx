
import React, { useEffect, useState } from 'react';

interface BannerProps {
  word: string;
  isVisible: boolean;
}

const Banner: React.FC<BannerProps> = ({ word, isVisible }) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
  
  useEffect(() => {
    if (isVisible) {
      // Slight delay before adding the animation class for better effect
      const timer = setTimeout(() => setIsAnimated(true), 100);
      return () => clearTimeout(timer);
    } else {
      setIsAnimated(false);
    }
  }, [isVisible]);

  return (
    <div
      className={`roof-banner w-full fixed top-0 left-0 right-0 transition-all duration-500 ease-in-out ${
        isVisible ? (isAnimated ? 'animate-slide-down' : 'opacity-0 -translate-y-full') : 'opacity-0 -translate-y-full'
      }`}
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="pill">
        {capitalizedWord && (
          <span className="inline-block">{capitalizedWord}</span>
        )}
      </div>
    </div>
  );
};

export default Banner;
