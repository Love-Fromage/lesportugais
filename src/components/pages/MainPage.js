import React from "react";
import Header from "../mainpage/header/Header";
import Hero from "../mainpage/Hero";
import LeCarouselle from "../mainpage/LeCarouselle";
import Expertise from "../mainpage/Expertises";
import DemandeDevis from "../mainpage/DemandeDevis";
import Realisation from "../mainpage/Realisations";
import Footer from "../mainpage/Footer";

const MainPage = () => {
	return (
		<>
			<Header />
			<Hero />
			<LeCarouselle />
			<Expertise />
			<DemandeDevis />
			<Realisation />
			<Footer />
		</>
	);
};
export default MainPage;
