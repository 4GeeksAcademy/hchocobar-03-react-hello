import React from "react";  // 1. Importamos React
import rigoImage from "../../img/rigo-baby.jpg";  // Include images into your bundle
// 6. Importar componentes
import Navbar from '../component/Navbar.jsx';
import { Card } from './Card.jsx';
import { CardProfile } from "../component/CardProfile.jsx";
import { Spinner } from "../component/Spinner.jsx";
import { Members } from "./Members.jsx";
import { Title } from "../component/Title.jsx";
import SimpleCounterBonus from "./SimpleCounterBounus.jsx";
import { Estados } from "../component/Estados.jsx";
import { Form } from "./Form.jsx";
import { TodoList } from "./TodoList.jsx";
import { JasonPlaceHolder } from "./JasonPlaceHolder.jsx";
import { Users } from "../component/Users.jsx";
import { TodosJPH } from "./TodosJPH.jsx";
import { PostsJPH } from "./PostsJPH.jsx";
import { TodoListFetch } from "./TodoListFetch.jsx";


// Create your first component
/* comentario
	 multilinea */
const Home = () => {
	// Código JS
	const titulo = 'Intro React!';

	return (
		<div className="text-center">
			<div className="text-center">
				<h1 className="text-center mt-5">Hello Rigo!</h1>
				<p>
					<img src={rigoImage} />
				</p>
				<a href="#" className="btn btn-success">
					If you see this green button... bootstrap is working...
				</a>
			</div>
			{/* 7. utilizar el componente */}
			{/* <Navbar/> */}
			{/* <Title titulo='React Web' subtitulo="Consumiendo una API"/> */}
			{/* <TodoListFetch/> */}
			{/* <PostsJPH/> */}
			{/* <TodosJPH/> */}
			{/* <JasonPlaceHolder/> */}
			{/* <Users/> */}
			{/* <TodoList/> */}
			{/* <Form/> */}
			{/* <SimpleCounterBonus/> */}
			{/* <Estados/> */}
			{/* <Members/> */}
			{/* <Spinner/> */}
			{/* <CardProfile/> */}
			{/* <Card/> */}
			{/* <p>
				Made by{' '}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p> */}
		</div>
	);
};

export default Home;
