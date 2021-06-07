import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import "./style.css";
import imgBull from "../Images/img/svg_bull.svg";
import imgCow from "../Images/img/svg_cow.svg";

const Images = () => {
  const boxRefbull = useRef();
  const boxRefcow = useRef();
  useEffect(() => {
    gsap.from([boxRefbull.current], {
      x: "-400px",
      duration: 3,
    });
    gsap.to([boxRefcow.current], {
      duration: 3, rotation: 360, scale: 1
    });
  });

  return (
    <div className="images">
      <img ref={boxRefbull} src={imgBull} alt="býk" />
      <img ref={boxRefcow} src={imgCow} alt="kráva" />
    </div>
  );
};

export const Welcome = () => {
  const boxRefTutorial = useRef();
  const boxRefPlay = useRef();
  useEffect(() => {
    gsap.from([boxRefTutorial.current], 
      {duration: 2, opacity: 0, scale: 0.5, ease: "back", delay: 3});
    gsap.from([boxRefPlay.current], {duration: 2, opacity: 0, scale: 0.5, ease: "back", delay: 3});
  });

  return (
    <>
      <Images />
      <h1>Bulls & Cows</h1>
      <div className="odkazy">
        <Link to="/tutorial" ref={boxRefTutorial} className="tutorial">
          {" "}
          Tutorial
        </Link>
        <Link to="/selectgame" ref={boxRefPlay} className="play">
          Play
        </Link>
      </div>
    </>
  );
};
