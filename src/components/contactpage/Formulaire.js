import React, { useRef, useState } from "react";
import "../scss/Formulaire.scss";
import emailjs from "emailjs-com";

const Formulaire = () => {
	const form = useRef();
	const [sent, setSent] = useState(false);
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"",
				"",
				e.target,
				""
			)
			.then(
				(result) => {
					console.log(result.text);
					setSent(true);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div>
			<div className="cont-form">
				<form id="contact-form" onSubmit={sendEmail} ref={form}>
					<div className="cont-d">
						<div className="form-gauche">
							<div className="form-group">
								{/* <label htmlFor="name"></label> */}
								<input
									type="text"
									className="form-control"
									// value={this.state.name}
									placeholder="Nom"
									name="name"
								/>
							</div>
							<div className="form-group">
								{/* <label htmlFor="name"></label> */}
								<input
									type="text"
									className="form-control"
									// value={this.state.name}
									placeholder="Prénom"
									name="prenom"
								/>
							</div>
							<div className="form-group">
								{/* <label htmlFor="name"></label> */}
								<input
									type="text"
									className="form-control"
									// value={this.state.name}
									placeholder="Téléphone"
									name="phone"
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
									// value={this.state.email}
									placeholder="E-mail"
									name="email"
								/>
							</div>
						</div>
						<div className="form-droite">
							<div className="form-group">
								{/* <label htmlFor="message">Message</label> */}
								<textarea
									className="form-control"
									rows="5"
									// value={this.state.message}
									placeholder="Votre message"
									name="message"
								/>
							</div>
						</div>
					</div>
					{sent ? (
						<div className="merci">
							Merci. Votre message à été envoyer avec succès.
						</div>
					) : (
						<button type="submit" className="btn-form-contact">
							Envoyer
						</button>
					)}
				</form>
			</div>
		</div>
	);
};
export default Formulaire;
