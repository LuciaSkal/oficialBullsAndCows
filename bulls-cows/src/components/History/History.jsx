import React from 'react';
import './style.css';

export const History = ({ history }) => {
  return (
    <>
      <ol>
        {history.map((item, index) => (
          <li className="guess-history" key={index}>
            <span>{item.bulls}</span> <span className="arrow">{'<--'}</span>
            <span className="players-guess">{item.guess}</span>{' '}
            <span className="arrow">{'-->'}</span>
            <span>{item.cows}</span>
          </li>
        ))}
      </ol>
    </>
  );
};
