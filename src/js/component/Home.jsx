import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";  // Include images into your bundle
import logoPython from '../../img/logo-python.png';
import logoReact from '../../img/logo-reactjs.png';
import logo4Geeks from '../../img/logo-4geeks.png';
import Navbar from "./Navbar.jsx";  // Importar el componente
import { Card } from "./Card.jsx";  // Import el componente
import { Footer } from "./Footer.jsx";
import { Jumbotrom } from "./Jumbotrom.jsx";
import { Alert } from "./Alert.jsx";
import { Spinner } from "./Spinner.jsx";
import { BtnCallAction } from "./BtnCallAction.jsx";
import { Title } from "./Title.jsx";
import { ExampleUseState } from "./ExampleUseState.jsx";
import { TrafficLight } from './TrafficLight.jsx';
import { SimpleCounter } from "./SimpleCounter.jsx";


// Create your first component
const Home = () => {
	return (
		<div className="text-center">
			{/* <Navbar/> */}
			{/* <Title color='danger' text='Hook: useState()'/> */}
			<SimpleCounter/>
			{/* <TrafficLight/> */}
			{/* <ExampleUseState/> */}
			{/* <Alert/> */}
			{/* <Spinner/> */}
			{/* 
			<div className="container">
				<div className="row row-cols-4">
					<Card/>
					<Card title='Hola Mundo'/>
					<Card logo={logo4Geeks} title='4Geeks' description='JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS.'/>
					<Card logo={logoPython} title='Python' description='Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.' />
					<Card logo={logoReact} title='React' description='React is a free and open-source front-end JavaScript library for building user interfaces based on components by Facebook Inc.'/>
				</div>
			</div>
		  */}
			{/* <Jumbotrom/> */}
			{/* <Footer/> */}
		</div>
	);
};

export default Home;
