import React, { useState } from 'react';
import './App.css';

function App() {
  const [timer, setTimer] = useState(0);
  const [countingUp, setCountingUp] = useState(true);
  const [btnstate,setbtnstate]=useState(false)
  

  const handleClick = () => {
    if (countingUp) {
      setbtnstate(true)
      let c = 1;
      let intervalId = setInterval(() => {
        if (c <= 10) {
          setTimer(c);
          c++;
        } else {
          clearInterval(intervalId);
          setCountingUp(false); // Change the counting direction
          setbtnstate(false);
        }
      }, 300);
    } else {
      setbtnstate(true)
      let c = 10;
      let intervalId = setInterval(() => {
        if (c >= 1) {
          setTimer(c);
          c--;
        } else {
          clearInterval(intervalId);
          setCountingUp(true); // Change the counting direction
        }
      }, 300);
    }
  };

  return (
    <>
      <h2>{timer}</h2>
      <button onClick={handleClick} disabled={btnstate}>Start</button>
    </>
  );
}

export default App;
