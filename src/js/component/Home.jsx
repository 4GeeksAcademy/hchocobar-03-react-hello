import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";  // Include images into your bundle
import Navbar from "./Navbar.jsx";  // Importar el componente
import { Card } from "./Card.jsx";  // Import el componente
import { Footer } from "./Footer.jsx";
import { Jumbotrom } from "./Jumbotrom.jsx";
import { Alert } from "./Alert.jsx";
import { Spinner } from "./Spinner.jsx";
import { BtnCallAction } from "./BtnCallAction.jsx";


// Create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<h1 className="text-center mt-5">Intro to React</h1>
			<Alert/>
			<Spinner/>
			<Card/>
			<Jumbotrom/>

			<p><img src={rigoImage} /></p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<Footer/>
		</div>
	);
};

export default Home;
