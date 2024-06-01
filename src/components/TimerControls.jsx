import React from "react";
//This is a component that renders a set of buttons that control the timer
function TimerControls({ isRunning, handleStart, handlePause, handleReset }) {
  return (
    //Depending on the state of running two or three buttons is rendered
    //If isRunning is true, a "Pause" button is rendered with an onClick handler set to handlePause.
    // If isRunning is false, a "Start" button is rendered with an onClick handler set to handleStart
    //A "Reset" button is always rendered with an onClick handler set to handleReset.
    <div>
      {isRunning ? (
        <button className="button" onClick={handlePause}>
          Pause
        </button>
      ) : (
        <button className="button" onClick={handleStart}>
          Start
        </button>
      )}
      <button className="button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default TimerControls;
