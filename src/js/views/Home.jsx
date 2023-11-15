// 1. Importando React
import React from "react";
// Include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
// Importamos nuestros componentes
import Navbar from "../component/Navbar.jsx";
import { Alert } from "../component/Alert.jsx";
import { Spinner } from "../component/Spinner.jsx";
import { BtnCallAction } from "../component/BtnCallAction.jsx";
import { SimpleCounterBonus } from "./SimpleCounterBonus.jsx";
import { Form } from "./Form.jsx";
import { Todolist } from "./TodoList.jsx";
import { CardPlaceholder } from "./CardPlaceholder.jsx";
import { Users } from "./Users.jsx";
import { Todos } from "./Todos.jsx";
import { JPHUsers } from "./JPHUsers.jsx";
import { TodoListFetch } from "./TodoListFetch.jsx";

// 2. Create your first component
// Todo compontente de React comienza con una letra Mayúscula
const Home = () => {
	// 3. todo mi codigo JS

	// 4. retornar un solo elemento HTML
	return (
		<div className="text-center">
			{/* <TodoListFetch/> */}
			{/* <JPHUsers/> */}
			{/* <Form/> */}
			{/* <Users/> */}
			{/* <Todos/> */}
			{/* <Todolist/> */}
			{/* <Alert>Esto es una alerta</Alert> */}
			{/* <Spinner/> */}
			{/* <CardPlaceholder/> */}
			{/* <SimpleCounterBonus/> */}
			{/* <Navbar /> */}
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p><img src={rigoImage} /></p>
			<BtnCallAction />
		</div>
	);
};


// 5. exportamos
export default Home;
