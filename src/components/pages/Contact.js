import React from "react";
import FooterContact from "../contactpage/FooterContact";
import Formulaire from "../contactpage/Formulaire";
import HeaderContact from "../contactpage/HeaderContact";
import HeroContact from "../contactpage/HeroContact";
import "../scss/AnimationsPages.scss";
// import Footer from "../mainpage/Footer";
// import Header from "../mainpage/header/Header";

const Contact = () => {
	window.scrollTo(0, 0);
	return (
		<>
			<HeaderContact />
			<div className="transition-page">
				<HeroContact />
				<Formulaire />
			</div>
			<FooterContact />
		</>
	);
};
export default Contact;
