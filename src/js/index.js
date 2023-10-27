// Import react into the bundle
import React from "react";
import ReactDOM from "react-dom";  //  se importa solo en el index.js

// Include your styles into the webpack bundle
import "../styles/index.css";

// Import your own components
import Home from "./component/Home.jsx";

// Render your react application
               // Que renderiza? ,              // en donde?
ReactDOM.render(<Home />, document.querySelector("#app"));
