import React, { useState } from 'react';
import { Display } from './Display/Display';
import { Keyboards } from './Keyboards/Keyboards';
import './style.css';

export const Controls = ({onGuess, length}) => {
  const [guess, setGuess] = useState('');

  const handleSubmit = () => {
   onGuess(guess);
    setGuess('');
  };

  const handleChange = (number) => {
    
    if (guess.length !== length) {
      setGuess(guess + number);
    }
  };

  const handleDelete = () => {
    setGuess(guess.slice(0, guess.length - 1));
  };

  return (
    <>
      <Display number={guess} length={length} />
      <Keyboards onChange={handleChange} />
      <div className="controls-btn">
        <button onClick={handleDelete}
        disabled={guess.length === 0}
        >Delete</button>
        <button onClick={handleSubmit}
        disabled={guess.length !== length}
        >Submit</button>
      </div>
    </>
  );
};
