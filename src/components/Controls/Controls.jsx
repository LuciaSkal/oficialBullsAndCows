import React, { useState, useEffect, useCallback } from "react";
import { Display } from "./Display/Display";
import { Keyboards } from "./Keyboards/Keyboards";
import "./style.css";
import tick from "./img/submit.svg";
import cross from "./img/delete.svg";

export const Controls = ({ onGuess, length }) => {
  const [guess, setGuess] = useState("");

  const handleSubmit = useCallback(() => {
    if (guess.length === length) {
      onGuess(guess);
      setGuess("");
    }
  }, [guess]);

  const handleChange = useCallback(
    (number) => {
      if (guess.length !== length && !guess.includes(number)) {
        setGuess(guess + number);
      }
    },
    [guess]
  );

  const handleDelete = useCallback(() => {
    setGuess(guess.slice(0, guess.length - 1));
  }, [guess]);

  useEffect(() => {
    const handlePress = (e) => {
      if (
        // standard keyboard keys
        (e.keyCode >= 48 && e.keyCode <= 57) ||
        // numerical keyboard keys
        (e.keyCode >= 96 && e.keyCode <= 105)
      ) {
        handleChange(e.key);
      } else if (e.keyCode === 13) {
        handleSubmit();
      } else if (e.keyCode === 8 || e.keyCode === 46) {
        handleDelete();
      }
    };
    document.addEventListener("keydown", handlePress);
    return () => document.removeEventListener("keydown", handlePress);
  }, [handleChange, handleSubmit, handleDelete]);

  return (
    <>
      <Display number={guess} length={length} />
      <Keyboards onChange={handleChange} />
      <div className="controls-btn">
        <button id="cross" onClick={handleDelete} disabled={guess.length === 0}>
          <img src={cross} alt="delete" />
        </button>
        <button
          id="tick"
          onClick={handleSubmit}
          disabled={guess.length !== length}
        >
          <img src={tick} alt="submit" />
        </button>
      </div>
    </>
  );
};
