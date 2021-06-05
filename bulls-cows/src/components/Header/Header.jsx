import React from 'react';
import { Home } from './Home';
import { Reset } from './Reset';
import { Timer } from './Timer';

export const Header = ({start, stop, onReset}) => {
  
  return (
    <div className="header">
      <Home />
      <Reset onReset={onReset}/>
      <Timer start={start}  stop={stop} />
    </div>
  )
}