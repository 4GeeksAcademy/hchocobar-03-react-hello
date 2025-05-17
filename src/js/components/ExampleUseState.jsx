// 1
import { useState } from "react";  // Importando el Hook useState desde "react"


// 5 y 2
export const ExampleUseState = () => {
  // 3 Code JS
  //     estado,   función Seter           valor inicial
  const [ text,      setText ]    = useState('Hola mundo');
  const [ backgroud, setBackground ] = useState('warning')
  // console.log(text)

  // cambiar el valor de text por 'Spain 108'
  // text = 'Spain108'  ; Incorrecto en React, correcto en JS
  const handleText = () => { 
    // la función seter cambia el valor, y renderiza el estado en todos los lugares donde se está fisualizando....
    setText('Spain108')
    setBackground('danger')
  }

  const handleReset = () => {
    setText('Hola Mundo');
    setBackground('warning')
  }

  const handleNewText = (newText) => {
    setText(newText)
  }

  
  // 4 Return 1 HTML
  return (
    <div className="container">
      <h1>UseState()</h1>
      <div className={`alert alert-${backgroud} display-1`} role="alert">
        {text}
      </div>
      <div>
        <button onClick={handleText} type="button" className="btn btn-primary">
          Cambiar
        </button>
        <button onClick={handleReset} type="button" className="btn btn-secondary">Reset</button>
      </div>
      <div className="mt-2">
        <button onClick={() => setText(text.toUpperCase())} type="button" className="btn btn-success">
          Mayúsculas
        </button>
        <button onClick={() => setText(text.toLowerCase())} type="button" className="btn btn-danger">
          Minúsculas
        </button>

      </div>
      <div className="mt-2">
        <button onClick={() => handleNewText('Nuevo Texto')} type="button" className="btn btn-warning">
          Nuevo Texto
        </button>
        <button onClick={() => handleNewText('Otro Texto')} type="button" className="btn btn-info">
          Otro Texto
        </button>

      </div>
      <div className="mt-2">
        <button type="button" className={`btn btn-${backgroud}`}>{text}</button>
      </div>
    </div>
  )
}