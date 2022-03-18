import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import "../scss/Expertise.scss";

const Expertise = () => {
	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width: 1224px)",
	});
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

	return (
		<div>
			{isTabletOrMobile && (
				<>
					<div className="title-container">
						<span className="lilNos">nos</span>
						<span className="title">expertises</span>
						<span className="bigE">E</span>
					</div>
					<div className="cont-text">
						<p>
							Entreprise novatrice,{" "}
							<span>Paysagiste LesPortugais</span> se démarque des
							autres compagnies de <span>paysagement</span> de par
							son engagement, sa créativité et sa communication
							avec ses clients. <span>Véritables</span>{" "}
							architectes des espaces verts, nous améliorons votre
							cadre de vie. Avec nos couleurs au fort impact
							visuel, nous entendons bien révolutionner le monde
							du paysagement.
						</p>
					</div>
					<div className="cont-icons">
						<div className="row2">
							<div className="item">
								<img
									src="https://static.wixstatic.com/shapes/3a257b_665300e56ac54e2aa53975e701f3c3b0.svg"
									alt="feuille"
								/>
								<p>entretien paysager complet</p>
							</div>
							<div className="item">
								<img
									src="https://static.wixstatic.com/shapes/3a257b_3d6bf78cd54f492eac16e3bb6c3cdf66.svg"
									alt="barouette"
								/>
								<p>végétaux, plantes et arbustres</p>
							</div>
						</div>
						<div className="row2">
							<div className="item">
								<img
									src="https://static.wixstatic.com/shapes/3a257b_cbe26b66db4a4b7580ac41a228099514.svg"
									alt="ciseau"
								/>
								<p>aménagement du terrain</p>
							</div>
							<div className="item">
								<img
									src="https://static.wixstatic.com/shapes/3a257b_8ded26765af248d2a72671d104a6bab0.svg"
									alt="herbe"
								/>
								<p>pose et entretien complet de la pelouse</p>
							</div>
						</div>
						<div className="row2">
							<div className="item">
								<img
									src="https://static.wixstatic.com/shapes/3a257b_1416a383ebe44c07aaeaab4491e97a22.svg"
									alt="compas"
								/>
								<p>service d'architecture</p>
							</div>
							<div className="item">
								<img
									src="https://static.wixstatic.com/shapes/3a257b_3b1d50c5d45547678349e48b181138c3.svg"
									alt="tournevis"
								/>
								<p>réparation</p>
							</div>
						</div>
					</div>
				</>
			)}
			{isDesktopOrLaptop && <div>Ca cest pour un ordi</div>}
		</div>
	);
};

export default Expertise;
