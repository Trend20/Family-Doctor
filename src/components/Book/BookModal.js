import React, { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import Swal from "sweetalert2";
import './BookModal.css';

function BookModal({ handleClose, show, children }) {
	// manipulate state

	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
	const [message, setMessage] = useState('');
	const [isValid, setIsValid] = useState(true);

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handlePhoneChange = (event) => {
		setPhone(event.target.value);
	};

  const handleLocationChange = (event) => {
		setLocation(event.target.value);
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
				text: 'Please! Enter details to Book Your Doctor!',
				timer: 2500
			})
		}
	}

	const showHideClassName = show ? 'modal display-block' : 'modal display-none';
	return (
		<div className={showHideClassName}>
			<form className="modal-main" onSubmit={handleSubmit}>
				<h3>Book A Doctor Now!</h3>
				<p>Protect Yourself and The People Around You!</p>
				<input type="text" placeholder="Full Name*" 
					style={{ borderColor: !isValid ? 'red' : '#ccc'}} 
					value={name} onChange={handleNameChange} 
				/>
				<input type="tel" placeholder="Phone*" 
					value={phone} onChange={handlePhoneChange} 
				/>
        	<input type="text" placeholder="Location*" 
					value={location} onChange={handleLocationChange} 
				/>
				<textarea
					name="message"
					id="message"
					cols="10"
					rows="3"
					value={message}
					placeholder="Appointment Reason*"
					onChange={handleMessageInput}
				></textarea>
				<button type="submit">
					Book Now!
				</button>
				<i onClick={handleClose}>
					<AiFillCloseCircle />
				</i>
			</form>
		</div>
	);
}

export default BookModal;
