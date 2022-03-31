import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import "../scss/Expertise.scss";
import feuille from "../../images/feuille.svg";
import barouette from "../../images/barouette.svg";
import cisaille from "../../images/cisaille.svg";
import compas from "../../images/compas.svg";
import herbe from "../../images/herbe.svg";
import tournevis from "../../images/tournevis.svg";

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
								<img src={feuille} alt="feuille" />
								<p>entretien paysager complet</p>
							</div>
							<div className="item">
								<img src={barouette} alt="barouette" />
								<p>végétaux, plantes et arbustres</p>
							</div>
						</div>
						<div className="row2">
							<div className="item">
								<img src={cisaille} alt="ciseau" />
								<p>aménagement du terrain</p>
							</div>
							<div className="item">
								<img src={herbe} alt="herbe" />
								<p>pose et entretien complet de la pelouse</p>
							</div>
						</div>
						<div className="row2">
							<div className="item">
								<img src={compas} alt="compas" />
								<p>service d'architecture</p>
							</div>
							<div className="item">
								<img src={tournevis} alt="tournevis" />
								<p>réparation</p>
							</div>
						</div>
					</div>
				</>
			)}
			{isDesktopOrLaptop && (
				<>
					<div className="title-container-d">
						<span className="lilNos">nos</span>
						<span className="title">expertises</span>
						<span className="bigE">E</span>
					</div>
					<div className="cont-text-d">
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
					<div className="cont-icons-d">
						<div className="row2">
							<div className="item">
								<img src={feuille} alt="feuille" />
								<p>entretien paysager complet</p>
							</div>
							<div className="item">
								<img src={barouette} alt="barouette" />
								<p>végétaux, plantes et arbustres</p>
							</div>
							<div className="item">
								<img src={cisaille} alt="ciseau" />
								<p>aménagement du terrain</p>
							</div>
							<div className="item">
								<img src={herbe} alt="herbe" />
								<p>pose et entretien complet de la pelouse</p>
							</div>
							<div className="item">
								<img src={compas} alt="compas" />
								<p>service d'architecture</p>
							</div>
							<div className="item">
								<img src={tournevis} alt="tournevis" />
								<p>réparation</p>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Expertise;
