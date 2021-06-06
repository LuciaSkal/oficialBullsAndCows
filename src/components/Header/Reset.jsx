import React from "react";
import reset from "./img/reset.svg";

export const Reset = ({ onReset }) => {
  return (
    <button className="header-btn" onClick={onReset}>
      <img className="icon" id="resetId" src={reset} alt="reset" />
    </button>
  );
};
