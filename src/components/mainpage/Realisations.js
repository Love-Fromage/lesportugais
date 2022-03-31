import React from "react";
import { useMediaQuery } from "react-responsive";
import "../scss/Realisation.scss";
// import Carousel from "react-bootstrap/Carousel";
// import { GrNext } from "react-icons/gr";
import CarouselPerso from "./CarouselPerso";

const Realisation = () => {
	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width: 1224px)",
	});
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

	return (
		<div>
			{isTabletOrMobile && (
				<div>
					<div id="realisation" className="title-container">
						<span className="lilNos">nos</span>
						<span className="title">réalisations</span>
						<span className="bigE">R</span>
					</div>
					<div className="cont-res">
						<div className="cont-text realisation">
							<p>
								Aménagement paysager, entretien paysager, et
								réparation de pave et scellant.
							</p>
							<p className="petit-point-res">
								+ <span>Entretien paysager complet</span>
							</p>
							<p className="petit-point-res">
								+ <span>Service d'architecture</span>
							</p>
							<p className="petit-point-res">
								+{" "}
								<span>
									Pose et entretien compet de la pelouse
								</span>
							</p>
							<p className="petit-point-res">
								+ <span>Aménagement du terrain</span>
							</p>
							<p className="petit-point-res">
								+ <span>Végétaux plantes et arbustres</span>
							</p>
							<p className="petit-point-res">
								+ <span>Réparations</span>
							</p>
						</div>
					</div>
					<CarouselPerso />
					{/* <div className="res-spacer"></div> */}
				</div>
			)}
			{isDesktopOrLaptop && (
				<div>
					<div id="realisation" className="cont-realisations-d">
						<div className="title-container-d">
							<span className="lilNos">nos</span>
							<span className="title">réalisations</span>
							<span className="bigE">R</span>
						</div>
						<div className="cont-res">
							<div className="cont-text realisation-d">
								<p>
									Aménagement paysager, entretien paysager, et
									réparation de pave et scellant.
								</p>
								<p className="petit-point-res">
									<span className="green-res">+</span>{" "}
									<span>Entretien paysager complet</span>
								</p>
								<p className="petit-point-res">
									<span className="red-res">+</span>{" "}
									<span>Service d'architecture</span>
								</p>
								<p className="petit-point-res">
									<span className="green-res">+</span>
									<span>
										Pose et entretien compet de la pelouse
									</span>
								</p>
								<p className="petit-point-res">
									<span className="red-res">+</span>{" "}
									<span>Aménagement du terrain</span>
								</p>
								<p className="petit-point-res">
									<span className="green-res">+</span>{" "}
									<span>Végétaux plantes et arbustres</span>
								</p>
								<p className="petit-point-res">
									<span className="red-res">+</span>{" "}
									<span>Réparations</span>
								</p>
							</div>
						</div>
					</div>
					<CarouselPerso />
				</div>
			)}
		</div>
	);
};
export default Realisation;
