// 1. Importamos React y Hooks
import React, { useState } from "react";


// 5 y 2. 
export const StateExample = () => {
  // 3. JS
  // 3.1 Inicializo los hooks 
     // a. defino el nombre de la variable de estado 
     // b. defino el nombre de la funcion que cambia el valor del estado
     // c. Aplico el hook useState con un valor inicial del estado
  const original = 'Hola Mundo'
  const [number, setNumber] = useState(10);
  const [paragraph, setParagraph] = useState(original);
  const [background, setBackground] = useState('alert alert-primary display-1')



  // number += 10;  esto Nunca más 

  function duplicar() {
    setNumber(number * 2);  // number = number * 2
    setBackground('alert alert-warning display-1');  // background = 'alert alert-warning display-1'
  }


  const handleBackground = (theme) => {
    if (theme == 1) {
      setBackground('alert alert-success display-1')

    }
    if ( theme == 2 ) {
      setBackground('alert alert-danger display-1')
    }
  }


  // 4.
  return (
    <div className="container">
      <div className={background} role="alert">
        {number} - {paragraph}
      </div>
      
      <div className={background}>
        Hector
      </div>


      {/* incoco a la función directamente */}
      <div class="btn-group" role="group" aria-label="Basic example">
        <button onClick={() => setParagraph(paragraph.toUpperCase())} type="button" class="btn btn-primary">Mayúsculas</button>
        <button onClick={() => setParagraph(paragraph.toLowerCase())} type="button" class="btn btn-success">Minúsculas</button>
        <button onClick={() => setParagraph(original)} type="button" class="btn btn-info">Valor incial</button>
      </div>

      {/* Invoco a la función que creado sin parámetros */}
      <div class="btn-group" role="group" aria-label="Basic example">
        <button onClick={() => setNumber(number + 1)} type="button" class="btn btn-primary">Incrementar</button>
        <button onClick={() => setNumber(number - 1)} type="button" class="btn btn-success">Decrementar</button>
        <button onClick={duplicar} type="button" class="btn btn-warning">Duplicar</button>
      </div>

      {/* Invoco una función y le envío un parámetro */}
      <div class="btn-group" role="group" aria-label="Basic example">
        <button onClick={() => handleBackground(1)} type="button" class="btn btn-primary">Verde</button>
        <button onClick={() => handleBackground(2)} type="button" class="btn btn-success">Rojo</button>
      </div>
    </div>
  )
}



