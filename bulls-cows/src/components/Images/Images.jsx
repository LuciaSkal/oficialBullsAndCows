import React from 'react';
import imgBull from './img/svg_bull.svg';
import imgCow from './img/svg_cow.svg';
import './style.css';

export const Images = () => {

  
  return (
    <div className="images">
      <img src={imgBull} alt="býk" />
      <img src={imgCow} alt="kráva" />
    </div>
  );
};
