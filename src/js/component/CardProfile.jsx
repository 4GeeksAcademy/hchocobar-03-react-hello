import React from "react";  // 1.
import { Spinner } from "./Spinner";


// 2. y 5.
export const CardProfile = () => {
  // 3. Código de JS

  // 4. Retornamos un elemento HTML
  return (
    <div className="card" style={{width: '18rem'}}>
    {/* <div class="card" style="width: 18rem;"> */}
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  )
}