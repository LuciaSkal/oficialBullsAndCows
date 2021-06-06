import React from 'react';
import './style.css';

export const Circle = ({ number, onClick, noGradient }) => {
  return (
    <div
      className={`circle ${noGradient ? '' : 'gradient-btn'}`}
      onClick={onClick}
    >
      {number}
    </div>
  );
};
