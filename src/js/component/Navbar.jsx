// 1. Importamos React
import React from "react";
import { Link } from "react-router-dom";


// 2. Creamos nuestro componente
// Ejemplo con function
function Navbar() {
  // 3. Code JS
  const cohorte = 'Spain 65';
  console.log('navbar');

  // 4. return: 1 solo elemento
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{cohorte}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/card">Card</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                React Project
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/counter">Simple Conuter</Link></li>
                <li><Link className="dropdown-item" to="/counter-plus">Simple Couter Bonus</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="/traffic-light">Traffic Light</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Todo Lists
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/todo-list">Todo List</Link></li>
                <li><Link className="dropdown-item" to="/todo-list-fetch">Todo List with Fetch</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="/todo-list-4geeks">Todo List 4geeks</Link></li>
                <li><Link className="dropdown-item" to="/todo-list-jph">Todo List JPH</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/users'>Users</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

// 5. exportamos
export default Navbar;
