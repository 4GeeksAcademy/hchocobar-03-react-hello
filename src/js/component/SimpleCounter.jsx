import React, { useState, useEffect } from "react";


export const SimpleCounter = () => {
  const [ counter, setCounter ] = useState(0);
  const [ running, setRunning ] = useState(false);
  const [ status, setStatus ] = useState({
    title: 'Clock',
    icon: 'far fa-clock',
    style: 'text-success'
  })

  const handleReset = () => {
    setRunning(false)
    setCounter(0)
  }

  const handleButton = () => {
    setRunning(!running)
    if (running) {
      setStatus({title: 'Clock', icon: 'far fa-clock',style: 'text-success'})
    } else {
      setStatus({title: 'Chronometer', icon: 'fas fa-stopwatch',style: 'text-primary'})
    }
  }

  // useEffect: parámetros: funcion setup, dependencias.
  // ejecución con array de dependencias vacío: cuando se levanta o se lanza el componente
  // ejecución con algo dentro del array de dependencias: cuando cambia el valor de la dependencia
  useEffect(() => {
    if (running) {
      const newInterval = setInterval(() => {
        setCounter(counter => counter + 1)
      }, 10)
      return () => clearInterval(newInterval);
      /* 
      El return en la función dentro del hook useEffect() se utiliza para definir un 'cleanup' 
      que es una función de limpieza que React ejecutará en dos situaciones principales:
    
      1. Cuando el componente se desmonte (unmount): Si el componente que utiliza este useEffect() 
      deja de estar presente en la interfaz de usuario (por ejemplo, si navegas a otra página o si 
      dejas de renderizar ese componente), React ejecutará la función de limpieza para asegurarse 
      de que los efectos secundarios se detengan correctamente.
      
      2. Cada vez que alguna de las dependencias del useEffect() cambie: React ejecutará la función 
      de limpieza antes de ejecutar de nuevo el useEffect().
      
      En este caso específico, la función de limpieza se utiliza para detener el intervalo que se creó con setInterval() y de esta manera evitar la creación de múltiples intervalos innecesarios y para asegurarse de que el intervalo se limpie correctamente cuando ya no sea necesario 
      */
    }
  }, [running])


  return (
    <div>
      <h1 className="text-center text-success">Simple Counter</h1>
        <h2 className={status.style}>{status.title}</h2>
        <div className="big-counter">
          <div><i className={status.icon}></i></div>
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
          <div className="d-grid gap-2 col-6 mx-auto">
            <button onClick={handleButton} type="button" className="btn btn-outline-success">
               {running ? 'Stop' : 'Start'}
            </button>
            <button onClick={handleReset} type="reset" className="btn btn-outline-danger">Reset</button>
          </div>
        </div>
    </div>
  )
}
