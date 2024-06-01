import { useState } from "react";
import "./index.css";
import TimerInput from "./components/TimerInput";
import TimerDisplay from "./components/TimerDisplay";
import TimerControls from "./components/TimerControls";

function App() {
  // Start variable, the current timer value (set = o)
  const [seconds, setSeconds] = useState(0);

  // TisRunning a boolean indicating that the timer is not running (initially false)
  const [isRunning, setIsRunning] = useState(false);

  //The id of the detIntervalid function (initially null)
  const [intervalId, setIntervalId] = useState(null);

  //handleStart function start the time, the prevSeconds is the seconds inputed at run time, which will be decrease by 1 every second.
  const handleStart = () => {
    setIsRunning(true);
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);
    setIntervalId(intervalId);
  };
  //handPause pause the timer
  const handlePause = () => {
    //setIsRunning to false
    setIsRunning(false);
    //clear the interval using the stored intervalid
    clearInterval(intervalId);
  };

  const handleReset = () => {
    //set setSeconds to zero
    setSeconds(0);
    setIsRunning(false);
    clearInterval(intervalId);
  };

  return (
    <div className="app">
      <TimerInput
        seconds={seconds}
        setSeconds={setSeconds}
        className="timer-input"
      />
      <TimerDisplay seconds={seconds} className="timer-display" />
      <TimerControls
        isRunning={isRunning}
        handleStart={handleStart}
        handlePause={handlePause}
        handleReset={handleReset}
        className="timer-controls"
      />
    </div>
  );
}

export default App;
