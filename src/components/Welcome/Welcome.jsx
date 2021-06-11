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
      x: "-500px",
      duration: 3,
    });
    gsap.from([boxRefcow.current], {
      x: "500px",
      duration: 3,
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
  // const boxRefTutorial = useRef();
  // const boxRefPlay = useRef();
  // useEffect(() => {
  //   gsap.from([boxRefTutorial.current], {
  //     duration: 2,
  //     opacity: 0,
  //     scale: 0.5,
  //     ease: "back",
  //     delay: 2,
  //   });
  //   gsap.from([boxRefPlay.current], {
  //     duration: 2,
  //     opacity: 0,
  //     scale: 0.5,
  //     ease: "back",
  //     delay: 2,
  //   });
  // });

  return (
    <>
      <Images />
      <h1>Bulls & Cows</h1>
      <div className="link">
        <div className="sticker" id="sticker-tutorial">
          <Link to="/tutorial" className="tutorial">
            {/* ref={boxRefTutorial}  */}
            tutorial
          </Link>
        </div>
        <div className="sticker" id="sticker-play">
          <Link
            to="/selectgame"
            //ref={boxRefPlay}
            className="play"
          >
            Play
          </Link>
        </div>
      </div>
    </>
  );
};
