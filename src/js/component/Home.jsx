// 1. Importando React
import React from "react";
import Navbar from "./Navbar.jsx";
import { Alert } from "./Alert.jsx";
// Include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Spinner } from "./Spinner.jsx";
import { BtnCallAction } from "./BtnCallAction.jsx";


// 2. Create your first component
// Todo compontente de React comienza con una letra Mayúscula
const Home = () => {
	// 3. todo mi codigo JS

	// 4. retornar un solo elemento HTML
	return (
		<div className="text-center">
			<Navbar />
			<Alert />
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				{/* <img src={rigoImage} /> */}
			</p>
			<Spinner/>
			<BtnCallAction/>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};


// 5. exportamos
export default Home;
