import React from "react";  // 1. Importamos React
import rigoImage from "../../img/rigo-baby.jpg";  // Include images into your bundle
// 6. Importar componentes
import Navbar from './Navbar.jsx';
import { Card }from './Card.jsx';
import { CardProfile } from "./CardProfile.jsx";
import { Spinner } from "./Spinner.jsx";


// Create your first component
/* comentario
   multilinea */
const Home = () => {
	// Código JS

	return (
		<div className="text-center">
			{/* 7. utilizar el componente */}
			<Navbar/>
			<Spinner/>
			<CardProfile/>
			<Card/>
			<h1 className="text-center mt-5">Intro React!</h1>
			<p>
				Made by{' '}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
