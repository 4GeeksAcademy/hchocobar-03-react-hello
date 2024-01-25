// 1. Importamos React
import React from "react";
import { BtnCallToAction } from "./BtnCallToAction";
import { Link } from "react-router-dom";


// 2. Crear mi componente (function)
function Navbar() {
  // 3. Código de JS
  console.log('Creando el componente Navbar');

  // 4. Retornar un solo elemento HTML
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Spain 54</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/users">Users</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Proyectos
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/simple-counter">Simple Counter</Link></li>
                <li><Link className="dropdown-item" to="/todolist">Todo List</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/todolist-fetch">Todo List con Fetch</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <BtnCallToAction/>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

// 5. Exportar mi componente funcion
export default Navbar;