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
				<div className="cont-demandeDevis">
					<div className="bg-devis">
						<div className="chapeau2"></div>
						<p>demande de</p>
						<h2>devis</h2>
						<p>
							Vous souhaitez plus d'informations? Contactez-nous,
							pour toutes demandes d'expertise, nous vous
							apporterons un devis adapté à vos besoins.
						</p>
						<Link to="/contact">
							<button className="btn-devis">Devis gratuit</button>
						</Link>
					</div>
				</div>
			)}
			{isDesktopOrLaptop && <div>version desktop</div>}
		</div>
	);
};

export default DemandeDevis;
