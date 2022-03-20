import React from "react";
import Header from "../mainpage/header/Header";
import Hero from "../mainpage/Hero";
import LeCarouselle from "../mainpage/LeCarouselle";
import Expertise from "../mainpage/Expertises";
import DemandeDevis from "../mainpage/DemandeDevis";
import Realisation from "../mainpage/Realisations";
import Footer from "../mainpage/Footer";
import "../scss/AnimationsPages.scss";

const MainPage = () => {
	window.scrollTo(0, 0);
	return (
		<>
			<Header />
			<div className="transition-page">
				<Hero />
				<LeCarouselle />
				<Expertise />
				<DemandeDevis />
				<Realisation />
			</div>
			<Footer />
		</>
	);
};
export default MainPage;
