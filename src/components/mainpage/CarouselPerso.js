import React, { useEffect, useState } from "react";
import { GrNext } from "react-icons/gr";
import "../scss/CarouselPero.scss";

const CarouselPerso = () => {
	return (
		<div className="cont-carou-perso">
			<div className="prev-btn">
				<GrNext size="50px" />
			</div>
			<div className="fenetre">
				<div className="bande">
					<img
						src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
						alt=""
					/>
					<img
						src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
						alt=""
					/>
					<img
						src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
						alt=""
					/>
					<img
						src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
						alt=""
					/>
					<img
						src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
						alt=""
					/>
					<img
						src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
						alt=""
					/>
				</div>
			</div>
			<div className="next-btn">
				<GrNext size="50px" />
			</div>
		</div>
	);
};
export default CarouselPerso;
