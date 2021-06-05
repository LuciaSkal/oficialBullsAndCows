import React from 'react';

export const Keyboards = (props) => {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
    <button onClick={() => props.onChange(number)} key={number}>
      {number}
    </button>
  ));
};
