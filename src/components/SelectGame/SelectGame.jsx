import React from 'react';
import { Link } from 'react-router-dom';
import { Images } from '../Images/Images';
import "./style.css";


export const SelectGame = () => {
  
  return (
    <div>
      <Images/>
      <h2>Play game with</h2>
      <div className="select-game">
        <Link to="/game4" className="game">4 digits</Link> {" "}
        <Link to="/game6" className="game">6 digits</Link> {" "} 
        <Link to="/game8" className="game">8 digits</Link>
      </div>
    </div>  
  );
};