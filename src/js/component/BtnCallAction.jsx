import React from "react";


export const BtnCallAction = () => {
  // Code JS
  const myAlert = () => {alert('Hola Mundo desde mi boton')}

  
  return (
    <>
      <button onClick={myAlert} type="button" className="btn btn-warning">
        Warning
      </button>
    </>
  )
}