//import logo from "./logo.svg";
import "./App.css";
import LeCarouselle from "./components/mainpage/LeCarouselle";
import Header from "./components/mainpage/header/Header";
import Hero from "./components/mainpage/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Expertise from "./components/mainpage/Expertises";
import DemandeDevis from "./components/mainpage/DemandeDevis";
import Realisation from "./components/mainpage/Realisations";
import Footer from "./components/mainpage/Footer";
import MainPage from "./components/pages/MainPage";
import Contact from "./components/pages/Contact";

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/react" element={<MainPage />} />
					<Route path="/contact" element={<Contact />} />
					{/* <Hero />
					<LeCarouselle />
					<Expertise />
					<DemandeDevis />
					<Realisation />
					<Footer /> */}
				</Routes>
			</div>
		</Router>
	);
}

export default App;
