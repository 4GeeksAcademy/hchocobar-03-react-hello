import React, { useState } from "react";
import '../../styles/trafficlight.css';


export const TrafficLight = () => {
  const [color, setColor] = useState("");  // 'yellow' 'green' 'red'

  return (
    <div className="container d-flex justify-content-around mt-5">
      <div className={"col-2 bg-success" + (color === 'green' ? " glow-green" : '')}
        onClick={() => setColor('green')}>
        Verde
      </div>
      <div className={"col-2 bg-warning " + (color === 'yellow' ? 'glow-yellow' : '')}
        onClick={() => setColor('yellow')}>
        Amarillo
      </div>
      <div className={"col-2 bg-danger " + (color === 'red' ? 'glow-red' : '')}
        onClick={() => setColor('red')}>
        Rojo
      </div>
    </div>
  )
}



/* 




*/