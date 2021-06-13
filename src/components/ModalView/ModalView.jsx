import React, { useRef, useEffect } from "react";
import { Timer } from "../Header/Timer";
import "./style.css";
import { useHistory } from "react-router-dom";
import home from "../Header/img/home.svg";
import cowcorn from "./img/cowcorn.svg";
import { gsap } from "gsap";

export const ModalView = ({ pocetPokusu, start, stop }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };

  const winBanner = useRef();
  useEffect(() => {
    gsap.from([winBanner.current], {
      duration: 1,
      opacity: 0,
      scale: 0.5,
      ease: "back",
    });
  });

  return (
    <div className="winner-baner" ref={winBanner}>
      <p>cowcorn says</p>
      <h1>congrats</h1>

      <img className="cowcorn" src={cowcorn} alt="" />

      <span>Number of attempts: {pocetPokusu}</span>
      <div className="time-needed">
        <span>Time needed:{"  "}</span>
        <span>
          <Timer start={start} stop={stop} />
        </span>
      </div>
      <button onClick={handleClick} className="home-icon">
        <img className="icon" src={home} alt="" />
      </button>
    </div>
  );
};
