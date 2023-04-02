import React from 'react';
import './footer.css';
import logo from '../../assets/logo.svg';
import { FaLinkedin, FaGithub, FaInstagram, FaBehance } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='dami__footer section__padding'>
            <div className="dami__footer-heading">
                <h1 className="gradient__text">Get in touch</h1>
            </div>

            <div className="dami__footer-links">
                <div className="dami__footer-links_logo">
                    <img src={logo} alt="logo" />
                    <p>07/10/1987</p>
                    <p>(+54) 221 576 1519</p>
                    <p>La Plata, Buenos Aires, Argentina</p>
                    <p>damianarp@gmail.com</p>
                </div>
                <div className="dami__footer-links_div">
                    <h4>Social Media</h4>
                    <div className="dami__footer-links_div-icons">
                        <FaLinkedin/><a href="https://www.linkedin.com/in/pablodamianarp" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                    <div className="dami__footer-links_div-icons">
                        <FaGithub/><a href="https://github.com/damianarp" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                    <div className="dami__footer-links_div-icons">
                        <FaBehance/><a href="https://www.behance.net/damianarp" target="_blank" rel="noopener noreferrer">Behance</a>
                    </div>
                    <div className="dami__footer-links_div-icons">
                        <FaInstagram/><a href="https://www.instagram.com/pablodamianarp" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>
            </div>
            <div className="dami__footer-copyright">
                <p>© 2022 Damián Arp. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;