import React, { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import Swal from "sweetalert2";
import './Modal.css';

function Modal({ handleClose, show, children }) {
	// manipulate state

	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');
	const [isValid, setIsValid] = useState(true);

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handlePhoneChange = (event) => {
		setPhone(event.target.value);
	};

	const handleMessageInput = (event) => {
		setMessage(event.target.value);
	};


	// handling form submission
	const handleSubmit = (event) => {
		// preventDefault
		event.preventDefault();

		if(name !== "" && phone !== "" && message !== ""){
			Swal.fire({
				icon: 'success',
				title: 'Thank you.',
				text: 'We will get back to you shortly!',
				timer: 2500
			})
			setMessage("");
			setName("");
			setPhone("");
			setIsValid(true)
		}else{
			setIsValid(false)
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Please fill all the fields before submitting!',
				timer: 2500
			})
		}
	}

	const showHideClassName = show ? 'modal display-block' : 'modal display-none';
	return (
		<div className={showHideClassName}>
			<form className="modal-main" onSubmit={handleSubmit}>
				<h3>Request A Callback</h3>
				<p>We can call you in 30 seconds, just enter your details below</p>
				<input type="text" placeholder="Name*" 
					style={{ borderColor: !isValid ? 'red' : '#ccc'}} 
					value={name} onChange={handleNameChange} 
				/>
				<input type="tel" placeholder="Phone*" 
					value={phone} onChange={handlePhoneChange} 
				/>
				<textarea
					name="message"
					id="message"
					cols="10"
					rows="3"
					value={message}
					placeholder="Message*"
					onChange={handleMessageInput}
				></textarea>
				<button type="submit">
					Request
				</button>
				<i onClick={handleClose}>
					<AiFillCloseCircle />
				</i>
			</form>
		</div>
	);
}

export default Modal;
