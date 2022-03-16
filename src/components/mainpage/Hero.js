import React, { useState } from "react";
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
					<a href="" className="devis-link">
						Devis gratuit
					</a>
				</div>
			</div>
		</>
	);
};
export default Hero;
