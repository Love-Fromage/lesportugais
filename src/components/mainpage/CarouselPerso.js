import React, { useEffect, useState, useCallback } from "react";
// import { Fade } from "react-bootstrap";
import { GrNext } from "react-icons/gr";
import { useMediaQuery } from "react-responsive";
import Gallery from "react-photo-gallery";
import { photos } from "./Photo";
import Carousel, { Modal, ModalGateway } from "react-images";
// import Modalle from "./Modal";
import classes from "../scss/Carousel.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Zoom, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";

import "../scss/CarouselPero.scss";
import image1 from "../../images/IMG_0239-2.jpg";
import image2 from "../../images/IMG_0089-2.jpg";
import image3 from "../../images/IMG_0215-2.jpg";
import image4 from "../../images/IMG_0140-2.jpg";
import image5 from "../../images/IMG_0905-2.jpg";
import image6 from "../../images/IMG_0186-2.jpg";
import image7 from "../../images/IMG_0957-2.jpg";
import image8 from "../../images/IMG_0245-2.jpg";
import image9 from "../../images/IMG_0903-2.jpg";
const CarouselPerso = () => {
	let imgProp = "";
	// const closeModalle = () => {
	// 	setOpenModalle(false);
	// 	resumeScroll();
	// };
	function preventScroll() {
		document.body.style.overflow = "hidden";
	}
	function resumeScroll() {
		document.body.style.overflow = "visible";
	}

	// const [openModalle, setOpenModalle] = useState(false);
	const [laPhoto, setLaPhoto] = useState("");
	// var Carousel = require("react-responsive-carousel").Carousel;
	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width: 1224px)",
	});
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
	const [marge, setMarge] = useState(0);
	const [pos, setPos] = useState(0);
	const [isActive, setIsActive] = useState(true);
	const [currentImage, setCurrentImage] = useState(0);
	const [viewerIsOpen, setViewerIsOpen] = useState(false);

	const openLightbox = useCallback((event, { photo, index }) => {
		setCurrentImage(index);
		setViewerIsOpen(true);
	}, []);
	const closeMobileNav = () => {
		// console.log("farme tayeule");
	};

	const closeLightbox = () => {
		setCurrentImage(0);
		setViewerIsOpen(false);
	};

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
		<div>
			{isTabletOrMobile && (
				<div>
					<div className={classes.laTiteImage}>
						<svg
							preserveAspectRatio="xMidYMid meet"
							data-bbox="20 21.501 160.001 156.999"
							xmlns="http://www.w3.org/2000/svg"
							width="200"
							height="200"
							viewBox="20 21.501 160.001 156.999"
							data-type="color"
							role="presentation"
							aria-hidden="true"
						>
							<g>
								<path
									fill="#28231f"
									d="M162.614 178.5l-1.171-.011c.003-.255.082-25.865-12.356-54.581-11.466-26.471-36.23-61.082-89.097-75.645l.311-1.125c53.335 14.691 78.316 49.628 89.879 76.349 12.524 28.937 12.437 54.755 12.434 55.013z"
									data-color="1"
								></path>
								<path
									fill="#28231f"
									d="M54.364 52.25c-9.809 0-23.659-4.205-34.035-24.211L20 27.404l.689-.195c.352-.099 35.233-9.557 46.08 22.111l.172.501-.483.219c-.118.053-5.07 2.21-12.094 2.21zM21.713 28.157C37.915 58.642 61.659 50.71 65.482 49.183c-9.829-27.584-38.865-22.161-43.769-21.026z"
									data-color="1"
								></path>
								<path
									fill="#28231f"
									d="M96.099 63.31l-5.765-3.206-.081-.152c-.409-.765-10.004-18.833-11.688-26.11-1.34-5.778 2.623-10.053 4.905-11.507 1.221-.777 2.276-1.019 2.94-.693 1.559 0 12.897.211 16.243 9.008 3.518 9.246-5.896 31.142-6.298 32.069l-.256.591zm-4.893-4.057l4.326 2.406c1.497-3.609 9.068-22.604 6.027-30.596-3.283-8.631-15.165-8.245-15.281-8.252l-.195.008-.187-.13c-.113-.074-.819-.039-1.988.755-2.102 1.43-5.352 5.172-4.202 10.134 1.571 6.786 10.552 23.88 11.5 25.675z"
									data-color="1"
								></path>
								<path
									fill="#28231f"
									d="M116.726 78.367l-4.326-3.751c-8.237-15.054 5.76-34.799 6.359-35.632l.41-.568.486.504c.369.382 9.068 9.453 11.464 19.115 2.46 9.921-13.356 19.699-14.031 20.11l-.362.222zm-3.349-4.403l3.459 2.959c2.334-1.511 15.21-10.29 13.147-18.608-2-8.064-8.788-15.97-10.678-18.054-2.262 3.407-12.939 20.713-5.928 33.703z"
									data-color="1"
								></path>
								<path
									fill="#28231f"
									d="M140.632 103.355c-1.469 0-2.408-.147-2.445-.154l-.247-.041-2.378-3.627c-1.416-13.908 14.729-33.545 15.417-34.374l.451-.543.451.543c.113.137 11.277 13.806 5.987 26.99-3.984 9.928-12.909 11.206-17.236 11.206zm-2.008-1.27c1.893.251 13.49 1.264 18.156-10.369 4.434-11.05-3.373-22.574-5.359-25.24-2.654 3.351-15.824 20.66-14.708 32.794l1.911 2.815z"
									data-color="1"
								></path>
								<path
									fill="#28231f"
									d="M158.133 152.031l-2.352-9.337.38-.222c.038-.023 4.172-2.614 4.573-11.916.431-9.969 17.147-22.103 17.857-22.614l.785-.564.137.955c.02.135 1.915 13.741-1.902 27.941-3.892 14.483-18.837 15.711-18.988 15.722l-.49.035zm-1.013-8.81l1.904 7.554c2.526-.344 14.17-2.581 17.455-14.804 3.164-11.769 2.34-23.124 1.991-26.48-3.375 2.579-16.213 12.907-16.566 21.115-.365 8.456-3.657 11.735-4.784 12.615z"
									data-color="1"
								></path>
								<path
									fill="#28231f"
									d="M83.571 75.226c-10.973 0-24.88-3.964-27.262-5.512-.178-.115-.718-.466-.564-1.015 2.421-8.618 33.68-9.568 35.01-9.604l.16-.004 5.369 2.986.078.191c1.835 4.53 1.392 7.954-1.315 10.177-2.475 2.03-6.699 2.781-11.476 2.781zm-26.613-6.473c2.477 1.68 27.77 8.892 36.629 3.303 2.893-1.825 3.471-4.823 1.765-9.161l-4.727-2.629c-8.811.257-31.321 2.261-33.667 8.487zm-.085.26v-.002.002z"
									data-color="1"
								></path>
								<path
									fill="#28231f"
									d="M92.744 103.012c-9.56 0-19.183-3.031-22.192-5.668-1.189-1.043-1.19-1.883-.982-2.405v-.001c4.913-12.278 41.652-20.813 43.213-21.17l.288-.065 4.241 3.627.043.187c.035.147 3.267 14.813-10.365 22.381-4.053 2.249-9.141 3.114-14.246 3.114zm-22.085-7.64c-.095.236.154.646.666 1.095 4.436 3.887 23.866 8.646 35.094 2.411 12.068-6.7 10.146-19.261 9.832-20.917l-3.492-2.987c-3.496.832-37.633 9.229-42.1 20.398z"
									data-color="1"
								></path>
								<path
									fill="#28231f"
									d="M140.88 130.16a2.15 2.15 0 01-.723-.116c-2.643-.931-43.725-9.391-44.139-9.476l.093-.831-.032-.319c.381-.092 2.216-1.282 4.16-2.541 8.422-5.46 25.947-16.818 35.975-14.152 2.575.685 4.506 2.253 5.741 4.66l8.201 15.988-.265.298c-1.025 1.15-5.951 6.489-9.011 6.489zm-42.99-10.399c7.818 1.613 40.217 8.322 42.658 9.182 1.555.537 5.629-2.94 8.201-5.752l-7.836-15.274c-1.093-2.13-2.729-3.46-5-4.064-9.531-2.537-26.756 8.635-35.036 14.003-1.359.88-2.307 1.49-2.987 1.905z"
									data-color="1"
								></path>
								<path
									fill="#28231f"
									d="M169.463 133.153a55.461 55.461 0 01-10.062 11.341c-.843.723.272 2.036 1.115 1.314a57.15 57.15 0 0010.363-11.671c.616-.922-.799-1.906-1.416-.984z"
									data-color="1"
								></path>
								<path
									fill="#28231f"
									d="M147.465 86.1a43.665 43.665 0 00-7.995 10.311c-.536.96.876 1.951 1.416.984 2.074-3.715 4.615-7.034 7.694-9.981.798-.765-.313-2.082-1.115-1.314z"
									data-color="1"
								></path>
								<path
									fill="#28231f"
									d="M149.472 81.66c-.101-.729.045-1.354.442-1.968.601-.93-.814-1.916-1.416-.984-.658 1.017-.887 2.079-.721 3.276.151 1.097 1.846.772 1.695-.324z"
									data-color="1"
								></path>
								<path
									fill="#28231f"
									d="M141.209 114.817a32.685 32.685 0 00-11.835-1.863c-1.099.03-1.235 1.747-.122 1.717a31.394 31.394 0 0111.382 1.769c1.047.367 1.624-1.255.575-1.623z"
									data-color="1"
								></path>
								<path
									fill="#28231f"
									d="M122.947 114.296a8.98 8.98 0 00-4.549.241c-1.045.331-.735 2.025.325 1.69a7.958 7.958 0 014.102-.215c1.083.222 1.198-1.496.122-1.716z"
									data-color="1"
								></path>
								<path
									fill="#28231f"
									d="M108.406 81.956l-13.145 6.419c-.998.487-.255 2.04.744 1.553l13.145-6.419c.998-.487.255-2.041-.744-1.553z"
									data-color="1"
								></path>
								<path
									fill="#28231f"
									d="M89.301 91.236l-.976.129c-1.101.145-.775 1.835.325 1.69l.976-.129c1.101-.145.774-1.835-.325-1.69z"
									data-color="1"
								></path>
								<path
									fill="#28231f"
									d="M116.234 71.468c-1.278-2.903-.663-6.239 1.613-8.47.789-.773-.322-2.091-1.115-1.314-2.841 2.784-3.66 6.88-2.055 10.525.447 1.017 2.003.273 1.557-.741z"
									data-color="1"
								></path>
								<path
									fill="#28231f"
									d="M91.844 48.241a77.239 77.239 0 01-2.202-14.18c-.067-1.102-1.762-.77-1.695.324a77.18 77.18 0 002.202 14.18c.27 1.069 1.967.754 1.695-.324z"
									data-color="1"
								></path>
								<path
									fill="#28231f"
									d="M86.244 64.973a49.557 49.557 0 00-11.422 1.035c-1.085.227-.766 1.919.325 1.69 3.626-.76 7.27-1.1 10.976-1.008 1.104.027 1.235-1.689.121-1.717z"
									data-color="1"
								></path>
								<path
									fill="#28231f"
									d="M56.553 43.968L41.565 37.54c-1.021-.438-1.591 1.186-.575 1.622l14.988 6.428c1.021.438 1.592-1.186.575-1.622z"
									data-color="1"
								></path>
							</g>
						</svg>
					</div>
					{/* <Carousel views={photos} /> */}
					{/* <ModalGateway>
						{viewerIsOpen ? (
							<Modal onClose={closeLightbox}>
								<Carousel
									currentIndex={currentImage}
									views={photos.map((x) => ({
										...x,
									}))}
								/>
							</Modal>
						) : null}
					</ModalGateway> */}

					<Swiper
						style={{
							"--swiper-navigation-color": "#fff",
							"--swiper-pagination-color": "#fff",

							marginBlock: "auto",
							// "--swpier-navigation-background-color: #000",
						}}
						// spaceBetween={}
						slidesPerView={1}
						onSlideChange={() => console.log("slide change")}
						onSwiper={(swiper) => console.log(swiper)}
						zoom={true}
						navigation={true}
						modules={[Zoom, Navigation]}
					>
						<SwiperSlide>
							<div className="swiper-zoom-container">
								<img
									className={classes.imgDeSwiper}
									src={image1}
									alt=""
									// onClick={openLightbox}
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="swiper-zoom-container">
								<img
									className={classes.imgDeSwiper}
									src={image2}
									alt=""
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="swiper-zoom-container">
								<img
									className={classes.imgDeSwiper}
									src={image3}
									alt=""
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<img
								className={classes.imgDeSwiper}
								src={image4}
								alt=""
							/>
						</SwiperSlide>
						<SwiperSlide>
							<div className="swiper-zoom-container">
								<img
									className={classes.imgDeSwiper}
									src={image5}
									alt=""
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="swiper-zoom-container">
								<img
									className={classes.imgDeSwiper}
									src={image6}
									alt=""
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="swiper-zoom-container">
								<img
									className={classes.imgDeSwiper}
									src={image7}
									alt=""
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="swiper-zoom-container">
								<img
									className={classes.imgDeSwiper}
									src={image8}
									alt=""
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="swiper-zoom-container">
								<img
									className={classes.imgDeSwiper}
									src={image9}
									alt=""
								/>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			)}
			{isDesktopOrLaptop && (
				<div className="contGalerie">
					<Gallery photos={photos} onClick={openLightbox} rows={2} />
					<ModalGateway>
						{viewerIsOpen ? (
							<Modal onClose={closeLightbox}>
								<Carousel
									currentIndex={currentImage}
									views={photos.map((x) => ({
										...x,
									}))}
								/>
							</Modal>
						) : null}
					</ModalGateway>
				</div>
			)}
		</div>
	);
};
export default CarouselPerso;
