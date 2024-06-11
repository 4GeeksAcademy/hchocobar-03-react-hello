// 1. Importando React
import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";  // Include images into your bundle
import Navbar from "./Navbar.jsx";
import { Footer } from "./Footer.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Alert } from "./Alert.jsx";
import { Spinner } from "./Spinner.jsx";
import { Card } from "./Card.jsx";


// 2. Create your first component - Nombre del componente es en PascalCase
const Home = () => {
	// 3. Código de JS

	// 4. retornar un solo elemento HTML, (uno y solo uno)
	return (
		<div className="text-center">
			<Navbar />
			<Alert/>
			{/* <Spinner/> */}
			<Card/>
			<h1 className="text-center mt-5">Hello React</h1>
			<Jumbotron/>
			{/* <p><img src={rigoImage} /></p> */}
			<Footer/>
		</div>
	);
};


// 5. Exporto la función (para poder importarla en otro compenente)
export default Home;
