// Import react into the bundle
import React from "react";  // esta libreria la ejecturaremos en todos los componentes...
import ReactDOM from "react-dom";  // esta librería se ejecuta solamente aquí (index.js)
import "../styles/index.css";  // include your styles into the webpack bundle
// Import your own components
import Home from "./component/Home.jsx";

// Render your react application
                // Qué? , Dónde?
ReactDOM.render(<Home />, document.querySelector("#app"));
