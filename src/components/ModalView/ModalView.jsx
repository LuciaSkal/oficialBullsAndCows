import React from 'react';
import { Timer } from "../Header/Timer";
import "./style.css";

export const ModalView = ({ pocetPokusu, onOk, start, stop }) => {
  return (
    <div className="styly">
      
      <span>vyhral jsi!!!</span> 
  
      <span>pocet pokusu: {pocetPokusu}</span> 
    
      <Timer start={start} stop={stop} />
      <button onClick={onOk}>ok</button>
    </div>
  );
};