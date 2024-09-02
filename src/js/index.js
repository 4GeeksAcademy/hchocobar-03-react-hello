import React from "react";  // Import react into the bundle
import ReactDOM from "react-dom";
import "../styles/index.css";  // Include your styles into the webpack bundle
// import Home from "./component/Home.jsx";  // Import your own components
import { Layout } from "./Layout.jsx";

// Render your react application
//             1. Que?  , // Donde?
ReactDOM.render(<Layout />, document.querySelector("#app"));
