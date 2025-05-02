
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface WordInputProps {
  onSubmit: (word: string) => void;
}

const WordInput: React.FC<WordInputProps> = ({ onSubmit }) => {
  const [word, setWord] = useState('');
  const [error, setError] = useState('');

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
    <div className="w-full max-w-md mx-auto mt-8 px-4">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="w-full">
          <Input
            type="text"
            value={word}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Describe Kalpataru in one word"
            className="w-full border-royal-blue/30 focus:border-royal-blue text-center text-lg py-6"
            aria-label="Describe Kalpataru in one word"
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
        <Button 
          type="submit" 
          className="mt-4 bg-royal-blue hover:bg-royal-blue/90 text-white px-6"
          disabled={!word.trim()}
          aria-label="Submit your description"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default WordInput;
