import React from 'react';
import home from './img/home.svg';

export const Home = () => {
  return (
    <button className="header-btn">
      <img className="icon" src={home} alt="" />
    </button>
  );
};
