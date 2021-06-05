import React, { useState } from 'react';
import { render } from 'react-dom';
import { Game } from './Game';
import './style.css';
import imgTop from './img/img-on-top.svg';
import imgBottom from './img/img-at-the-bottom.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Welcome } from './components/Welcome/Welcome';

const App = () => {
  return (
    <Router>
        <div className="container">
           <div className="top-image">
            <img src={imgTop} alt="blok" />
          </div>
        <Switch>
        <Route path="/" exact children={Welcome}>
           <Welcome />
        </Route>

        <Route path="/game" exact>
          <div className="content">
            <Game set={'0123456789'.split('')} delka={4} />
          </div>
        </Route>  
        </Switch> 
          <div className="bottom-image">
            <img src={imgBottom} alt="blok" />
          </div>
        </div>
    </Router>
  );
};

render(<App />, document.querySelector('#app'));
