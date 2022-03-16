import React, { Component } from "react";
import $ from "jquery";

class Jquery extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount = () => {
		let prev = document.getElementById("prev");
		let next = document.getElementById("next");
		let slides = document.getElementById("slides");
		let pos = 0;
		const tailleImage = 200;
		console.log($(".slides").css("margin-left"));
		console.log(pos);
		prev.addEventListener("click", () => {
			console.log("prev");

			if ($(".slides").css("margin-left") === "0px" || pos <= 0) {
				pos = 6;
				$(".slides").finish().animate(
					{
						marginLeft: "-1200px",
					},
					500
				);
				console.log("0");
			} else {
				$(".slides")
					.finish()
					.animate(
						{
							marginLeft: "+=" + tailleImage + "px",
						},
						300
					);
				pos--;
				console.log(pos);
				console.log($(".slides").css("margin-left"));
			}
		});

		next.addEventListener("click", () => {
			console.log("next");
			if ($(".slides").css("margin-left") === "-1200px" || pos >= 6) {
				pos = 0;
				$(".slides").finish().animate(
					{
						marginLeft: "0px",
					},
					500
				);
				console.log("0");
			} else {
				$(".slides")
					.finish()
					.animate(
						{
							marginLeft: "-=" + tailleImage + "px",
						},
						300
					);
				pos++;
				console.log(pos);
				console.log($(".slides").css("margin-left"));
			}
			//console.log($('.slides').css('margin-left'));
		});
	};
	render() {
		return (
			<div>
				<div class="cont-slider">
					<div id="slides" class="slides">
						<div class="cont-slide">
							1
							<img
								src="https://images.radio-canada.ca/w_635,h_357/v1/ici-tele/16x9/chaton-les-poilus-bebe-chat.jpg"
								alt=""
							/>
						</div>
						<div class="cont-slide">
							2
							<img
								src="https://images.radio-canada.ca/w_635,h_357/v1/ici-tele/16x9/chaton-les-poilus-bebe-chat.jpg"
								alt=""
							/>
						</div>
						<div class="cont-slide">
							3
							<img
								src="https://images.radio-canada.ca/w_635,h_357/v1/ici-tele/16x9/chaton-les-poilus-bebe-chat.jpg"
								alt=""
							/>
						</div>
						<div class="cont-slide">
							4
							<img
								src="https://images.radio-canada.ca/w_635,h_357/v1/ici-tele/16x9/chaton-les-poilus-bebe-chat.jpg"
								alt=""
							/>
						</div>
						<div class="cont-slide">
							5
							<img
								src="https://images.radio-canada.ca/w_635,h_357/v1/ici-tele/16x9/chaton-les-poilus-bebe-chat.jpg"
								alt=""
							/>
						</div>
						<div class="cont-slide">
							6
							<img
								src="https://images.radio-canada.ca/w_635,h_357/v1/ici-tele/16x9/chaton-les-poilus-bebe-chat.jpg"
								alt=""
							/>
						</div>
						<div class="cont-slide">
							7
							<img
								src="https://images.radio-canada.ca/w_635,h_357/v1/ici-tele/16x9/chaton-les-poilus-bebe-chat.jpg"
								alt=""
							/>
						</div>
						<div class="cont-slide">
							8
							<img
								src="https://images.radio-canada.ca/w_635,h_357/v1/ici-tele/16x9/chaton-les-poilus-bebe-chat.jpg"
								alt=""
							/>
						</div>
						<div class="cont-slide">
							9
							<img
								src="https://images.radio-canada.ca/w_635,h_357/v1/ici-tele/16x9/chaton-les-poilus-bebe-chat.jpg"
								alt=""
							/>
						</div>
					</div>
					<div class="cont-nav-carou">
						<img
							id="prev"
							src="data:image/png;base64,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"
							alt=""
						/>
						<img
							id="next"
							src="data:image/png;base64,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"
							alt=""
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Jquery;
