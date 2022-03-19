import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

import "../scss/DemandeDevis.scss";

const DemandeDevis = () => {
	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width: 1224px)",
	});
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

	return (
		<div>
			{isTabletOrMobile && (
				<div className="cont-demandeDevis cont-demandeDevis-d">
					<div className="bg-devis bg-devis-d">
						<div className="chapeau2"></div>
						<p>demande de</p>
						<h2>devis</h2>
						<p>
							Vous souhaitez plus d'informations? Contactez-nous,
							pour toutes demandes d'expertise, nous vous
							apporterons un devis adapté à vos besoins.
						</p>
						<Link to="/contact">
							<button className="btn-devis btn-devis-d">
								Devis gratuit
							</button>
						</Link>
					</div>
				</div>
			)}
			{isDesktopOrLaptop && (
				<div className="cont-demandeDevis-d">
					<div className="bg-devis-d">
						<div className="chapeau2"></div>
						<p>demande de</p>
						<h2>devis</h2>
						<p id="demande-devis-p-d">
							Vous souhaitez plus d'informations? Contactez-nous,
							pour toutes demandes d'expertise, nous vous
							apporterons un devis adapté à vos besoins.
						</p>
						<Link to="/contact">
							<button className="btn-devis btn-devis-d">
								Devis gratuit
							</button>
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};

export default DemandeDevis;
