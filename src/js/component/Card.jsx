import React from "react";
import logoReact from "../../img/logo-reactjs.png"


export const Card = () => {

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="card" style={{width: '24rem', color: 'red'}}>
          <img src={logoReact} className="card-img-top" alt="..."/>
          <img src="https://randomuser.me/api/portraits/men/64.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      </div>
    </div>
  )
}