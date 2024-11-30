import React from "react";  // Import react into the bundle
import ReactDOM from "react-dom";
import "../styles/index.css";  // Include your styles into the webpack bundle
import Home from "./component/Home.jsx";  // Import your own components


// Render your react application
//              Qué?    , Donde?
ReactDOM.render(<Home />, document.querySelector("#app"));
