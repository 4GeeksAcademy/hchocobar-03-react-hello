import React, { useEffect, useState } from "react";


export const SimpleCounterBonus = () => {
  const [ counter, setCounter ] = useState(0);
  const [ running, setRunning ] = useState(false);
  const [ status, setStatus] = useState({
    title: 'Clock',
    color: 'primary',
    icon: <i className="fas fa-clock"></i>
  })

  const handleButton = () => {
    setRunning(!running)
    setStatus({icon: <i class="fas fa-stopwatch"></i>, title: 'Chronometer', color: 'success'})
  }

  const handleReset = () => {
    setCounter(0);
    setRunning(false);
  }

  useEffect(() => {
    if (running) {
      const newInterval = setInterval(() => setCounter(counter => counter + 1), 10)
      return () => clearInterval(newInterval);
    }
  }, [running])

  return (
    <div className="container">
      <h1 className="text-center">Simple Counter</h1>
      <h2 className={`text-${status.color}`}>{status.title}</h2>
      <div className="big-counter">
        <div>{status.icon}</div>
        <div>{Math.floor(counter / 100000000 % 10)}</div>
        <div>{Math.floor(counter / 10000000 % 10)}</div>
        <div>{Math.floor(counter / 1000000 % 10)}</div>
        <div>{Math.floor(counter / 100000 % 10)}</div>
        <div>{Math.floor(counter / 10000 % 10)}</div>
        <div>{Math.floor(counter / 1000 % 10)}</div>
        <div>{Math.floor(counter / 100 % 10)}</div>
        <div>,</div>
        <div>{Math.floor(counter / 10 % 10)}</div>
        <div>{Math.floor(counter % 10)}</div>
        <div>

          <div className="gap-2 d-md-block mt-0">
            <button className="btn btn-outline-success mx-2" type="button"
              onClick={handleButton}>
              {running ? 'Pause' : counter == 0 ? 'Start' : 'Continue'}
            </button>
            <button className={`btn btn-outline-danger mx-2 ${''}`} type="button"
              onClick={handleReset} disabled={running ? true : false}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}