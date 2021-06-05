import React, { useState } from 'react';
import { render } from 'react-dom';
import { Game } from './Game';
import './style.css';
import imgTop from './img/img-on-top.svg';
import imgBottom from './img/img-at-the-bottom.svg';

const App = () => {
  return (
    <div className="container">
      <div className="top-image">
        <img src={imgTop} alt="blok" />
      </div>
      <div className="content">
        <Game set={'0123456789'.split('')} delka={4} />
      </div>
      <div className="bottom-image">
        <img src={imgBottom} alt="blok" />
      </div>
    </div>
  );
};

render(<App />, document.querySelector('#app'));
