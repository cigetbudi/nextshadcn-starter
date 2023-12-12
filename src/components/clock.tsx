"use client";
import { useEffect, useState } from "react";

const Clock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
  
    useEffect(() => {
  
      const intervalId = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    const formattedTime = currentTime.toLocaleTimeString();
  
    return (
      <div>
        <p>Current Time: {formattedTime}</p>
      </div>
    );
  };

  export default Clock