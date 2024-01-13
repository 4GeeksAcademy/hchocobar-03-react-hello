import React from "react";  // 1. Importamos React
import rigoImage from "../../img/rigo-baby.jpg";  // Include images into your bundle
// 6. Importar componentes
import Navbar from './Navbar.jsx';
import { Card }from './Card.jsx';
import { CardProfile } from "./CardProfile.jsx";
import { Spinner } from "./Spinner.jsx";
import { Members } from "./Members.jsx";
import { Title } from "./Title.jsx";
import SimpleCounterBonus from "./SimpleCounterBounus.jsx";
import { Estados } from "./Estados.jsx";
import { Form } from "./Form.jsx";


// Create your first component
/* comentario
   multilinea */
const Home = () => {
	// Código JS
	const titulo = 'Intro React!';

	return (
		<div className="text-center">
			{/* 7. utilizar el componente */}
			<Navbar/>
			<Title subtitulo="Entradas Controladas"/>
			<Form/>
			{/* <SimpleCounterBonus/> */}
			{/* <Estados/> */}
			{/* <Members/> */}
			{/* <Spinner/> */}
			{/* <CardProfile/> */}
			{/* <Card/> */}
			<p>
				Made by{' '}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
