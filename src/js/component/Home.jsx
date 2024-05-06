// 1. Importar React
import React from "react";
// Include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import logoPython from '../../img/logo-python.png';
import logoReact from '../../img/logo-reactjs.png';
import logoHector from '../../img/logo-hcht-uk.jpg';
// Componentes
import Navbar from "./Navbar.jsx";
import Jumbotron from "../views/Jumbotron.jsx";
import { Spinner } from "./Spinner.jsx";
import { Card } from "../views/Card.jsx";
import { Alert } from "./Alert.jsx";
import { StateExample } from "./StateExample.jsx";
import { SimpleCounterBonus } from "../views/SimpleCounterBonus.jsx";
import { TrafficLight } from "../views/TrafficLight.jsx";
import { SimpleCounter } from "../views/SimpleCounter.jsx";
import { Login } from "../views/Login.jsx";
import { TodoList } from "../views/TodoList.jsx";
import { UsersJPH } from "../views/UsersJPH.jsx";
import { TodosJPH } from "../views/TodosJPH.jsx";
import { AlbumsJPH } from "../views/AlbumsJPH.jsx";
import { PostsJPH } from "../views/PostsJPH.jsx";
import { TodoListWithFetch } from "../views/TodoListWithFetch.jsx";
import { TodoList4Geeks } from "../views/TodoList4Geeks.jsx";
import { Layout } from "../Layout.jsx";


// 2. Create ours component en PascalCase
const Home = () => {
	// 3. Todo nuestro código de JS
	console.log('Hola Mundo React')

	// 4. Retornamos HTML -> un solo elemento HTML	
	return (
		<div className="text-center">
			<Layout />
			<Navbar />
			<TodoList4Geeks />
			<UsersJPH />
			<TodoListWithFetch />
			<PostsJPH />
			<AlbumsJPH />
			{/* 
			<TodosJPH />
			<Alert />
			<TodoList />
			<Login />
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
