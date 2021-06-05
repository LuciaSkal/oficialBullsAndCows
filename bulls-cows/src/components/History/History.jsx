import React from 'react';

export const History = ({history}) => {
  return (
    <>
    <ol>
      {history.map((item, index) => <li key={index}>

      <span>{item.bulls}</span> {'<--'} <span>{item.guess}</span> {'-->'} <span>{item.cows}</span></li>)}
    </ol>
    </>
  );
};
