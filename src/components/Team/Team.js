import React from 'react';

import { RiPhoneFill } from 'react-icons/ri';

import './Team.css';

function Team() {
	return (
		<div className="team" id="doctors">
			<h1>Choose Your Doctor</h1>

			<div className="team-members">
				<div className="member">
					<img src="../../img/doctor1.jpg" alt="doctor" />
					<h3>Adam Smith</h3>
					<p>Main Family Doctor</p>
					<span></span>
					<h6>
						<i>
							<RiPhoneFill />
						</i>
						<a href="(123) 123-7899">(123) 123-7899</a>
					</h6>
					<button className='book-btn'>Book Now!</button>
				</div>

				<div className="member">
					<img src="../../img/doctor2.jpg" alt="doctor" />
					<h3>Edward Paul</h3>
					<p>Family Doctor</p>
					<span></span>
					<h6>
						<i>
							<RiPhoneFill />
						</i>
						<a href="(123) 123-7899">(123) 123-7899</a>
					</h6>
					<button className='book-btn'>Book Now!</button>
				</div>

				<div className="member">
					<img src="../../img/doctor3.jpg" alt="doctor" />
					<h3>Elizabeth Rouz</h3>
					<p>Family Doctor</p>
					<span></span>
					<h6>
						<i>
							<RiPhoneFill />
						</i>
						<a href="(123) 123-7899">(123) 123-7899</a>
					</h6>
					<button className='book-btn'>Book Now!</button>
				</div>
			</div>

			<div className="showcase" id="doctors">
				<div className="showcase-image">
					<img src="../../img/showcase1.jpg" alt="" />
				</div>
				<div className="showcase-image">
					<img src="../../img/showcase2.jpg" alt="" />
				</div>
				<div className="showcase-image">
					<img src="../../img/service2.jpg" alt="" />
				</div>
				<div className="showcase-image">
					<img src="../../img/showcase3.jpg" alt="" />
				</div>
				<div className="showcase-image">
					<img src="../../img/showcase4.jpg" alt="" />
				</div>
			</div>
		</div>
	);
}

export default Team;
