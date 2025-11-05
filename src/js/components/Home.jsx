import React from "react";  // 0.- Import React
import rigoImage from "../../img/rigo-baby.jpg";  //include images into your bundle
import Navbar from './Navbar.jsx';
import { Footer } from './Footer.jsx';
import { Jumbotron } from "./Jumbotron.jsx";
import { Alert } from "./Alert.jsx";
import { Spinner } from "./Spinner.jsx";
import {Card} from "./Card.jsx";
import { ExampleUseState } from "./ExampleUseState.jsx";
import { SimpleCounter } from "./SimpleCounter.jsx";



// 1.- Create your first component
const Home = () => {
	// 3.- Escribir mi code JS

	// 4.- Retornar UN Solo elemento HTML (uno y solo uno)
	return (
		<div className="text-center">
			<Navbar/>
			<SimpleCounter/>
			{/* 			
			<ExampleUseState/>
			<Alert/>
			<Spinner/>
			<h1 className="text-center mt-5">Intro to React</h1>
			<Card name={'Ezequiel'} role={'Frontend'} url={'https://randomuser.me/api/portraits/men/42.jpg'}/>
			<Card name={'Gustavo'} role={'Backend'} url={'https://randomuser.me/api/portraits/men/93.jpg'}/>
			<Card name={'Alex'} roel={'Fullstack'} url={'https://randomuser.me/api/portraits/men/12.jpg'}/>
			<Jumbotron/>
			*/}			
			<Footer/>
		</div>

	);
};

// 2. Exportar el Componente (ponerlo disponible para otro archivo)
export default Home;