import React from "react";   // 1. Importamos React
import rigoImage from "../../img/rigo-baby.jpg";  // Include images into your bundle
import Navbar from './Navbar.jsx';  // 6 Importo mi componente
import { Footer } from "./Footer.jsx";  // 6
import { BtnCallActions } from "./BtnCallAction.jsx";
import { Alert } from './Alert.jsx';
import { Card } from "./Card.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Title } from "./Title.jsx";
import { ExampleUseState } from "./ExampleUseState.jsx";
import { SimpleCounter } from "./SimpleCounter.jsx";
import { SimpleCounterBonus } from "./SimpleCounterBonus.jsx";


// 2. Create your  component
const Home = () => {
	// 3.-Código JS

	// 4. Retorno un solo elemento HTML
	return (
		<div className="text-center">
			<Navbar/>
			<Alert/>
			{/* <Title text='Hooks - useState()' color='success'/> */}
			<SimpleCounterBonus/>
			{/* 
			<SimpleCounter/>
			<ExampleUseState/>
			<Card 
				title='Susan Robinson' 
				email='susan.robinson@example.com'
				imageURL={'https://randomuser.me/api/portraits/women/10.jpg'}
				imageAlt={'Photo Susan Robinson'}
			/>
			<Card/>
			<Card 
				title='Larry Caldwell' 
				email='larry.caldwell@example.com'
				imageURL={'https://randomuser.me/api/portraits/men/71.jpg'}
				imageAlt={'Photo Larry Caldwell'}
			/>
			<Title text='Card List' align='center'/>
			<Title text='Props Types' color='success'/>
			<Title/>
			<Jumbotron/>
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<BtnCallActions/>
			<Footer/> 
			*/}
		</div>
	);
};

// 5. Exporto mi componente
export default Home;
