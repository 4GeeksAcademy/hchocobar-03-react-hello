import React from "react";  // 1 Importo React
import { BtnCallActions } from "./BtnCallAction.jsx";


// 2 Creamos nuestro componente
const Navbar = () => {
  // 3 Codigo JS
  const cohorte = 'Spain 91'

  // 4 Retornamos un solo elemento HTML
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{cohorte}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
              <BtnCallActions/>
          </form>
        </div>
      </div>
    </nav>
  )
}


// 5 exportamos nuetro componente
export default Navbar;


// 6 En el padre, importo mi componente
// 4 En el padre, utilizo mi componente
