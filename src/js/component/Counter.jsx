// 1. Importando React y los Hooks
import React, { useState, useEffect } from "react";


export const Counter = () => {
  // Desestrucuturación
  // 1. El nombre de la variable (counter)
  // 2. El nombre de la función que va a cambiar el valor a a la variable, comienzan con set
  // 3. Dentro de los parentesis, tengo el valor incial de la variable
  const [counter, setCounter] = useState(0);
  const [letter, setLetter] = useState('Letra');
  const [theme, setTheme] = useState('bg-secondary');
  console.log(letter);

  function reset() {
    setCounter(0);
    setLetter('Letra inicial');
    setTheme('bg-primary');
  }

  return (
    <>
      <div className={"container " + theme}>
        <h1>Counter</h1>
        <p>{letter}</p>
        <p>{counter}</p>
      </div>
      <div className="container mb-3">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button onClick={reset} type="button" className="btn btn-primary">Reset</button>
          <button onClick={() => setTheme('bg-warning')} type="button" className="btn btn-success">Warning</button>
          <button onClick={() => setTheme('bg-danger')} type="button" className="btn btn-warning">Danger</button>
        </div>
      </div>      <div className="container mb-3">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button onClick={() => setLetter(letter.toUpperCase())} type="button" className="btn btn-primary">Mayúscula</button>
          <button onClick={() => setLetter(letter.toLowerCase())} type="button" className="btn btn-success">Minúscula</button>
          <button onClick={() => setLetter('Nuevo string para letter')} type="button" className="btn btn-warning">Multiplicar</button>
        </div>
      </div>
      <div className="container mb-3">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button onClick={() => setCounter(counter + 1)} type="button" className="btn btn-primary">Incrementar</button>
          <button onClick={() => setCounter(counter - 1)} type="button" className="btn btn-success">Decrementar</button>
          <button onClick={() => setCounter(counter * 2)} type="button" className="btn btn-warning">Multiplicar</button>
        </div>
      </div>
    </>
  )
}