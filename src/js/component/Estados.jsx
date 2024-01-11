// 1. import react y los Hooks
import React, { useState } from "react";


// 5. y 2. exportar y crear el componente
export const Estados = () => {
  // 3. Código de JS
  // 3.1 Definir los Estados
  // Lo primero es el valor del estado
  // Lo segundo es la función que va a cambiar el valor del estado
  // Lo que está entre los parentesis es valor inicial del estado
  const [ counter, setCounter ] = useState(0);
  const [ paragraph, setParagraph ] = useState("Hola, soy un párrafo");
  // counter = "hola mundo"   ***** Nunca más en React con un estado   ******* 
  // setCounter("Hola Mundo")
  // console.log(counter)


  // counter = counter + 1 
  // 4. Ultima sentencia de JS, return q retorna un solo elemento HTML
  return (
    <>
      <h1>Ejemplos de Hoooks</h1>
      <div className="container">
        <h2>Counter</h2>
        <p>{counter}</p>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button onClick={() => setCounter(counter + 1)} type="button" className="btn btn-primary">Incrementar</button>
          <button onClick={() => setCounter(0)} type="button" className="btn btn-warning">Reset</button>
          <button onClick={() => setCounter(counter - 1)} type="button" className="btn btn-success">Decrementar</button>
        </div>
      </div>
      <hr/>
      <div className="container mt-3">
        <h2>Párrafo</h2>
        <p>{paragraph}</p>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button onClick={() => setParagraph(paragraph.toUpperCase())} type="button" className="btn btn-primary">Mayúsculas</button>
          <button onClick={() => setParagraph(paragraph.toLowerCase())} type="button" className="btn btn-warning">Minúsculas</button>
          <button onClick={() => setParagraph("Hola Mundo")} type="button" className="btn btn-success">Capiutal Case</button>
        </div>
      </div>
    </>
  )
}