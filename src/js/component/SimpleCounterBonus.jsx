// 1. Importar React y los hoocks
import React, { useState, useEffect } from "react";


export const SimpleCounterBonus = () => {
  // 3. Código de JS
  // 3.1 Defino los estados
  const [ title, setTitle ] = useState('Simple Counter');
  const [ counter, setCounter ] = useState(0);
  const [ isActive, setIsActive ] = useState(false);
  const [ status, setStatus ] = useState({icon: 'fa fa-clock',
                                          subtitle: 'Clock',
                                          subtitleStyle: 'text-center'})


  // 3.2 Defnimos funciones
  const handlePrincipal = () => {
    if (isActive) {
      setTitle('Simple Counter paused');
      setIsActive(false);
      setStatus({icon: 'fa fa-stopwatch', 
                 subtitle: 'Chronometer paused',
                 subtitleStyle: 'text-center text-warning'});
    } else {
      setTitle('Simple Counter started');
      setIsActive(true);
      setStatus({icon: 'fa fa-stopwatch', 
                 subtitle: 'Chronometer paused',
                 subtitleStyle: 'text-center text-warning'});
    }
  };


  const handleReset = () => {
    setTitle('Simple Counter')
    setCounter(0);
    setIsActive(false);
    setStatus({icon: 'fa fa-clock',
               subtitle: 'Clock',
               subtitleStyle: 'text-center bg-warning'})
  };


  // 3.3 useEffect
  useEffect(() => {
    // el códgio que se va a ejecutar
    if (isActive) {
      const interval = setInterval(() => {
        setCounter(counter => counter + 1)
      }, 10)
      return () => clearInterval(interval);
    }
  },[isActive])

 
  // 4. Retornar un solo elemento HTML
  return (
    <div className="container">
      <h1 className="text-center">{title}</h1>
      <h2 className={status.subtitleStyle}>{status.subtitle}</h2>

      <div className="big-counter">
        <div><i className={status.icon}></i></div>
        <div>{Math.floor(counter / 10000000) % 10}</div>
        <div>{Math.floor(counter / 1000000) % 10}</div>
        <div>{Math.floor(counter / 100000) % 10}</div>
        <div>{Math.floor(counter / 10000) % 10}</div>
        <div>{Math.floor(counter / 1000) % 10}</div>
        <div>{Math.floor(counter / 100) % 10}</div>
        <div>,</div>
        <div>{Math.floor(counter / 10) % 10}</div>
        <div>{Math.floor(counter) % 10}</div>
        <div className="btn-group-vertical bt-group-sm" role="group" aria-label="Vertical button group">
          <button type="button" className={"btn btn-outline-success"}
            onClick={handlePrincipal}>
            {isActive ? 'Pause' : 'Start'}
          </button>
          <button type="button" className="btn btn-outline-danger"
            onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  )


}