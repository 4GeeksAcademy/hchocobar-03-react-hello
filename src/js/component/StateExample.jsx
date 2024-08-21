import React, { useState } from "react";  // 1. Importamos REact y los Hooks


export const StateExample = () => {
  // 3. Code JS
  const [ text, setText ] = useState('Hola Mundo');
  const [ counter, setCounter ] = useState(1);
  const [ background, setBackground ] = useState('primary')


  const mayuscula = () => {
    setText(text.toUpperCase());
  }

  const cambio = () => {
    // quiero que text sea igual a 'Nuevo texto'
    // Opcion 1: 
    setText('Nuevo texto')
    setCounter(100)
    // Opción 2 incorrecta:        text = 'Nuevo texto'
  }
  
  const handleReset = () => {
    setCounter(0);
    setText(`Hola Mundo`);
  }

  return (
    <>
      <div className={`alert alert-${background} display-1`} role="alert">
        {counter} - {text}
      </div>
      <div className="my-2 container">
        <button onClick={mayuscula} type="button" className="btn btn-primary">Mayúsculas</button>
        <button onClick={() => setText(text.toLowerCase())} type="button" className="btn btn-secondary">Minúsculas</button>
        <button onClick={cambio} type="button" className="btn btn-success">Change value</button>
        <button onClick={handleReset} type="button" className="btn btn-warning">Reset</button>
      </div>
      <div className="my-2 container">
        <button onClick={() => setCounter(counter + 1)} type="button" className="btn btn-danger">Incrementar</button>
        <button onClick={() => setCounter(counter - 1)} type="button" className="btn btn-danger">Decrementar</button>
      </div>
      <div className="my-2 container">
        <button onClick={() => setBackground('primary')} type="button" className="btn btn-primary">Azul</button>
        <button onClick={() => setBackground('danger')} type="button" className="btn btn-danger">Rojo</button>
        <button onClick={() => setBackground('success')} type="button" className="btn btn-success">Verde</button>
        <button onClick={() => setBackground('warning')} type="button" className="btn btn-warning">Amarillo</button>
        <button onClick={() => setBackground(' d-none')} type="button" className="btn btn-info">Ocultar</button>

      </div>

      <div className={`alert alert-${background} display-1`} role="alert">
        {counter}
      </div>
    </>
  )

}
