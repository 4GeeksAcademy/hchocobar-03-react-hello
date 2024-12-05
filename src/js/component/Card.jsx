import React from "react"; // 1
import PropTypes from "prop-types";
import logo from '../../img/logo-reactjs.png'


// 5 y 2
export const Card = (props) => {
  // 3 Código JS


  // 4
  return (
    <div className="card" style={{width: "16rem"}}>
      <img src={props.imageURL} className="card-img-top" alt={props.imageAlt}/>
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p className="card-text">{props.email}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  )
}


Card.propTypes = {
  title: PropTypes.string,
  email: PropTypes.string,
  imageURL: PropTypes.string,
  imageAlt: PropTypes.string
}

Card.defaultProps = {
  title: 'Jhon Doe',
  email: "jhon.doe@example.ocm",
  imageURL: 'https://randomuser.me/api/portraits/men/23.jpg',
  imageAlt: 'Photo Jhon Doe'
}