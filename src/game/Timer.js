import React, { useState, useEffect } from "react";

function Timer(props) {
  const { isActive } = props;
  const [time, setTime] = useState(0)

  useEffect(() => {
    let interval

    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time + 10)
      }, 10)
    }

    return () => clearInterval(interval)
  }, [isActive])

  return (
    <li className="text-white text-xl sm:text-2xl">
      <span>
        {("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:
      </span>
      <span>
        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
      </span>
      <span>
        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
      </span>
    </li>
  );
}

export default Timer;
