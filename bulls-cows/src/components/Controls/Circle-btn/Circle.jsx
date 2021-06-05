import React from 'react';
import './style.css';

export const Circle = ({ number, onClick, noGradient }) => {
  return (
    <div
      className={`button ${noGradient ? '' : 'gradient-btn'}`}
      onClick={onClick}
    >
      {number}
    </div>
  );
};
