/* Ejemplo de Props */
import React from "react"; // 1
import PropTypes from "prop-types";


// 5 y 2
export const Title = (props) => {
  // 3 Code JS
 
  
  // 4
  return (
    <h1 className={`text-center text-${props.color} mt-3`}>
      {props.text}
    </h1>
  )
}
