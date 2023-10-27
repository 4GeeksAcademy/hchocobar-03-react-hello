// 1. importar react
import React from "react";
import { Spinner } from "./Spinner.jsx";

// 2. crear el componente
// 5. exportar
export const Alert = () => {
  // 3. code JS

  // 4. return html
  return (
    <div className="alert alert-primary" role="alert">
      A simple primary alert—check it out!
      <Spinner/>
    </div>
  )
}
