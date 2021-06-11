import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import "./style.css";
import imgBull from "../Images/img/svg_bull.svg";
import imgCow from "../Images/img/svg_cow.svg";
import baner from "./img/flower_baner.svg";

const Images = () => {
  const boxRefbull = useRef();
  const boxRefcow = useRef();

  useEffect(() => {
    gsap.from([boxRefbull.current], {
      x: "-400px",
      duration: 3,
    });
    gsap.from([boxRefcow.current], {
      x: "400px",
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
      <div className="title_baner">
        <img className="flower_baner" src={baner} alt="baner" />
        <h1>Bulls & Cows</h1>
      </div>

      <div className="link">
        <div className="stickerT">
          <Link to="/tutorial" className="tutorial">
            {/* ref={boxRefTutorial}  */}
            tutorial
          </Link>
        </div>
        <div className="stickerP">
          <Link
            to="/selectgame"
            //ref={boxRefPlay}
            className="play"
          >
            play
          </Link>
        </div>
      </div>
    </>
  );
};
