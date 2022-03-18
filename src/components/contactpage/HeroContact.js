import React from "react";
import { useMediaQuery } from "react-responsive";
import "../scss/HeroContact.scss";
import heroBG from "../../images/AdobeStock_314878805.jpeg";

const HeroContact = () => {
	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width: 1224px)",
	});
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
	return (
		<>
			{isTabletOrMobile && (
				<div>
					<div className="chapeauC"></div>
					<div className="hero-contact">
						<div className="bg-text-hero-contact">
							<div className="title-container title-container-contact">
								<span className="lilNos lilNous">nous</span>
								<span className="title">Contactez</span>
								<span className="bigE bigC">C</span>
							</div>
							<div className="petit-para-hero-contact">
								<p>
									Pour nous contacter afin d'obtenir un devis
									personnalisé ou pour toutes informations,
									remplissez le formulaire ou appelez-nous
									directementé
								</p>
							</div>
						</div>
					</div>
				</div>
			)}
			{isDesktopOrLaptop && (
				<div>
					<div>Desktop</div>
					<div>Desktop</div>
					<div>Desktop</div>
				</div>
			)}
		</>
	);
};
export default HeroContact;
