import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Carousel from "react-bootstrap/Carousel";
//import from "boots"
import "../../../src/index.scss";

import "../scss/Carousel.scss";

const LeCarouselle = () => {
	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width: 1224px)",
	});
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

	const [current, setCurrent] = useState(0);
	const [position, setPosition] = useState("slides-m");
	const tailleSlide = "90vw";
	// let pos = 0;
	const speed = 2000;

	return (
		<div>
			{isTabletOrMobile && (
				<div>
					<div className="cont-slider-m">
						<Carousel controls={false}>
							<Carousel.Item>
								<img
									className="d-block w-100 img-R"
									src="https://www.colorhexa.com/303030.png"
									alt="First slide"
								/>
								<Carousel.Caption>
									<p className="p-first" id="premier-slide">
										"Paysagiste Les Portugaisare a very good
										company. The service is excellent, when
										you need a service they are there for
										you."
									</p>
									<h2>Dmitry Drachyov</h2>
									<p>Portes de l'europe à Longueuil</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100 img-R"
									src="https://www.colorhexa.com/303030.png"
									alt="First slide"
								/>
								<Carousel.Caption>
									<p className="p-first p-2">
										"Nous avons eu d'excellents commentaires
										suite aux ménage du terrain fait hier.
										Une résidente de longue date a dit que
										c'étais le plus beau ménage de printemps
										qu'elle a vu depuis 12 ans."
									</p>
									<h2>Catherine-Amélie Côté</h2>
									<p>Boucherville</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100 img-R"
									src="https://www.colorhexa.com/303030.png"
									alt="First slide"
								/>
								<Carousel.Caption>
									<p className="p-first para-3">
										"Depuis que nous avons retenus les
										services de Paysagiste Les Portugais il
										y a maintenant 5 ans, nous faisons
										l'envie de nos voisins. Son équipe a un
										soucis du détail exceptionnel et
										l'allure de notre entrée et de notre
										cours en témoigne à chaque coup d’œil.{" "}
										<br /> Merci beaucoup à Paysagiste Les
										Portugais."
									</p>
									<h2>Pierre E. Jean-Felix</h2>
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
					</div>
				</div>

				// <div className="cont-slider-m">
				// 	<div className="slides-m">
				// 		<div className="slide-m slide-1 active">
				// 			<p>
				// 				"Paysagiste Les Portugaisare a very good
				// 				company. The service is excellent, when you need
				// 				a service they are there for you."
				// 			</p>
				// 			<h2>Dmitry Drachyov</h2>
				// 		</div>
				// 		<div className="slide-m slide-2">
				// 			<p>
				// 				"Nous avons eu d'excellents commentaires suite
				// 				aux ménage du terrain fait hier. Une résidente
				// 				de longue date a dit que c'étais le plus beau
				// 				ménage de printemps qu'elle a vu depuis 12 ans."
				// 			</p>
				// 			<h2>Catherine-Amélie Côté</h2>
				// 		</div>
				// 		<div className="slide-m slide-3">
				// 			<p>
				// 				"Depuis que nous avons retenus les services de
				// 				Paysagiste Les Portugais il y a maintenant 5
				// 				ans, nous faisons l'envie de nos voisins. Son
				// 				équipe a un soucis du détail exceptionnel et
				// 				l'allure de notre entrée et de notre cours en
				// 				témoigne à chaque coup d’œil. <br /> Merci
				// 				beaucoup à Paysagiste Les Portugais."
				// 			</p>
				// 			<h2>Pierre E. Jean-Felix</h2>
				// 		</div>
				// 		<div className="cont-pagination">
				// 			<div className="activePage"></div>
				// 			<div></div>
				// 			<div></div>
				// 		</div>
				// 	</div>
				// </div>
			)}

			{isDesktopOrLaptop && <div></div>}
		</div>
	);
};

export default LeCarouselle;
