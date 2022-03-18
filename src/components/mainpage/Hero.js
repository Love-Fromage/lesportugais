import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../scss/Hero.scss";

const Hero = () => {
	return (
		<>
			<div className="chapeau"></div>
			<div className="hero">
				<div className="cont-text-hero">
					<h1>
						<span>Paysagiste</span> <br />
						<span>LesPortugais</span>
					</h1>
					<h1>
						<p>On travaille</p>
						<p>pour vous</p>
						<p>comme si c'était</p>
						<p>pour nous!</p>
					</h1>
					<Link to="/contact">
						<a href="#" className="devis-link">
							Devis gratuit
						</a>
					</Link>
				</div>
			</div>
		</>
	);
};
export default Hero;
