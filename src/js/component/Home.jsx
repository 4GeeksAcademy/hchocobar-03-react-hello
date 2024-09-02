import React from "react";  // 1. Importando React
import rigoImage from "../../img/rigo-baby.jpg";  // Include images into your bundle
import logoReact from "../../img/logo-reactjs.png"
import logoPython from "../../img/logo-python.png"
import logo4Geeks from "../../img/logo-4geeks.png"
import Navbar from "./Navbar.jsx";
import { Footer } from "./Footer.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Alert } from "./Alert.jsx";
import { Spinner } from "./Spinner.jsx";
import { Card } from "./Card.jsx";
import { Title } from "./Title.jsx";
import { StateExample } from "./StateExample.jsx";
import { SimpleCounterBonus } from "./SimpleCounterBonus.jsx";
import { ExampleInputControler } from "./ExampleInputControler.jsx";
import { FetchExample } from "./FetchExample.jsx";
import { CrudExample } from "./CrudExample.jsx";
import { AddEditForm } from "./AddEditForm.jsx";


// 2. Create your component con sintaxis PascalCase (siempre la primera letra en mayúsculas)
const Home = () => {
	// 3. Código de JS
	// let cohorte = 'Spain-77'

	// 4. Retornanmos un solo elemento HTML
	return (
		<div className="text-center">
			<Navbar/>
			<AddEditForm/>
			<Title text='Hooks - useState' color='success'/>
			<Alert />
			<CrudExample/>
			<FetchExample/>
			<ExampleInputControler/>
			<SimpleCounterBonus/>
			<StateExample/>
			<Card/>
			<Card title={'Python'} imageURL={logoPython}/>
			<Card title='React' imageURL={logoReact}/>
			<Jumbotron/>
			{/* 
			<Spinner/> 
			*/}
			{/*<img src={rigoImage} />*/}
			
			{/* 
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			*/}
			<Footer/>
		</div>
	);
};

// 5. exportar nuestro componente
export default Home;

// 6 Importar el componente donde lo quiero utilizar
// 7 Utilizarlo