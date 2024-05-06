import React from "react";
import { Link } from "react-router-dom";


export const Derivar = () => {

  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      <Link className="btn btn-primary" to='/card'>Card</Link>
      <Link to='/jumbotron' className="btn btn-success">
        <h1>Jumbotron</h1>
      </Link>
      <button type="button" className="btn btn-success">Right</button>
    </div>
  )
}