import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import logo from '../../assets/logo.svg';

import './navbar.css';

const Menu = () => (
    <>
        <p><a href="home"></a>Home</p>
        <p><a href="aboutme"></a>About Me</p>
        <p><a href="resume"></a>Resume</p>
        <p><a href="projects"></a>Projects</p>
        <p><a href="contactme"></a>Contact Me</p>
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