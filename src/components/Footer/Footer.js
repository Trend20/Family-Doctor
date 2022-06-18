import React from 'react';

import { TiSocialFacebook, TiSocialTwitter,TiSocialLinkedin, TiRss } from 'react-icons/ti';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-logo">
                <a href="#">
                    <img src="../logo.png" alt=""/>
                    <h1>Family Doctor</h1>
                </a>
                <p>
                    Choosing the right hospital and physician are important factors to consider
                    that significantly influence a patient’s treatment.
                    The preferred choice for many patients is choosing private care.
                </p>

                <p>Copyright © 2020 Privacy Policy</p>
            </div>

            <div className="info">
                <h3>Information</h3>
                <div className="info-links">
                    <a href="">Home</a>
                    <a href="about">About</a>
                    <a href="services">Services</a>
                    <a href="doctors">Doctors</a>
                    <a href="#">Gallery</a>
                    <a href="partners">Partners</a>
                    <a href="#">Testimonials</a>
                    <a href="contact">Contacts</a>
                </div>
            </div>

            <div className="footer-contacts">
                <h3>Contact us</h3>
                <p>Washington, USA 6036 Richmond, hwy., Alexandria, VA, 2233 </p>
                <p>Phone <a href="+1(243)456 7891">+1(243)456 7891</a></p>
                <a href="info@demolink.org">info@demolink.org</a>

                <div className="social">
                    <h3>Social Media</h3>
                    <div className="icons">
                        <i><TiSocialFacebook /></i>
                        <i><TiSocialTwitter /></i>
                        <i><TiSocialLinkedin /></i>
                        <i><TiRss /></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
