import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "../scss/Hero.scss";

const Hero = () => {
	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width: 1224px)",
	});
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
	return (
		<>
			{isTabletOrMobile && (
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
			)}
			{isDesktopOrLaptop && (
				<>
					<div className="chapeau"></div>
					<div className="cont-hero-d">
						<div className="hero-d">
							<div className="cont-text-hero-d">
								<h1>
									<span>Paysagiste</span>
									<span>
										<span className="Les">Les</span>
										Portugais
									</span>
								</h1>
								<h1>
									<p>On travaille</p>
									<p>pour vous</p>
									<p>comme si c'était</p>
									<p>pour nous!</p>
								</h1>
								<Link to="/contact">
									<a href="#" className="devis-link-d">
										Devis gratuit
									</a>
								</Link>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};
export default Hero;
