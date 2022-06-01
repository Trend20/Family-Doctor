import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Modal from '../Modal';

// hero styles
import './Hero.css';

const  Hero = () =>{
	// adding the modal pop-up

	const [show, setShow] = useState(false);

	// function to show the modal
	const showModal = () => {
		setTimeout(() => {
			setShow(true);
	}, 2000);
	};

	// function to close the modal
	const closeModal = () => {
		setShow(false);
	};
	return (
		<div className="hero-container">
			<Navbar />

			<div className="hero-description">
				<p>Being healthy now is so simple</p>
				<h1>We Take Care Of Your Health</h1>
				<Modal show={show} handleClose={closeModal}></Modal>
				<button className="btn" onClick={showModal}>
					Request an appointment
				</button>
			</div>
		</div>
	);
}

export default Hero;
