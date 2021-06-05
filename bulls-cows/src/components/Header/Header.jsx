import React from 'react';
import { Home } from './Home';
import { Reset } from './Reset';
import { Timer } from './Timer';

export const Header = ({start, stop}) => {
  return (
    <div className="header">
      <Home />
      <Reset />
      <Timer start={start}  stop={stop} />
    </div>
  )
}