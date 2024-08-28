//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
// import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
// import Home from "./component/Home.jsx";
import { Layout } from "./Layout.jsx";

//render your react application
// ReactDOM.render(<Home />, document.querySelector("#app"));
ReactDOM.render(<Layout />, document.querySelector("#app"));
// ReactDOM.createRoot(document.getElementById('app')).render(<Home/>);
// ReactDOM.createRoot(document.getElementById('app')).render(<Layout/>);
