import React from "react";
import PropTypes from 'prop-types';


export const Title = (props) => {

  return (
    <div>
      <h1 className="mt-3">{props.title}</h1>
      <h2 className="text-primary mt-2">{props.subtitle}</h2>
      <p>{props.description}</p>
    </div>
  )
}


// Specifies the default values for props:
Title.defaultProps = {
  title: 'Intro React',
  subtitle: 'Subitulo',
  description: ''
};