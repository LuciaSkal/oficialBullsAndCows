import React, { useRef, useEffect } from "react";
import "./style.css";

export const History = ({ history }) => {
  const historyRef = useRef();

  useEffect(() => {
    historyRef.current.scrollTop = historyRef.current.scrollHeight - historyRef.current.clientHeight
    console.log("hello hell");
  }, [history]);

  return (
    <div ref={historyRef} className="history-container">
      <ol>
        {history.map((item, index) => (
          <li className="guess-history" key={index}>
            <span>{item.bulls}</span> <span className="arrow">{"<--"}</span>
            <span className="players-guess">{item.guess}</span>{" "}
            <span className="arrow">{"-->"}</span>
            <span>{item.cows}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};