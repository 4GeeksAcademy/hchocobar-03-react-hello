import React from "react";  // 0.- Import React
import rigoImage from "../../img/rigo-baby.jpg";  //include images into your bundle
import Navbar from './Navbar.jsx';
import { Footer } from './Footer.jsx';
import { Jumbotron } from "./Jumbotron.jsx";
import { Alert } from "./Alert.jsx";
import { Spinner } from "./Spinner.jsx";



// 1.- Create your first component
const Home = () => {
	// 3.- Escribir mi code JS

	// 4.- Retornar UN Solo elemento HTML (uno y solo uno)
	return (
		<div className="text-center">
			<Navbar/>
			<Alert/>
			<Spinner/>
			<h1 className="text-center mt-5">Intro to React</h1>
			<Jumbotron/>
			{/* 
				<p>
					<img src={rigoImage} />
				</p> 
			*/}
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>

			<Footer/>
		</div>

	);
};

// 2. Exportar el Componente (ponerlo disponible para otro archivo)
export default Home;