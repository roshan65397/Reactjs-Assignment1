import React,{useState,useRef} from "react";
import '../Test.css';
 
const SetTimer=()=>{
    const [timer, setTimer] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const increment = useRef(null)

  const handleStart = () => {
    setIsActive(true)
    setIsPaused(true)
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  const handlePause = () => {
    clearInterval(increment.current)
    setIsPaused(false)
  }


  const handleReset = () => {
    clearInterval(increment.current)
    setIsActive(false)
    setIsPaused(false)
    setTimer(0)
  }

  const formatTime = () => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

    return `${getHours} : ${getMinutes} : ${getSeconds}`
  }

  return (
    <div className="myDiv col-md-4 col-lg-3  container">
      <h3>Stopwatch</h3>
      <div className='subDiv'>
        <p>{formatTime(timer)}</p>
        <div > 
        {!isActive && !isPaused?
              <button className='margin-left' onClick={handleStart}>Start</button>:
             <button className='margin-left' onClick={handlePause}>Pause</button>}
            <button className='margin-left' onClick={handleReset} >Reset</button>
        </div>
      </div>
    </div>
  );
}
export default SetTimer;