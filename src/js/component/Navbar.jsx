import React from "react";  // 1. Importo React
import { Link } from "react-router-dom";
import { BtnCallAction } from "./BtnCallAction.jsx";


// 2 Creo el componente con PascalCase (1ra regla de oro)
const Navbar = () => {
  // 3 Código de Javascript
  console.log('Hola mundo desde el navbar');

  // 4 Retornamos un solo elemento html (2da regla de oro)
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Cohort US-01</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/characters">Characters</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Project
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/traffic-light">Traffic Light</Link></li>
                <li><Link className="dropdown-item" to="/simple-counter">Simple Counter</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="/todo-list">Todo List</Link></li>
                <li><Link className="dropdown-item" to="#">Todo List con Fetch</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
              <BtnCallAction/>
          </form>
        </div>
      </div>
    </nav>
  )
}


// 5 Exportamos nuestro componente
export default Navbar
