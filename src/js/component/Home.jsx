// 1. Importar React
import React from "react";
// Include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import logoPython from '../../img/logo-python.png';
import logoReact from '../../img/logo-reactjs.png';
import logoHector from '../../img/logo-hcht-uk.jpg';
// Componentes
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import { Spinner } from "./Spinner.jsx";
import { Card } from "./Card.jsx";
import { Alert } from "./Alert.jsx";
import { StateExample } from "./StateExample.jsx";
import { SimpleCounterBonus } from "./SimpleCounterBonus.jsx";
import { TrafficLight } from "./TrafficLight.jsx";
import { SimpleCounter } from "./SimpleCounter.jsx";
import { Login } from "./Login.jsx";


// 2. Create ours component en PascalCase
const Home = () => {
	// 3. Todo nuestro código de JS
	console.log('Hola Mundo React')

	// 4. Retornamos HTML -> un solo elemento HTML	
	return (
		<div className="text-center">
			<Navbar />
			<Alert />
			<Login />
			{/* 
			<TrafficLight />
			<SimpleCounterBonus />
			<SimpleCounter />
			<StateExample />
			<div className="container d-flex">
				<Card title={'Python'}
					description={'Una descripción para Python'}
					imageURL={logoPython}
					imageAlt={'Logo de Python'}
				/>
				<Card title={'React'}
					description={'Una descripción para React, una librería de JavaScript'}
					imageURL={logoReact}
					imageAlt={'Logo de React'}
					textButtom={'Leer más'}
				/>
				<Card title={'Héctor'} imageURL={logoHector}/>
			</div>
			<Spinner />
			<Jumbotron /> 
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p> */}
		</div>
	);
};

// 5. Exportamos nuestro componente
export default Home;
