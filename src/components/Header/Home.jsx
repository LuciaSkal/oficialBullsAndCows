import React from 'react';
import { useHistory } from 'react-router-dom';
import home from './img/home.svg';

export const Home = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/')
  } 

  return (
    <button className="header-btn" onClick={handleClick}>
      <img className="icon" src={home} alt="" />
    </button>
  );
};
