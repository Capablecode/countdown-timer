import React from "react";

function TimerDisplay({ seconds }) {
  // This line defines a nested function formatTime that takes a seconds parameter.
  const formatTime = (seconds) => {
    // This line calculates the number of minutes by dividing seconds by 60 and rounding down to the ///nearest whole number using Math.floor
    const minutes = Math.floor(seconds / 60);
    //This line calculates the remaining seconds by taking the modulo of seconds divided by 60.
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
    //This line returns a string in the format MM:SS using template literals.
    // minutes is converted to a string and padded with a leading zero if necessary using toString().//padStart(2, "0")
  };

  return <div className="timer-display">{formatTime(seconds)}</div>;
}

export default TimerDisplay;
