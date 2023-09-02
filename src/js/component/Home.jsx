// 1. importar React y todos lo import
import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { Members }  from "./Members.jsx";
import { Title } from "./Title.jsx";
import { Card } from "./Card.jsx";
import { Counter } from "./Counter.jsx";
// Include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import python from '../../img/logo-python.png';
import react from '../../img/logo-reactjs.png';
import hcht from '../../img/logo-hcht-uk.jpg';


// 2. Create your first component, primera en letra en Mayúscula.
const Home = () => {
	// 3. Código JS
	const title = 'Intro React';
	const subtitle = 'Hooks: useState';
	const description = 'Repaso, Desestructuración, useState';

	// 4. Definir el return q devuelve 1 solo elementeo HTML
	return (
		<div className="text-center">
			<Navbar/>
			<Title title={title} subtitle={subtitle} description={description} />
			<Counter/>
			<div className="container">
				<Card image={hcht} title='Héctor Chocobar'/>
				<Card image={python} title='Python' btn="Abrir nueva pestaña"/>
				<Card image={react}  title='React'/>
				<Card image={rigoImage} title='4Geeks Academy'/>
			</div>
			<Footer />
		</div>
	);
};

// 5. exporto el componente
export default Home;
