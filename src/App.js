//import logo from "./logo.svg";
import "./App.css";
import LeCarouselle from "./components/mainpage/LeCarouselle";
import Header from "./components/mainpage/header/Header";
import Hero from "./components/mainpage/Hero";

import Expertise from "./components/mainpage/Expertises";

function App() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<LeCarouselle />
			<Expertise />
		</div>
	);
}

export default App;
