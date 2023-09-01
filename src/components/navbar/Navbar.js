import React from 'react'
import './navbar.css';

const Navbar = () => {
  return (
    <header className='header'>
    <a href="#" className="logo">{/* <i className="fas fa-magic"></i>*/}CESA-CSI-VPPCOE</a> 
 
    <div className="fas fa-bars"></div>
    <nav className='navbar'>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>
    
    </header>
    
  )
}

export default Navbar
