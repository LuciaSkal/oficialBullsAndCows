import React from 'react';
import { Circle } from '../Circle-btn/Circle';
import './style.css';

export const Keyboards = (props) => {
  return (
    <div className="keyboards">
      <div className="row">
        {[0, 1, 2, 3, 4].map((number) => (
          <Circle
            onClick={() => props.onChange(number)}
            number={number}
            key={number}
          />
        ))}
      </div>
      <div className="row">
        {[5, 6, 7, 8, 9].map((number) => (
          <Circle
            onClick={() => props.onChange(number)}
            number={number}
            key={number}
          />
        ))}
      </div>
    </div>
  );
};
