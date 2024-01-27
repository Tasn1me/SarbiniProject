import React, { useState, useEffect } from 'react';

const ElectricClock = () => {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  return (
    <div style={clockStyle}>
      <div style={timeStyle}>Time:{currentTime}</div>
      {/* Add more components or features as needed */}
    </div>
  );
};

const clockStyle = {
    position:'relative',
  width: '40%', 
  height: '40%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Nunito, sans-serif',
top:'-30px',
left:'610px',
color:'white'
};

const timeStyle = {
  fontSize: '1.5rem',
  fontWeight: '500',
};

export default ElectricClock;
