import React, { useState, useEffect } from "react";

function CountdownTimer({ targetDate }) {
  const [time, setTime] = useState(calculateTimeRemaining(targetDate));
  const [isTimeOut, setIsTimeOut] = useState(false);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const remainingTime = calculateTimeRemaining(targetDate);

      if (remainingTime <= 0) {
        clearInterval(timerInterval);
        setIsTimeOut(true);
      } else {
        setTime(remainingTime);
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [targetDate]);

  const formatTime = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  function calculateTimeRemaining(targetDate) {
    const now = new Date().getTime();
    const targetTime = new Date(targetDate).getTime();
    const timeRemaining = Math.max(targetTime - now, 0);

    return Math.floor(timeRemaining / 1000); // Convert milliseconds to seconds
  }

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return (
    <div>
      {isTimeOut ? (
        <div>Time is out!</div>
      ) : (
        <div className="max-[1150px]:flex max-[1150px]:items-center max-[1150px]:justify-center pb-[50px]">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="flex text-white text-5xl md:text-[64px] font-normal time_text leading-[85.12px]">
              <span>{formatTime(hours)}</span>
              <span>
                <sub className="text-white text-sm font-normal font-['Montserrat'] leading-[18.62px]">
                  H
                </sub>
              </span>
            </div>
            <div className="flex text-white text-5xl md:text-[64px] font-normal time_text leading-[85.12px]">
              <span>{formatTime(minutes)}</span>
              <span>
                <sub className="text-white text-sm font-normal font-['Montserrat'] leading-[18.62px]">
                  M
                </sub>
              </span>
            </div>
            <div className="flex text-white text-5xl md:text-[64px] font-normal time_text leading-[85.12px]">
              <span>{formatTime(seconds)}</span>
              <span>
                <sub className="text-white text-sm font-normal font-['Montserrat'] leading-[18.62px]">
                  S
                </sub>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CountdownTimer;
