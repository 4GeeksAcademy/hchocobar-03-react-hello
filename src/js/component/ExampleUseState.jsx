// 1 Importar React y Hooks
import React, { useState } from "react";


// 5 y 2
export const ExampleUseState = () => {
  // 3 Code JS
  // a. nombre de una variable
  // b. función que modificará el valor de la variable definida en 'a'
  // c. hooks()
  // d. valor inicial de la variable definida en 'a'
  const [ cohorte, setCohorte ] = useState('Spain 72')
  //      a        b              c        d
  // cohorte = 'Hola Mundo';   Esto nunca más en React
  const [ number, setNumber ] = useState(0)
  const [ background, setBackground ] = useState('alert alert-info display-1')


  function mayuscula() { 
    setCohorte(cohorte.toUpperCase())
  };
  
  function minuscula() { 
    setCohorte(cohorte.toLowerCase())
  };

  function changeBackground(color) {
    setBackground(`alert alert-${color} display-1`)
  }

  // 4
  return (
    <div className="container">
      <div className={background} role="alert">
        {number} - {cohorte}
      </div>

      <div className="btn-group mb-1" role="group" aria-label="Basic example">
        <button onClick={mayuscula} type="button" className="btn btn-primary">Mayúsculas</button>
        <button onClick={minuscula} type="button" className="btn btn-warning">Minúsculas</button>
      </div>

      <div className="btn-group mb-1" role="group" aria-label="Basic example">
        <button onClick={() => setNumber(number + 1)} type="button" className="btn btn-primary">Incrementar</button>
        <button onClick={() => setNumber(number - 1)} type="button" className="btn btn-success">Decrementar</button>
        <button onClick={() => setNumber(number * 2)} type="button" className="btn btn-warning">Duplicar</button>
      </div>

      <div className="btn-group mb-5" role="group" aria-label="Basic example">
        <button onClick={() => changeBackground('info')} type="button" className="btn btn-primary">Azul</button>
        <button onClick={() => changeBackground('success')} type="button" className="btn btn-success">Verde</button>
        <button onClick={() => changeBackground('warning')} type="button" className="btn btn-warning">Amarillo</button>
      </div>

    </div>
  )
}
