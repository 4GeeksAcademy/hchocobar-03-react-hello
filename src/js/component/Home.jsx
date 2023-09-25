// 1. importar React y todos lo import
import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { Members }  from "./Members.jsx";
// Include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Title } from "./Title.jsx";
import { Card } from "./Card.jsx";


// 2. Create your first component, primera en letra en Mayúscula.
const Home = () => {
	// 3. Código JS

	// 4. Definir el return q devuelve 1 solo elementeo HTML
	return (
		<div className="text-center">
			<Navbar/>
			<h1 className="text-center mt-5">Intro React</h1>
			
			<Card title='Tarjeta 1'/>
			<Card title='Otra Tarjeta' btn="Abrir nueva pestaña"/>
			<Card title='Tarjeta'/>
			<Card title='Tarjeta 4'/>
			<a href="#" className="btn btn-success">
				bootstrap
			</a>
			<Footer />
		</div>
	);
};

// 5. exporto el componente
export default Home;
