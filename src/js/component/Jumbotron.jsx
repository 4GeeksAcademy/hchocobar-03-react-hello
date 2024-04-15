// 1. Importamos react
import React from "react";
import { BtnReadMore } from "./BtnReadMore.jsx";


// 2. Creamos el comoponenete funcion
const Jumbotron = () => {
  // 3. Code JS
  const colorText = 'text-danger display-1';

  // 4. Retornamos un solo elemento HTML
  return (
    <div className="container">
      <div className="my-5">
        <div className="p-5 text-center bg-body-tertiary">
          <div className="container py-5">
            <h1 className="text-body-emphasis">Intro de React</h1>
            <p className="col-lg-8 mx-auto lead">
              This takes the basic jumbotron above and makes its background edge-to-edge with a <code>.container</code> inside to align content. Similar to above, it's been recreated with built-in grid and utility classes.
            </p>
            <p className={colorText}>Hola</p>
            <BtnReadMore/>
          </div>
        </div>
      </div>
    </div>
  )
}

// 5. Exportar
export default Jumbotron;
