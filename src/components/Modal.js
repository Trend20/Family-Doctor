import React, { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import './Modal.css';

function Modal({ handleClose, show, children }) {
	// manipulate state

	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');
	const [error, setError] = useState('You must fill all the Field');

	// handling form submission
	const handleSubmit = (event) => {
		// preventDefault
		event.preventDefault();
	};

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handlePhoneChange = (event) => {
		setPhone(event.target.value);
	};

	const handleMessageInput = (event) => {
		setMessage(event.target.value);
	};

	// form validation on button click

	const showMessage = (name, phone, message) => {
		if (name !== '' && phone !== '' && message !== '') {
			let successElement = document.getElementById('success');
			successElement.style.display = 'block';
			setName('');
			setPhone('');
			setMessage('');
		} else {
			let errorElement = document.getElementById('error');
			errorElement.style.display = 'block';
		}
	};

	const showHideClassName = show ? 'modal display-block' : 'modal display-none';
	return (
		<div className={showHideClassName}>
			<form className="modal-main" onSubmit={handleSubmit}>
				<h3>Request A Callback</h3>
				<p>We can call you in 30 seconds, just enter your details below</p>
				<p id="error">{error}</p>
				<input type="text" placeholder="Name*" value={name} onChange={handleNameChange} required />
				<input type="text" placeholder="Phone*" value={phone} onChange={handlePhoneChange} required />
				<textarea
					name="message"
					id="message"
					cols="10"
					rows="3"
					value={message}
					placeholder="Message*"
					onChange={handleMessageInput}
				></textarea>
				<button type="submit" onClick={showMessage}>
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
