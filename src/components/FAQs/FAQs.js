import React, { Component } from 'react';
import { TiPlus, TiMinus } from 'react-icons/ti';
import './FAQs.css';

class FAQs extends Component {
	constructor(props) {
		super(props);
		this.state = {
			toggleSign: <TiPlus />,
			description: '',
		};
	}

	handleToggle = () => {
		this.setState({ toggleSign: !this.state.toggleSign });
	};
	render() {
		return (
			<div className="faqs">
				<h1>FAQ</h1>

				<div className="questions">
					<div className="question-container">
						<div className="quiz-head" onClick={this.handleToggle}>
							<h5>
								01.If you had just to eat one thing for the rest of your life, What would you choose?
							</h5>
							<i>{this.state.toggleSign ? <TiPlus /> : <TiMinus />}</i>
						</div>
						<p>
							We are on the leading edge of cancer care, providing the full continuum of cancer treatments
							and supportive care services in a single convenient location. Our cancer specialists are
							experts at diagnosing and treating cancer tumors. Viral infections generally must run their
							course, with treatment aimed at easing symptoms and providing some relief while you’re sick.
							Sometimes, antiviral medications are prescribed for specific infections.
						</p>
					</div>

					<div className="question-container">
						<div className="quiz-head" onClick={this.handleToggle}>
							<h5>03.Do i need a ong consult?</h5>
							<i>{this.state.toggleSign ? <TiPlus /> : <TiMinus />}</i>
						</div>
						<p>
							You can trust that your health is being managed by the professional team of health care
							experts who care about your unique needs and goals. We facilitate partnerships between
							individual patients, their personal physicians, and when appropriate, the patient's family.
							Our medical center is always ready to offer you emergency medical services as well as
							immediately diagnose you and determine the need for any medical resources.
						</p>
					</div>

					<div className="question-container">
						<div className="quiz-head" onClick={this.handleToggle}>
							<h5>02.Which do you like better, cardio or weightlifting?</h5>
							<i>{this.state.toggleSign ? <TiPlus /> : <TiMinus />}</i>
						</div>
						<p>
							Nowadays people should balance their life between technological progress and natural life.
							Technogenic influence may cause different diseases, including cancer. It’s crucial to defend
							yourself from such affection. A specialized rehabilitation team helps patients achieve the
							highest quality of life by preventing disability and improving independence through a
							multi-disciplinary approach which includes a lot of types of therapy.
						</p>
					</div>

					<div className="question-container">
						<div className="quiz-head" onClick={this.handleToggle}>
							<h5>04.What if i have to see a doctor after hours?</h5>
							<i>{this.state.toggleSign ? <TiPlus /> : <TiMinus />}</i>
						</div>
						<p>
							This was my first time taking my kids here and we are all absolutely satisfied. You have a
							great staff and doctor Smith was also great, I will be taking my children to him permanently
							from now on. I would highly recommend the whole staff of Alfa Health as they cared a lot
							about me and my kids. I would like to thank and compliment the staff at Alfa Health,
							including the outpatient, laboratory staff and cardiac division during my stay at your
							facility on July 9th and 10th. You did a great job at diagnosing and treating my disease,
							which I wasn’t even sure of. I appreciate the top-notch services you delivered!
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default FAQs;
