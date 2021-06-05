import React from 'react';

export const History = ({history}) => {
  return (
    <>
      <div>{history.map((item, index) => <div key={index}>{item.guess}</div>)}</div>
    </>
  );
};
