import React, { useState } from 'react';

export const Controls = (props) => {
  const [guess, setGuess] = useState('');

  const handleSubmit = () => {
    props.onGuess(guess);
  };

  return (
    <>
      <label>
        Guess:
        <input
          type="text"
          value={guess}
          onChange={(event) => setGuess(event.target.value)}
        />
      </label>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
};
