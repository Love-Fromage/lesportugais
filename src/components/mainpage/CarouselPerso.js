import React, { useEffect, useState } from "react";
// import { Fade } from "react-bootstrap";
import { GrNext } from "react-icons/gr";
import { useMediaQuery } from "react-responsive";

import image1 from "../../images/IMG_0239-2.jpg";
import image2 from "../../images/IMG_0089-2.jpg";
import image3 from "../../images/IMG_0215-2.jpg";
import image4 from "../../images/IMG_0140-2.jpg";
import image5 from "../../images/IMG_0905-2.jpg";
import image6 from "../../images/IMG_0186-2.jpg";
import image7 from "../../images/IMG_0957-2.jpg";
import image8 from "../../images/IMG_0245-2.jpg";
import image9 from "../../images/IMG_0903-2.jpg";
import "../scss/CarouselPero.scss";

const CarouselPerso = () => {
	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width: 1224px)",
	});
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
	const [marge, setMarge] = useState(0);
	const [pos, setPos] = useState(0);
	const [isActive, setIsActive] = useState(true);

	let bandStyle = {
		marginLeft: marge + "vw",
	};

	let bande = (
		<div className="bande" style={bandStyle}>
			<div className="cont-inner-bande">
				<img src={image1} alt="" />
			</div>
			<div className="cont-inner-bande">
				<img src={image2} alt="" />
			</div>
			<div className="cont-inner-bande">
				<img src={image3} alt="" />
			</div>
			<div className="cont-inner-bande">
				<img src={image4} alt="" />
			</div>
			<div className="cont-inner-bande">
				<img src={image5} alt="" />
			</div>
			<div className="cont-inner-bande">
				<img src={image6} alt="" />
			</div>
			<div className="cont-inner-bande">
				<img src={image7} alt="" />
			</div>
			<div className="cont-inner-bande">
				<img src={image8} alt="" />
			</div>
			<div className="cont-inner-bande">
				<img src={image9} alt="" />
			</div>
		</div>
	);
	const nextSlide = () => {
		// console.log(marge);
		// console.log(pos);

		if (pos >= 8) {
			setPos(0);
			setMarge(0);
		} else {
			setPos(pos + 1);
			// console.log(pos);
			setMarge(marge - 60);
		}
	};
	const prevSlide = () => {
		// console.log(marge);
		if (pos === 0) {
			// console.log(pos);
			setPos(8);
			setMarge(-(8 * 60));
		} else {
			setPos(pos - 1);
			setMarge(marge + 60);
		}
	};

	return (
		<div className="cont-carou-perso">
			<div className="prev-btn" onClick={prevSlide}>
				{isTabletOrMobile && <GrNext size="100px" />}
				{isDesktopOrLaptop && <GrNext size="50px" />}
			</div>
			<div className="fenetre">{bande}</div>
			<div className="next-btn" onClick={nextSlide}>
				{isTabletOrMobile && <GrNext size="100px" />}
				{isDesktopOrLaptop && <GrNext size="50px" />}
			</div>
		</div>
	);
};
export default CarouselPerso;
