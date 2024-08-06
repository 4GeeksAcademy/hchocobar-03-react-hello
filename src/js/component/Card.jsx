import React from "react"; // 1. Importo React
import logoPython from '../../img/logo-python.png';


// 5. y 2. Exporto y creo el componente
export const Card = () => {
  // 3. Code JS
  console.log('Hola mundo desde Card');

  // 4. 
  return (
    <div className="container">
      <div className="card" style={{width: "18rem"}}>
        <img src={logoPython} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
      </div>
    </div>
  )
}
