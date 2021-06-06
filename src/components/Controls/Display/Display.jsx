import React from 'react';
import { Circle } from '../Circle-btn/Circle';
import './style.css';

export const Display = ({ number, length }) => {
  return (
    <div className="display">
      {[...Array(length).keys()].map((item) => (
        <Circle number={number[item]} noGradient={true} key={item} />
      ))}
    </div>
  );
};

