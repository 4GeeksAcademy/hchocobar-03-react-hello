import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home.jsx';
import { Mensaje } from './components/Mensaje.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Mensaje color='danger'>
      Bienvenido
    </Mensaje>
    
    <Home/>

    <Mensaje color='primary'>
      Hola soy un mensaje
    </Mensaje>

    <Mensaje color='success'>
      <ul className="list-group">
        <li className="list-group-item">1 item 1</li>
        <li className="list-group-item">2 item 2</li>
        <li className="list-group-item">3 item 3</li>
      </ul>
    </Mensaje>
  </React.StrictMode>,
)
