import React from 'react';  // Import React
import ReactDOM from 'react-dom/client';  // Import ReactDOM
import "bootstrap/dist/css/bootstrap.min.css";  // Bootstrap
import "bootstrap";  // Bootstrap
import '../styles/index.css';  // index.css'

import Home from './components/Home.jsx';  // Importando components (principal)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
)
