import React from "react";  // Import react into the bundle
import ReactDOM from "react-dom";
import "../styles/index.css";  // Include your styles into the webpack bundle
// import Home from "./component/Home.jsx";  // Import your own components
import Layout from "./Layout.jsx";

/* 
Comentario 
Multilínea en JS
*/

// Render your react application
// Render       1. QUE  , 2. DONDE
// ReactDOM.render(<Home />, document.querySelector("#app"));
ReactDOM.render(<Layout />, document.querySelector("#app"));
