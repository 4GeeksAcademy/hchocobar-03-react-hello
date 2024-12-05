import React, { useState } from "react"; // 1 Importamos React y todo lo necesario


// 5 y 2
export const ExampleUseState = () => {
  // 3 Código JS
  //      variable  // funcion            // valor inicial
  const [ text, setText ] = useState('Hola Mundo')
  const [ counter, setCounter ] = useState(0);
  const [ background, setBackground ] = useState('danger');

  const mayuscula = () => { setText(text.toUpperCase()) };
  const handleReset = () => {
    // Opción 1: correcta en React
    setText('Hello World');
    setCounter(0)
    setBackground('danger')
    // Opción 2: inválida en React (correcto en JS)
    // text = 'hola';
  }

  // 4
  return (
    <div className="container">
      <div className={`alert alert-${background} display-1`} role="alert">
        {counter} - {text}
      </div>
       <div>
        <button onClick={mayuscula} type="button" className="btn btn-primary">Mayúsculas</button>
        <button onClick={() => setText(text.toLowerCase())} type="button" className="btn btn-secondary">Minúsculas</button>
      </div>
      <div className="my-2">
        <button onClick={() => setCounter(counter + 1)} type="button" className="btn btn-danger">Incrementar</button>
        <button onClick={() => setCounter(counter - 1)} type="button" className="btn btn-warning">Decrementar</button>
        <button onClick={() => setCounter(counter * 2)} type="button" className="btn btn-info">Duplicar</button>
      </div>
      <div className={`alert alert-${background} display-1`} role="alert">
        {text}
      </div>
      <div className="my-2">
        <button onClick={() => setBackground('success')} type="button" className="btn btn-success">Verde</button>
        <button onClick={() => setBackground('primary')} type="button" className="btn btn-primary">Azul</button>
      </div>
      <button onClick={handleReset} type="button" className="btn btn-danger">Reset</button>
    </div>
  )
}


// 7 y 6
