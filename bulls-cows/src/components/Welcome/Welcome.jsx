import React from 'react';
import { Images } from '../Images/Images';
import './style.css';

export const Welcome = () => {

  return(

    <div className="content">
      <Images />
      <h1>Bulls & Cows</h1>
        <div className="odkazy">

          <a className="tutorial" href="#">Tutorial</a>
    
          <a className="play" href="#">Play</a>
       </div>
    </div>         
  );
};