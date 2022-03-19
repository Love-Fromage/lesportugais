import React from "react";
import { useMediaQuery } from "react-responsive";
import "../scss/Realisation.scss";
import Carousel from "react-bootstrap/Carousel";

const Realisation = () => {
	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width: 1224px)",
	});
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

	return (
		<div>
			{isTabletOrMobile && (
				<div>
					<div className="title-container">
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
					<div className="cont-slide-m slide-m-res">
						<Carousel infinite={false}>
							<Carousel.Item>
								<img
									src="https://static.wixstatic.com/media/3a257b_c50a0a527ed74010a0089bb3c1e979d8~mv2.jpg"
									alt=""
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									src="https://static.wixstatic.com/media/3a257b_eadd6dcb2d784094b73c010100e2fef8~mv2.jpg"
									alt=""
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									src="https://static.wixstatic.com/media/3a257b_c176958e831347bf966775423086df40~mv2.jpg"
									alt=""
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									src="https://static.wixstatic.com/media/3a257b_e64100f32fec4e74b18fa35a13e5dffa~mv2.jpg"
									alt=""
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									src="https://static.wixstatic.com/media/3a257b_2d4204be49154e4da2b3f4c0b3b55161~mv2.jpg"
									alt=""
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									src="https://static.wixstatic.com/media/3a257b_090f7e1317394000988db4471be12839~mv2.jpg"
									alt=""
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									src="https://static.wixstatic.com/media/3a257b_6b0ccc94583642388c458c6d8708c28a~mv2.jpg"
									alt=""
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									src="https://static.wixstatic.com/media/3a257b_1972f8900d7b47669884eedfd3cb498d~mv2.jpg"
									alt=""
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									src="https://static.wixstatic.com/media/3a257b_05061ebe56e54a7e9ca4d6fd28f5320f~mv2.jpg"
									alt=""
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									src="https://static.wixstatic.com/media/3a257b_ca21aa1bc2bc4bcda5bf1204143c6aec~mv2.jpg"
									alt=""
								/>
							</Carousel.Item>
						</Carousel>
					</div>
					<div className="res-spacer"></div>
				</div>
			)}
			{isDesktopOrLaptop && (
				<div>
					<div className="cont-realisations-d">
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
					</div>
					<div className="cont-slide-m slide-m-res">
						<Carousel infinite={false}>
							<Carousel.Item>
								<img
									src="https://static.wixstatic.com/media/3a257b_c50a0a527ed74010a0089bb3c1e979d8~mv2.jpg"
									alt=""
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									src="https://static.wixstatic.com/media/3a257b_eadd6dcb2d784094b73c010100e2fef8~mv2.jpg"
									alt=""
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									src="https://static.wixstatic.com/media/3a257b_c176958e831347bf966775423086df40~mv2.jpg"
									alt=""
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									src="https://static.wixstatic.com/media/3a257b_e64100f32fec4e74b18fa35a13e5dffa~mv2.jpg"
									alt=""
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									src="https://static.wixstatic.com/media/3a257b_2d4204be49154e4da2b3f4c0b3b55161~mv2.jpg"
									alt=""
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									src="https://static.wixstatic.com/media/3a257b_090f7e1317394000988db4471be12839~mv2.jpg"
									alt=""
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									src="https://static.wixstatic.com/media/3a257b_6b0ccc94583642388c458c6d8708c28a~mv2.jpg"
									alt=""
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									src="https://static.wixstatic.com/media/3a257b_1972f8900d7b47669884eedfd3cb498d~mv2.jpg"
									alt=""
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									src="https://static.wixstatic.com/media/3a257b_05061ebe56e54a7e9ca4d6fd28f5320f~mv2.jpg"
									alt=""
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									src="https://static.wixstatic.com/media/3a257b_ca21aa1bc2bc4bcda5bf1204143c6aec~mv2.jpg"
									alt=""
								/>
							</Carousel.Item>
						</Carousel>
					</div>
					<div className="res-spacer"></div>
				</div>
			)}
		</div>
	);
};
export default Realisation;
