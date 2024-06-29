// 1. Importar React
import React from "react";
import { BtnCallActions } from "./BtnCallActions";
import { Link } from "react-router-dom";

// 2. Crear el componente (funcion)
const Navbar = () => {
  // 3. Code JS
  let cohorte = 'Spain 72'

  // 4. Retornar un elemento HTML
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{cohorte}</Link>
        <BtnCallActions/>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/simple-counter">Simple Counter</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/todo-list">Todo List</Link></li>
                <li><Link className="dropdown-item" to="/todo-list-with-fetch">Todo List with Fetch</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}


// 5. Exportar el componente
export default Navbar;
