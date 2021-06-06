import React from 'react';
import { Link } from 'react-router-dom';


export const SelectGame = () => {
  
  return (
    <>
      <Link to="/game4">Generate Code</Link> {" "}
      <Link to="/game6">Generate Code</Link> {" "} 
      <Link to="/game8">Generate Code</Link>
    </>  
  );
};