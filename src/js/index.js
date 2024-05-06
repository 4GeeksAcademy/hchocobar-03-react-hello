import React from "react";  //import react into the bundle
// import reactDOM (solo una vez en toda nuestra applicación)
import ReactDOM from "react-dom";  
import "../styles/index.css";  // include your styles into the webpack bundle

//import your own components
// import Home from "./component/Home.jsx";
import { Layout } from "./Layout.jsx";

//render your react application
//              Qué?      Dónde?
ReactDOM.render(<Layout />, document.querySelector("#app"));
