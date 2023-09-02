// Import react into the bundle
import React from "react";  // import React
import ReactDOM from "react-dom";  // Import ReactDOM

// include your styles into the webpack bundle
import "../styles/index.css";

// Import your own components
import Home from "./component/Home.jsx";  // Importando el componente principal

// Render your react application
//              What/Que?                 Where/Donde ? 
ReactDOM.render(<Home />, document.querySelector("#app"));
