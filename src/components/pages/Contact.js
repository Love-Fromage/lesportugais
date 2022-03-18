import React from "react";
import Formulaire from "../contactpage/Formulaire";
import HeroContact from "../contactpage/HeroContact";
import Footer from "../mainpage/Footer";
import Header from "../mainpage/header/Header";

const Contact = () => {
	return (
		<>
			<Header />
			<HeroContact />
			<Formulaire />
			<Footer />
		</>
	);
};
export default Contact;
