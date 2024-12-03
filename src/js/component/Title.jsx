import React from "react"; // 1 Import React y todo lo que me haga falta
import PropTypes from "prop-types";


// 5 y 2
export const Title = (props) => {
  // 3 Codigo JS
  
  // 4 Retornamos un solo elemento HTML
  return (
    <h1 className={`text-${props.align} text-${props.color}`}>
      {props.text} - Clase: {props.number}
    </h1>
  )
}

Title.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  align: PropTypes.string,
  number: PropTypes.string
}

Title.defaultProps = {
  text: 'Custom Title',
  color: "danger",
  align: 'end',
  number: '!?'
}

// 7 y 6 
