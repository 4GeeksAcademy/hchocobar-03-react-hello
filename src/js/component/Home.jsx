import React from "react";   // 1. Importamos React
import rigoImage from "../../img/rigo-baby.jpg";  // Include images into your bundle
import Navbar from './Navbar.jsx';  // 6 Importo mi componente
import { Footer } from "./Footer.jsx";  // 6
import { BtnCallActions } from "./BtnCallAction.jsx";
import { Alert } from './Alert.jsx';
import { Card } from "./Card.jsx";
import { Jumbotron } from "./Jumbotron.jsx";


// 2. Create your  component
const Home = () => {
	// 3.-Código JS

	// 4. Retorno un solo elemento HTML
	return (
		<div className="text-center">
			<Navbar/>
			<Alert/>
			<Jumbotron/>
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<Card/>
			<p>
				{/* <img src={rigoImage} /> */}
			</p>
			<BtnCallActions/>
			<Footer/>
		</div>
	);
};

// 5. Exporto mi componente
export default Home;
