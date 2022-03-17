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
				<div className="title-container">
					<span className="lilNos">nos</span>
					<span className="title">expertises</span>
					<span className="bigE">E</span>
				</div>
			)}
			{isDesktopOrLaptop && <div>Ca cest pour un ordi</div>}
		</div>
	);
};

export default Expertise;
