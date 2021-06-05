import React, { useState } from 'react';
import { render } from 'react-dom';
import { Game } from './Game';

const App = () => {
  return <Game set={'0123456789'.split('')} delka={4} />;
};

render(<App />, document.querySelector('#app'));
