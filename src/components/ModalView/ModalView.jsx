import React from 'react';
import { Timer } from "../Header/Timer";
import "./style.css";
import { useHistory } from 'react-router-dom';
import home from '../Header/img/home.svg';

export const ModalView = ({ pocetPokusu, start, stop }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/')
  } 

  return (
    <div className="styly">
      
     <h2>You won 🎉</h2>
  
      <span>Number of attempts: {pocetPokusu}</span> 
    
      <span>Time needed: <Timer start={start} stop={stop} /></span>
      <button onClick={handleClick} className="home-icon">
      <img className="icon" src={home} alt="" />
      </button>
    </div>
  );
};