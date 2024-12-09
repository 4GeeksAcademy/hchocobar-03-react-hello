import React, { useEffect, useState } from "react";
import { Title } from "./Title.jsx";


export const SimpleCounterBonus = () => {
  const [ counter, setCounter ] = useState(0);
  const [ isRunning, setIsRunning ] = useState(false);
  const [ icon, setIcon ] = useState('fa fa-clock fa-lg');
  const [ subTitle, setSubTitle ] = useState({text: 'Clock', color: 'primary', align: 'center'})

  const handleMain = () => {
    /* if (isRunning) {
      setIsRunning(false)
    } else {
      setIsRunning(true)
    } */
    setIsRunning(!isRunning);
    setIcon('fas fa-stopwatch fa-lg');
    setSubTitle({text: 'Chronometer', color: 'success', align: 'center'})
  };

  const handleReset = () => {
    setIsRunning(false);
    setIcon('fa fa-clock fa-lg');
    setSubTitle({text: 'Clock', color: 'primary', align: 'center'})
  };

  // sintaxis: el useEffect tiene dos parámetros:
  // 1. funcion flecha (setup, configuración)
  // 2. array de dependencias
  useEffect(() => {
		if (isRunning) {
			const newInterval = setInterval(() => {
				setCounter(counter => counter + 1);
			}, 10);

			return () => clearInterval(newInterval);
		}
	}, [isRunning])

  return (
    <div className="container">
      <Title text={'Simple Counter Bonus'} color="dark"/>
      <h1 className={`text-${subTitle.color} text-${subTitle.align}`}>{subTitle.text}</h1>
      <div className="big-counter">
        <div>{<i className={icon}></i>}</div>
        <div>{Math.floor(counter / 10000000 % 10)}</div>
        <div>{Math.floor(counter / 1000000 % 10)}</div>
        <div>{Math.floor(counter / 100000 % 10)}</div>
        <div>{Math.floor(counter / 10000 % 10)}</div>
        <div>{Math.floor(counter / 1000 % 10)}</div>
        <div>{Math.floor(counter / 100 % 10)}</div>
        <div>,</div>
        <div>{Math.floor(counter / 10 % 10)}</div>
        <div>{Math.floor(counter % 10)}</div>
        <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
          <button type="button" className="btn btn-outline-success"
            onClick={handleMain}>
            {isRunning ? 'Pause': 'Start'}
          </button>
          <button type="button" className="btn btn-outline-danger"
            onClick={handleReset}>
            {'Reset'}
          </button>
        </div>
      </div>
    </div>
  )
}