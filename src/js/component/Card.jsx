import React from "react";
import PropTypes from "prop-types";
import logoReact from "../../img/logo-reactjs.png"

export const Card = (props) => {

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="card" style={{width: '24rem'}}>
          <img src={props.imageURL} className="card-img-top" alt={props.imageAlt}/>
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.description}</p>
              <a href="#" className="btn btn-primary">{props.textButtom}</a>
            </div>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  textButtom: PropTypes.string,
  imageURL: PropTypes.string,
  imageAlt: PropTypes.string
}

Card.defaultProps = {
  title: 'Card Title',
  description: "Some quick example text to build on the card title and make up the bulk of the card's content",
  textButtom: 'Learn more',
  imageURL: '...',
  imageAlt: '...'
}