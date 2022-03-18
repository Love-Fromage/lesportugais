import React from "react";
import { useMediaQuery } from "react-responsive";
import "../scss/Footer.scss";
import logo from "../../images/e0678ef25486466ba65ef6ad47b559e1.png";

import "../scss/Footer.scss";

const Footer = () => {
	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width: 1224px)",
	});
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
	return (
		<div>
			{isTabletOrMobile && (
				<footer>
					<div className="cont-footer">
						<div className="petit-nav-footer">
							<h3>
								Paysagiste <br /> les portugais
							</h3>
							<div className="cont-link-footer">
								<a href="#">Expertises</a>
								<a href="#">Réalisations</a>
								<a href="#">Contact</a>
							</div>
						</div>
						<div className="info-contact-footer">
							<h3>Contactez-nous</h3>
							<p>1380 De Coulomb</p>
							<p>Boucherville, Qc J4B 7J4</p>
							<p>
								Téléphone:{" "}
								<a href="tel:5145753009">514-575-3009</a>
							</p>
						</div>
						<div className="suivez-nous-footer">
							<h3>suivez-nous</h3>
							<p>
								Restez en contact avec Paysagiste LesPortugais
							</p>
							<a href="#">
								<img src={logo} alt="" />
							</a>
						</div>
					</div>
					<div className="copyright-footer">
						<a href="https://blackduckagency.com">
							© 2020 par Black Duck Agency
						</a>
					</div>
				</footer>
			)}
			{isDesktopOrLaptop && <div>version desktop</div>}
		</div>
	);
};

export default Footer;
