import React from 'react';
import { Circle } from '../Circle-btn/Circle';
import './style.css';

export const Display = ({ number }) => {
  return (
    <div className="display">
      <Circle number={number[0]} noGradient={true} />
      <Circle number={number[1]} noGradient={true} />
      <Circle number={number[2]} noGradient={true} />
      <Circle number={number[3]} noGradient={true} />
    </div>
  );
};
