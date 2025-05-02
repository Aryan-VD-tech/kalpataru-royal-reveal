
import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';

interface WordInputProps {
  onSubmit: (word: string) => void;
}

const WordInput: React.FC<WordInputProps> = ({ onSubmit }) => {
  const [word, setWord] = useState('');
  const [error, setError] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsMounted(true);
    // Focus input when component mounts
    if (inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 600);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    // Only allow letters, no spaces or special characters
    if (/^[a-zA-Z]*$/.test(value)) {
      setWord(value);
      setError('');
    } else {
      setError('Please enter letters only, no spaces or special characters.');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (word.trim()) {
      onSubmit(word);
    } else {
      setError('Please enter a word.');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && word.trim()) {
      onSubmit(word);
    }
  };

  return (
    <div className={`w-full max-w-md mx-auto px-4 py-8 transition-all duration-700 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-royal-blue/10">
        <CardContent className="pt-6">
          <h2 className="text-2xl font-serif text-royal-blue text-center mb-6">Define Your Dream Home</h2>
          
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <div className="w-full">
              <Input
                ref={inputRef}
                type="text"
                value={word}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="Describe Kalpataru in one word"
                className="w-full border-royal-blue/30 focus:border-royal-blue text-center text-lg py-6 transition-all shadow-sm focus:shadow-md"
                aria-label="Describe Kalpataru in one word"
              />
              {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
            </div>
            <Button 
              type="submit" 
              className="mt-6 bg-royal-blue hover:bg-royal-blue/90 text-white px-8 py-2 shadow-md hover:shadow-lg transition-all"
              disabled={!word.trim()}
              aria-label="Submit your description"
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default WordInput;
