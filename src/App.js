//import logo from "./logo.svg";
import "./App.css";
import Carousel from "./components/mainpage/Carousel";
import Header from "./components/mainpage/header/Header";
import Hero from "./components/mainpage/Hero";

function App() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<Carousel />
		</div>
	);
}

export default App;
