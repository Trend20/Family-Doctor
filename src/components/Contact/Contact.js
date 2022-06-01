import React, { Component } from 'react';

import { RiPhoneFill, RiMap2Line } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import Swal from "sweetalert2";
import axios from 'axios';

import './Contact.css';

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			name: '',
			email: '',
			phone: '',
			message: '',
			emailError: "",
			phoneError: "",
			nameError: "",
			messageError: "",
			successMessage: ""
		};
	}

	// name handler
	handleNameChange = (event) => {
		this.setState({
			name: event.target.value
		})
	}

	// email handler
	handleEmailChange = (event) => {
		this.setState({
			email: event.target.value
		})
	}
	// phone handler
	handlePhoneChange = (event) => {
		this.setState({
			phone: event.target.value
		})
	}

	// message handler
	handleMessageChange = (event) => {
		this.setState({
			message: event.target.value
		})
	}



	validate = () => {

		if (this.state.name === "") {
			this.setState({
				nameError: "Name field is required"
			})
		} else {
			this.setState({
				nameError: ""
			})
		}

		const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (this.state.email === "" || reg.test(this.state.email) === false) {
			this.setState({
				emailError: "Email Field is Invalid"
			})
		} else {
			this.setState({
				emailError: ""
			})
		}

		if (this.state.phone === "") {
			this.setState({
				phoneError: "Phone field is required"
			})
		} else {
			this.setState({
				phoneError: ""
			})
		}

		if (this.state.message === "") {
			this.setState({
				messageError: "Message field is required"
			})
		} else {
			this.setState({
				messageError: ""
			})
		}
	}

	showSuccess = () =>{
		if(this.state.name !== "" && this.state.email !== "" && this.state.phone !== "" && this.state.message !== ""){
			Swal.fire({
				icon: 'success',
				title: 'Welcome',
				text: 'We will get back to you shortly!',
				timer: 2500
			})
		}
	}

	// handling form submit
	onFormSubmit = (event) => {

		event.preventDefault();

		const newUser = {
			name: this.state.name,
			email: this.state.email,
			phone: this.state.phone,
			message: this.state.message
		}

		axios.post('http:localhost:4000/patients/add', newUser)
			.then(res => {
				console.log(res.data);
			});

		this.validate();
		this.showSuccess();

		if(this.state.name !== "" && this.state.email !== "" && this.state.phone !== "" && this.state.message !== ""){
			this.setState(state => ({
				users: state.users.concat(newUser),
				name: '',
				email: '',
				phone: '',
				message: ''
			}))
		}else{
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Please fill all the fields!',
				timer: 2500
			})
		}
	}

	render() {
		return (
			<div className="contact-us" id="contact">
				<div className="contact-details">
					<div className="details">
						<h1>Contact Details</h1>
						<h5>
							<i>
								<RiMap2Line />
							</i>
							470 Lucy Forks, Patriciafurt, YC7B 3UT
						</h5>
						<h5>
							<i>
								<RiPhoneFill />
							</i>
							<a href="(123) 123-7899">(123) 123-7899</a>
						</h5>

						<div className="mailist">
							<p>
								<i>
									<MdEmail />
								</i>
								Support: <a href="mail@demolink.org">mail@demolink.org</a>
							</p>
							<p>
								<i>
									<MdEmail />
								</i>
								Marketing: <a href="mail@demolink.org">mail@demolink.org</a>
							</p>
							<p>
								<i>
									<MdEmail />
								</i>
								Career: <a href="mail@demolink.org">mail@demolink.org</a>
							</p>
						</div>
					</div>

					<div className="contact-form">
						<form onSubmit={this.onFormSubmit}>
							<h1>Get In Touch</h1>

							<input type="text" placeholder="Name*"
								value={this.state.name}
								className="input-field"
								onChange={this.handleNameChange}
							/>
							<span className="text-danger">{this.state.nameError}</span>

							<input type="email" placeholder="Email*"
								value={this.state.email}
								className="input-field"
								onChange={this.handleEmailChange}
							/>
							<span className="text-danger">{this.state.emailError}</span>

							<input type="tel" placeholder="Phone"
								value={this.state.phone}
								className="input-field"
								onChange={this.handlePhoneChange}
							/>
							<span className="text-danger">{this.state.phoneError}</span>

							<textarea name="message" id="message"
								value={this.state.message}
								cols="30" rows="2" placeholder="Message*"
								onChange={this.handleMessageChange}
							></textarea>
							<span className="text-danger">{this.state.messageError}</span>

							<button className="submit-btn" type='submit'>Send Message</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
