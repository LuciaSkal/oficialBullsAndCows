import React, {useState, useEffect} from 'react';

export const Timer = ({start, stop}) => {
  const [time, setTime] = useState(() => stop||new Date()); 

  if (stop === null) {
    useEffect(
      () => {
        let timer1 = setInterval(() => setTime(new Date()), 100);
 
        return () => {
          clearInterval(timer1);
        };
      },[]);
  }
   
  const totalTime = Math.floor((time.getTime() - start.getTime()) / 1000);
  const seconds = String(totalTime % 60).padStart(2, '0');
  const minutes = String(Math.floor(totalTime / 60)).padStart(2, '0');

  return(
    <div>{minutes}:{seconds}</div>
  );
}; 