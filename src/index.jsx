import React, { useState } from "react";
import { render } from "react-dom";
import { Game } from "./Game";
import "./style.css";
import imgTop from "./img/img-on-top.svg";
import imgBottom from "./img/img-at-the-bottom.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Welcome } from "./components/Welcome/Welcome";
import { Tutorial } from "./components/Tutorial/Tutorial";
import { SelectGame } from "./components/SelectGame/SelectGame";

const App = () => {
  return (
    <Router>
      <div className="container">
        <div className="top-image">
          <img src={imgTop} alt="blok" />
        </div>
        <div className="content">
          <Switch>
            <Route path="/" exact children={Welcome}>
              <Welcome />
            </Route>
            <Route path="/tutorial" exact>
              <Tutorial />
            </Route>
            <Route path="/selectgame" exact>
              <SelectGame />
            </Route>
            <Route path="/game4" exact>
              <Game set={"0123456789".split("")} delka={4} />
            </Route>
            <Route path="/game6" exact>
              <Game set={"0123456789".split("")} delka={6} />
            </Route>
            <Route path="/game8" exact>
              <Game set={"0123456789".split("")} delka={8} />
            </Route>
          </Switch>
        </div>
        <div className="bottom-image">
          <img src={imgBottom} alt="blok" />
        </div>
      </div>
    </Router>
  );
};

render(<App />, document.querySelector("#app"));
