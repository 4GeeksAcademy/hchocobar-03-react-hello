// Import react into the bundle
import React from "react";
import ReactDOM from "react-dom";  // Se importa solo en el index.js
import "../styles/index.css";  // Include your styles into the webpack bundle
import { Layout } from "./Layout.jsx";  // Import your own components


// Render your react application
//               Qué? ,   Donde?
ReactDOM.render(<Layout />, document.querySelector("#app"));
