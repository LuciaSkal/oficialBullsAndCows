import React, { useState } from 'react';
import { Display } from './Display/Display';
import { Keyboards } from './Keyboards/Keyboards';

export const Controls = (props) => {
  const [guess, setGuess] = useState('');

  const handleSubmit = () => {
    props.onGuess(guess);
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
      <div>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </>
  );
};
