import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import "./style.css";
import imgBull from "../Images/img/svg_bull.svg";
import imgCow from "../Images/img/svg_cow.svg";

const Images = () => {
  const boxRefbull = useRef();
  const boxRefcow = useRef();
  const [imgsLoaded, setImgsLoaded] = useState(0);

  useEffect(() => {
    if (imgsLoaded === 2) {
      gsap.from([boxRefbull.current], {
        x: "-400px",
        duration: 3,
      });
      gsap.from([boxRefcow.current], {
        x: "400px",
        duration: 3,
      });
    } 
  },[imgsLoaded]);

  return (
    <div className="images"
    style={imgsLoaded === 2 ? undefined : {visibility: "hidden"}}>
      <img ref={boxRefbull} src={imgBull} alt="býk" onLoad={() => setImgsLoaded(imgsLoaded + 1)}/>
      <img ref={boxRefcow} src={imgCow} alt="kráva" onLoad={() => setImgsLoaded(imgsLoaded + 1)} />
    </div>
  );
};

export const Welcome = () => {
  const boxRefTutorial = useRef();
  const boxRefPlay = useRef();
  useEffect(() => {
    gsap.from([boxRefTutorial.current], 
      {duration: 2, opacity: 0, scale: 0.5, ease: "back", delay: 2});
    gsap.from([boxRefPlay.current], {duration: 2, opacity: 0, scale: 0.5, ease: "back", delay: 2});
  });

  return (
    <>
      <Images />
      <h1>Bulls & Cows</h1>
      <div className="odkazy">
        <Link to="/tutorial" ref={boxRefTutorial} className="tutorial">
          Tutorial
        </Link>
        <Link to="/selectgame" ref={boxRefPlay} className="play">
          Play
        </Link>
      </div>
    </>
  );
};
