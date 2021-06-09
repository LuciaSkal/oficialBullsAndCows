import React from "react";
import { Link } from "react-router-dom";
import { Images } from "../Images/Images";
import "./style.css";
import home from "../Tutorial/img/home.svg";

export const SelectGame = () => {
  return (
    <div>
      <Images />
      <img className="home-icon" src={home} alt="home" />
      <h2>Play game with</h2>
      <div className="select-game">
        <Link to="/game4" className="game">
          4 digits
        </Link>{" "}
        <Link to="/game6" className="game">
          6 digits
        </Link>{" "}
        <Link to="/game8" className="game">
          8 digits
        </Link>
      </div>
    </div>
  );
};
