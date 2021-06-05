import React from 'react';
import { Link } from 'react-router-dom';
import { Images } from '../Images/Images';
import './style.css';



export const Welcome = () => {

  return(
     <>
      <Images />
      <h1>Bulls & Cows</h1>
        <div className="odkazy">
         <Link to="/tutorial" className="tutorial"> Tutorial</Link>
         <Link to="/selectgame" className="play" >Play</Link>
       </div>
     </>       
  );
};