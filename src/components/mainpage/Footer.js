import React from "react";
import { useMediaQuery } from "react-responsive";
import "../scss/Footer.scss";

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
							Téléphone: <a href="tel:5145753009">514-575-3009</a>
						</p>
					</div>
					<div className="suivez-nous-footer">
						<h3>suivez-nous</h3>
						<p>Restez en contact avec Paysagiste LesPortugais</p>
						<a href="#">
							<img
								src="https://static.wixstatic.com/media/4057345bcf57474b96976284050c00df.png/v1/fill/w_27,h_27,al_c,usm_0.66_1.00_0.01,enc_auto/4057345bcf57474b96976284050c00df.png"
								alt=""
							/>
						</a>
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
