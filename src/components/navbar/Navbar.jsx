import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { CV } from '../../components';

import logo from '../../assets/logo.svg';

import './navbar.css';

const Menu = () => (
    <>
        <a href="#home"><p>Home</p></a>
        <a href="#aboutme"><p>About Me</p></a>
        <a href="#resume"><p>Resume</p></a>
        <a href="#projects"><p>Projects</p></a>
        <a href="#contactme"><p>Contact Me</p></a>
        <PDFDownloadLink document={<CV />} fileName="CV Damian Arp.pdf">
            <button><p>Descargar CV</p></button>
        </PDFDownloadLink>
        
    </>
);

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='dami__navbar'>
            <div className='dami__navbar-links'>
                <div className='dami__navbar-links_logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='dami__navbar-links_container'>
                    <Menu />
                </div>
                <div className='dami__navbar-menu'>
                    {toggleMenu 
                        ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} /> 
                        : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />}
                    {toggleMenu && (
                        <div className='dami__navbar-menu_container swirl-in-tr-fwd'>
                            <div className='dami__navbar-menu_container-links'>
                                <Menu />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar;