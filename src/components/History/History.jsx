import React, { useRef, useEffect } from "react";
import "./style.css";
import arrow from "../Tutorial/img/arrow.svg";

export const History = ({ history }) => {
  const historyRef = useRef();

  useEffect(() => {
    historyRef.current.scrollTop =
      historyRef.current.scrollHeight - historyRef.current.clientHeight;
  }, [history]);

  return (
    <div ref={historyRef} className="history-container">
      <ol>
        {history.map((item, index) => (
          <li className="guess-history" key={index}>
            <span>{item.bulls}</span>{" "}
            <span className="arrow">
              <img id="left_bull" src={arrow} alt="arrow" />
            </span>
            <span className="players-guess">{item.guess}</span>{" "}
            <span className="arrow">
              <img id="right_cow" src={arrow} alt="arrow" />
            </span>
            <span>{item.cows}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};
