import React from "react";
import PropTypes from "prop-types";
// import image from '../../img/React1.png';
import logo from '../../img/logo-hcht-uk.jpg';


export const Card = (props) => {
  // 3.  code js

    
  // 4.
  return (
    <div className="container my-3">
      <div className="card" style={{width: "18rem"}}>
        {/* style="width: 18rem;" */}
        <img src={props.image} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <a href="#" className="btn btn-primary">{props.textButton}</a>
          </div>
      </div>
    </div>
  )
}


Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  textButton: PropTypes.string,
  image: PropTypes.string
}

Card.defaultProps = {
  title: 'Card Title',
  description: 'Alguna descripción de tu contenido',
  textButton: 'Leer más...',
  image: logo
}
