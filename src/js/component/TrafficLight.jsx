import React, { useState } from "react";


export const TrafficLight = () => {
  const [ color, setColor ] = useState('');

  const glowGreen = (color) => { setColor(color);}

  return (
    <div className="container">
      <div className="row">
        <div className="button-gro">
          <div className={`btn btn-danger mx-5 glow-${color == 'red' ? color : ''}`} 
            onClick={() => setColor('red')}>
            Rojo
          </div>
          <div className={`btn btn-warning mx-5 glow-${color == 'yellow' ? color : ''}`}
            onClick={() => setColor('yellow')} >
            Amarillo
          </div>
          <div className={`btn btn-success mx-5 glow-${color == 'green' ? color : 'hola'}`}
            onClick={() => glowGreen('green')}>
            Verde
          </div>
        </div>
      </div>
    </div>
  )
}

