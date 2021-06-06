import React from 'react';
import { Home } from './Home';
import { Reset } from './Reset';
import { Timer } from './Timer';
import './style.css';

export const Header = ({ start, stop, onReset }) => {
  return (
    <div className="header">
      <div className="header-controls">
        <Home />
        <Reset onReset={onReset} />
      </div>
      <div className="timer">
        <Timer start={start} stop={stop} />
      </div>
    </div>
  );
};
