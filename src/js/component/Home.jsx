import React from "react";  // 1. Importando React
import rigoImage from "../../img/rigo-baby.jpg";  // Include images into your bundle
import Navbar from "./Navbar.jsx";
import { Footer } from "./Footer.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Alert } from "./Alert.jsx";
import { Spinner } from "./Spinner.jsx";
import { Card } from "./Card.jsx";


// 2. Create your component con sintaxis PascalCase (siempre la primera letra en mayúsculas)
const Home = () => {
	// 3. Código de JS

	// 4. Retornanmos un solo elemento HTML
	return (
		<div className="text-center">
			<Navbar/>
			<Alert />
			{/* <Spinner/> */}
			<Card/>
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<Jumbotron/>
			{/*<img src={rigoImage} />*/}
			
			{/* 
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			*/}
			<Footer/>
		</div>
	);
};

// 5. exportar nuestro componente
export default Home;

// 6 Importar el componente donde lo quiero utilizar
// 7 Utilizarlo