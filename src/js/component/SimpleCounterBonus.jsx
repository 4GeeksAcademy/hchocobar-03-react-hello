import React, { useState } from "react";


export const SimpleCounterBonus = () => {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning ] = useState(false)
  const [textStart, setTextStart] = useState('Start');
  const [title, setTitle] = useState('Clock')
  const [icon, setIcon] = useState("far fa-clock")

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      setTextStart('Stop')
      setTitle('Chronometer')
      setIcon("fas fa-stopwatch")
      const newInterval = setInterval(() => {
        setCounter( (counter) => { return counter + 1 } )
      }, 10)
    } else {
      // clearInterval(newInterval)
      setIsRunning(false)
      setTextStart('Start')
    }
  }

  

  const interval = () => {

  }

  return (
    <div className="container">
      <h1>Simple Counter</h1>
      <h2 className={"text-primary"}>{title}</h2>
      <div className="big-counter">
        <div><i className={icon}></i></div>
        <div>{Math.floor(counter / 100000000 % 10)}</div>
        <div>{Math.floor(counter / 10000000 % 10)}</div>
        <div>{Math.floor(counter / 1000000 % 10)}</div>
        <div>{Math.floor(counter / 100000 % 10)}</div>
        <div>{Math.floor(counter / 10000 % 10)}</div>
        <div>{Math.floor(counter / 1000 % 10)}</div>
        <div>{Math.floor(counter / 100 % 10)}</div>
        <div>{','}</div>
        <div>{Math.floor(counter / 10 % 10)}</div>
        <div>{Math.floor(counter % 10)}</div>
        <div>
          <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
            <button onClick={handleStart} type="button" className="btn btn-outline-success">
              {textStart}
              </button>
            <button type="button" className="btn btn-outline-danger">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}