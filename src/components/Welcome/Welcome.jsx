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
      duration: 2,
    });
    gsap.from([boxRefcow.current], {
      x: "400px",
      duration: 2,
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
  return (
    <>
      <Images />
      <h1>Bulls & Cows</h1>
      <div className="odkazy">
        <Link to="/tutorial" className="tutorial">
          {" "}
          Tutorial
        </Link>
        <Link to="/selectgame" className="play">
          Play
        </Link>
      </div>
    </>
  );
};
