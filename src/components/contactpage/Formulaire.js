import React from "react";
import "../scss/Formulaire.scss";
// import { useMediaQuery } from "react-responsive";

// const Formulaire = () => {
// 	const isDesktopOrLaptop = useMediaQuery({
// 		query: "(min-width: 1224px)",
// 	});
// 	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
// 	return (
// 		<>
// 			{isTabletOrMobile && (
// 				<div>
// 					<div className="cont-form">
// 						<form action="">
// 							<label htmlFor="">Bonjour</label>
// 							<button>button</button>
// 						</form>
// 					</div>
// 				</div>
// 			)}
// 		</>
// 	);
// };
// export default Formulaire;
class Formulaire extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			message: "",
		};
	}

	render() {
		return (
			<div className="cont-form">
				<form
					id="contact-form"
					onSubmit={this.handleSubmit.bind(this)}
					method="POST"
				>
					<div className="form-group">
						{/* <label htmlFor="name"></label> */}
						<input
							type="text"
							className="form-control"
							value={this.state.name}
							placeholder="Nom"
							onChange={this.onNameChange.bind(this)}
						/>
					</div>
					<div className="form-group">
						{/* <label htmlFor="name"></label> */}
						<input
							type="text"
							className="form-control"
							value={this.state.name}
							placeholder="Prénom"
							onChange={this.onNameChange.bind(this)}
						/>
					</div>
					<div className="form-group">
						{/* <label htmlFor="name"></label> */}
						<input
							type="text"
							className="form-control"
							value={this.state.name}
							placeholder="Téléphone"
							onChange={this.onNameChange.bind(this)}
						/>
					</div>
					<div className="form-group">
						{/* <label htmlFor="exampleInputEmail1"> */}
						{/* Email address */}
						{/* </label> */}
						<input
							type="email"
							className="form-control"
							aria-describedby="emailHelp"
							value={this.state.email}
							placeholder="E-mail"
							onChange={this.onEmailChange.bind(this)}
						/>
					</div>

					<div className="form-group">
						{/* <label htmlFor="message">Message</label> */}
						<textarea
							className="form-control"
							rows="5"
							value={this.state.message}
							placeholder="Votre message"
							onChange={this.onMessageChange.bind(this)}
						/>
					</div>
					<button type="submit" className="btn-form-contact">
						Envoyer
					</button>
				</form>
			</div>
		);
	}

	onNameChange(event) {
		this.setState({ name: event.target.value });
	}

	onEmailChange(event) {
		this.setState({ email: event.target.value });
	}

	onMessageChange(event) {
		this.setState({ message: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log(this.state);
	}
}

export default Formulaire;
