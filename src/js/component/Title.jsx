import React from "react";
import PropTypes from 'prop-types';


export const Title = (props) => {

  return (
    <div>
      <h2>{props.title2}</h2>
      <h3>{props.title3}</h3>
      <p>{props.clase}</p>
    </div>
  )
}


// Specifies the default values for props:
Title.defaultProps = {
  title2: 'Tema de la clase',
  title3: 'Subitulo'
};