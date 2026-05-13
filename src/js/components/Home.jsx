import React from "react";
import { Alert } from "./Alert.jsx";
import { Cuerpo } from "./Cuerpo.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Mensaje } from "./Mensaje.jsx";
import { Saludo } from "./Saludo.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Saludo name='Alberto' color='rojo'>
				<h4>Este es un H4</h4>
				<hr/>
			</Saludo>
			<Saludo name='Hector' color='azul'>
				<p>Esto es una children</p>
				<button>Click</button>
				<hr/>
			</Saludo>
		</div>
	);
};

export default Home;