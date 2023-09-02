// 1.
import React from "react";

// 2. y 5. 
export const Members = (props) => {
  // 3. JS
  let members = ['Carlos', 'Gonzalo', 'Luis', 'Elisa', 'Mathew', 'Gabriel'];

  // Retornar 1 elemento HTML
  return (
    <>
      <h2>{props.grupo}</h2>
      <ul className="list-group">
        {members.map((element) => <li className="list-group-item">{element}</li>)}
      </ul>
      <p>hola
      </p>
    </>
  )

}
