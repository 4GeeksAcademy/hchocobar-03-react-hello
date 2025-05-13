import React from "react";  // Import React
import rigoImage from "../../img/rigo-baby.jpg";  // include images into your bundle
// 6.- Importamos nuestros componentes 
import Navbar from "./Navbar.jsx";
import { Alert } from "./Alert.jsx";
import { Spinner } from "./Spinner.jsx";
import { BtnCallActions } from "./BtnCallActions.jsx";
import { Card } from "./Card.jsx";


// Create your first component
const Home = () => {
	// codigo JS
	console.log('estoy dentro del componente Home')

	return (
		<div className="text-center">
			<Navbar/>
			<Alert/>
			<Spinner/>
			<h1 className="text-center mt-5 text-info">Intro to React</h1>
			<Card/>
			<BtnCallActions/>
			<p>
				Made by {10 * 5} <a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with				love!
			</p>
		</div>
	);
};

export default Home;
