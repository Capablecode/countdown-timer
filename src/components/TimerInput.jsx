import React from "react";

//the TimerInput component will handle the input changes and update the timer value accordingly.

function TimerInput({ seconds, setSeconds }) {
  //This function is called whenever the input value changes
  const handleChange = (event) => {
    const value = parseInt(event.target.value, 10);
    //It parses the input value as an integer using parseInt (with base 10)
    setSeconds(value);
    //It calls the setSeconds function to update the timer value with the new input value
  };

  return (
    <input
      className="timer-input"
      type="number"
      value={seconds}
      onChange={handleChange}
    />
  );
}
export default TimerInput;
