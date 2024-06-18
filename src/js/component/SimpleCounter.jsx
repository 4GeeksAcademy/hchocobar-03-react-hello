import React, { useEffect, useState } from "react";


export const SimpleCounter = () => {
  // 3. code js
  const [counter, setCounter] = useState(999)
  const [isRunning, setIsRunning] = useState(false)
  const [myStyle, setMyStyle] = useState({
    title: 'Clock',
    icon: <i className="fas fa-clock"></i>,
    color: 'primary'
  })


  const handleButton = () => {
    setIsRunning(!isRunning)
    setMyStyle({
      title: 'Chronometer',
      icon: <i className="fas fa-stopwatch"></i>,
      color: 'success'
    })
  }

  const handleReset = () => {
    setCounter(0)
    setMyStyle({
      title: 'Clock',
      icon: <i className="fas fa-clock"></i>,
      color: 'primary'
    })
    setIsRunning(false)
  }


  // useEffect tiene dos parametros
  // 1. el 1er parametro es una funcion
  // 2. el 2do parametro es un array
  useEffect(() => {
    if (isRunning) {
			const newInterval = setInterval(() => {
				setCounter(counter => counter + 1);
			}, 100);

			return () => clearInterval(newInterval);
		}  
  }, [isRunning])

  return (
    <div className="container">
      <h1 className="text-center">Simple Counter</h1>
      <h2 className={`text-center text-${myStyle.color}`}>{myStyle.title}</h2>
      <div className="big-counter">
        <div>{myStyle.icon}</div>
        <div>{Math.floor(counter / 10000000) % 10}</div>
        <div>{Math.floor(counter / 1000000) % 10}</div>
        <div>{Math.floor(counter / 100000) % 10}</div>
        <div>{Math.floor(counter / 10000) % 10}</div>
        <div>{Math.floor(counter / 1000) % 10}</div>
        <div>{Math.floor(counter / 100) % 10}</div>
        <div>,</div>
        <div>{Math.floor(counter / 10) % 10}</div>
        <div>{Math.floor(counter) % 10}</div>
        <div>
          <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
            <button type="button" className="btn btn-outline-success"
              onClick={handleButton}>
              {isRunning ? 'Stop' : 'Start'}
            </button>
            <button type="reset" className="btn btn-outline-danger"
              onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}