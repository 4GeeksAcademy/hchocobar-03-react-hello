import React from 'react'  // Import React
import ReactDOM from 'react-dom/client'  // Import ReactDOM
//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import '../styles/index.css'  // index.css'
// components
import Home from './components/Home.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
)
