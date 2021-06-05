import React, { useState } from 'react';
import { Display } from './Display/Display';
import { Keyboards } from './Keyboards/Keyboards';
import './style.css';

export const Controls = (props) => {
  const [guess, setGuess] = useState('');

  const handleSubmit = () => {
    props.onGuess(guess);
    setGuess('');
  };

  const handleChange = (number) => {
    setGuess(guess + number);
  };

  const handleDelete = () => {
    setGuess(guess.slice(0, guess.length - 1));
  };

  return (
    <>
      <Display number={guess} />
      <Keyboards onChange={handleChange} />
      <div className="controls-btn">
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};
