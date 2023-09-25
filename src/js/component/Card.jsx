import React from "react";
import PropTypes from 'prop-types';

export const Card = (props) => {
  console.log(props)

  return (
    <div class="card">
      <img src="..." class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.text}</p>
          <a href="#" class="btn btn-primary">{props.btn}</a>
        </div>
    </div>
  )
}

Card.defaultProps = {
  title: 'Titulo',
  text: 'parrafo de la card',
  btn: 'Go to action'
}