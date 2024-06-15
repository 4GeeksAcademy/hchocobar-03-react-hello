// 1 im
import React, { useState } from "react";

// 5 y 2
export const TrafficLight = () => {
  // 3
  const [color, setColor] = useState('')

  // setColor('rojo')
  
  // 4 Retornar un solo elemento HTML
  return (
    <div className="container d-flex justify-content-around my-5">
      <div className={`col-2 bg-success ${color == 'verde' ? 'glow-green' : ''}`}
        onClick={() => setColor('verde')}>
        Verde
      </div>
      <div className={`col-2 btn btn-warning ${color == 'amarillo' ? 'glow-yellow': ''}`}
        onClick={() => setColor('amarillo')}>
        Amarillo
      </div>
      <div className={`col-2 bg-danger ${color == 'rojo' ? 'glow-red' : ''}`}
        onClick={() => setColor('rojo')}>
        Rojo
      </div>
    </div>
  )
}


