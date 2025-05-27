import React from "react";  // Import React
import rigoImage from "../../img/rigo-baby.jpg";  // include images into your bundle
// 6.- Importamos nuestros componentes 
import Navbar from "./Navbar.jsx";
import { Alert } from "./Alert.jsx";
import { Spinner } from "./Spinner.jsx";
import { BtnCallActions } from "./BtnCallActions.jsx";
import { Card } from "./Card.jsx";
import { Footer } from "./Footer.jsx";
import { SubTitle } from "./SubTitle.jsx";
import { TemplateLiteralvsJSX } from "./TemplateLiteralvsJSX.jsx";
import { ExampleUseState } from "./ExampleUseState.jsx";
import { SimpleCounter } from "./SimpleCounter.jsx";
import { Login } from "./Login.jsx";
import { TodoList } from "./TodoList.jsx";
import { ExampleFetch } from "./ExampleFetch.jsx";
import { TodoListFetch } from "./TodoListFetch.jsx";


// Create your first component
const Home = () => {
	// codigo JS
	// console.log('estoy dentro del componente Home')

	return (
		<div className="d-flex flex-column min-vh-100 text-center">
			<Navbar/>
			<TodoListFetch/>
      {/* 
			<ExampleFetch/>
			<TodoList/>
			<Login/>
			<SimpleCounter/>
			<h1 className="text-center mt-2 text-success">useState() y useEffect()</h1>
			<ExampleUseState />
			<Alert/>
			<Spinner/>

			<SubTitle text="Class 2" color="success"/>
			<SubTitle text="otro Subtitulo" color="danger"/>

			<Card title='Irene'/>
			<Card title='Amanda' id='5'/>
			<Card title='Valentina' id='25' description={'Full Stack Developer'} />

			<BtnCallActions/>

			<TemplateLiteralvsJSX/>
      */}
			<Footer/>
		</div>
	);
};

export default Home;
