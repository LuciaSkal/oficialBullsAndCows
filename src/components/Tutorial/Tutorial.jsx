import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import first from "./img/tutorial_1.svg";
import second from "./img/tutorial_2.svg";
import third from "./img/tutorial_3.svg";
import forth from "./img/tutorial_4.svg";
import fifth from "./img/tutorial_5.svg";
import home from "../Header/img/home.svg";
import arrow from "./img/arrow.svg";

export const Tutorial = () => {
  const [picture, setPicture] = useState(0);
  const pictures = [first, second, third, forth, fifth];

  return (
    <div className="tutorial_container">
      <h2>Tutorial</h2>

      <button className="home">
        <img className="home_icon" src={home} alt="main-menu-icon" />
      </button>

      <div className="carousel">
        <button
          // disabled={picture === 0 ? true : false}
          disabled={picture === 0}
          onClick={() => setPicture(picture - 1)}
          className="carousel_previous"
        >
          <img id="left" src={arrow} alt="arrow" />
        </button>

        <div className="carousel_media">
          <img
            className="carousel_image"
            src={pictures[picture]}
            alt="tutorial"
          />
        </div>

        <button
          disabled={picture === pictures.length - 1 ? true : false}
          onClick={() => setPicture(picture + 1)}
          className="carousel_next"
        >
          <img id="right" src={arrow} alt="arrow" />
        </button>
      </div>
      <Link to="/selectgame" className="linkPlay">
        Let's play!!!
      </Link>
    </div>
  );
};
