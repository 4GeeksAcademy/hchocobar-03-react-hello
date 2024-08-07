import React from "react"; // 1. Importo React
import PropTypes from "prop-types";
import logoHCHT from '../../img/logo-hcht-uk.jpg';


// 5. y 2. Exporto y creo el componente
export const Card = (props) => {
  // 3. Code JS
  console.log('Hola mundo desde Card');

  // 4. 
  return (
    <div className="container">
      <div className="card">
        <img src={props.logo} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  logo: PropTypes.string,
}


Card.defaultProps = {
  title: 'Card Title',
  description: "Some quick example text to build on the card title and make up the bulk of the card's content",
  logo: logoHCHT
}