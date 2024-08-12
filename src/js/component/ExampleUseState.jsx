import React, { useState } from "react";  // 1 Importar React y Hoocks

// Reglas:
// 1.- Nunca cambiar el valor de un estado utilizando el operador de asignación (=) de JS
// 2.- El estado vive dentro dentro del componente (no puedo acceder al estado fuera del componente)


// 5 y 2
export const ExampleUseState = () => {
  // 3 Code JS
  // 3.1 Defino los Hoocks
  //  a.- Estado
  //  b.- fx Cambia el valor de mi estado
  //  c.- es el valor inicial de mi estado
  //      estado, fx q cambia el estado = useState(valor incial)
  //      a        b                       c
  const [ counter, setCounter ] = useState(0);
  // Definir el estado lineText
  const [ lineText, setLineText ] = useState('Hola Mundo desde el Hoock useState');
  const [ background, setBackground ] = useState('warning');
  
  // counter = counter + 1;  // esto nunca xq rompe React

  const incrementar = () => {
    setCounter(counter + 1)
    console.log(counter);
    setBackground('warning');
  }

  // 4
  return (
    <div className="container text-center">
      <div className={`alert alert-${background}`} role="alert">
        <span className="display-1">{counter}</span>
      </div>
      <div className="container my-1">
        <button onClick={() => setBackground('info')} type="button" className="btn btn-primary">Celeste</button>
        <button onClick={() => setBackground('secondary')} type="button" className="btn btn-secondary">Gris</button>
        <button onClick={() => setBackground('success')} type="button" className="btn btn-success">Verde</button>
        <button onClick={() => setBackground('danger')} type="button" className="btn btn-danger">Rojo</button>
      </div>


      <div className={`alert alert-${background}`} role="alert">
        <span className="display-1">{counter}</span>
      </div>
      <div className="container my-1">
        <button onClick={incrementar} type="button" className="btn btn-primary">Incrementar</button>
        <button onClick={() => setCounter(counter - 1)} type="button" className="btn btn-secondary">Decrementar</button>
        <button onClick={() => {setCounter(counter * 2)}} type="button" className="btn btn-success">Duplicar</button>
        <button onClick={() => setCounter(counter * counter)} type="button" className="btn btn-danger">Potencia</button>
      </div>

      <div className={`alert alert-${background} mt-4`} role="alert">
        <span className="display-4">{counter} - {lineText}</span>
      </div>
      <div className="container my-2">
        <button onClick={() => setLineText(lineText.toLowerCase())} type="button" className="btn btn-warning">Minúsculas</button>
        <button onClick={() => setLineText(lineText.toUpperCase())} type="button" className="btn btn-info">Mayúsculas</button>
        <button onClick={() => setLineText('Hola Mundo')} type="button" className="btn btn-light">Light</button>
        <button onClick={() => setLineText('Cohorte US-01')}type="button" className="btn btn-dark">Dark</button>
      </div>
    </div>
  )
}
