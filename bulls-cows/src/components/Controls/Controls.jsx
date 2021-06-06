import React, { useState } from "react";
import { Display } from "./Display/Display";
import { Keyboards } from "./Keyboards/Keyboards";
import "./style.css";
import tick from "./img/tick.svg";
import cancel from "./img/cancel.svg";

export const Controls = ({ onGuess, length }) => {
  const [guess, setGuess] = useState("");

  const handleSubmit = () => {
    onGuess(guess);
    setGuess("");
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
        <button id="btn" onClick={handleDelete} disabled={guess.length === 0}>
          <img src={cancel} alt="delete" />
        </button>
        <button
          id="btn"
          onClick={handleSubmit}
          disabled={guess.length !== length}
        >
          <img src={tick} alt="submit" />
        </button>
      </div>
    </>
  );
};
