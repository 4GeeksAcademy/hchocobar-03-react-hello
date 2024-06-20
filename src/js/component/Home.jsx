// 1. Importando React
import React from "react";
// Include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import logoReact from "../../img/logo-reactjs.png";
import logoPython from '../../img/logo-python.png';
// Custom Components
import Navbar from "./Navbar.jsx";
import { Footer } from "./Footer.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Alert } from "./Alert.jsx";
import { Spinner } from "./Spinner.jsx";
import { Card } from "./Card.jsx";
import { ExampleUseState } from "./ExampleUseState.jsx";
import { TrafficLight } from "./TrafficLight.jsx";
import { SimpleCounter } from "./SimpleCounter.jsx";
import { Login } from "./Login.jsx";


// 2. Create your first component - Nombre del componente es en PascalCase
const Home = () => {
	// 3. Código de JS

	// 4. retornar un solo elemento HTML, (uno y solo uno)
	return (
		<div className="text-center">
			<Navbar />
			{/* <h1 className="text-center mt-5">Hooks: useState()</h1> */}
			<Login/>
			{/* <SimpleCounter /> */}
			{/* <TrafficLight/> */}
			{/* <ExampleUseState/> */}
			{/* 
			<div className="container">
				<div className="row">
					<div className="col-4">
						<Card title={'Hector'}/>
						<Card title={'React JS'} 
									description={'React es una librería de JS orientada al FrontEnd'} 
									textButton={'Leer mas ...'}
									image={logoReact}/>
						<Card title='Python'
									description={'Lenguaje de Programación más popular'}
									textButton={'Documentación'}
									image={logoPython}/>

					</div>
				</div>
			</div>
			*/}
			{/* <Alert/> */}
			{/* <Spinner/> */}
			{/* <Jumbotron/> */}
			{/* <p><img src={rigoImage} /></p> */}
			{/* <Footer/> */}
		</div>
	);
};


// 5. Exporto la función (para poder importarla en otro compenente)
export default Home;
