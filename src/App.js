//import logo from "./logo.svg";
import "./App.css";
import LeCarouselle from "./components/mainpage/LeCarouselle";
import Header from "./components/mainpage/header/Header";
import Hero from "./components/mainpage/Hero";
import { SliderData } from "./components/mainpage/SliderData";

function App() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<LeCarouselle />
		</div>
	);
}

export default App;
