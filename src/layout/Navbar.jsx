import React, { useState } from 'react'
import '../assets/css/Navbar/navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
               {/*  navabr section start   */}
    <nav className="navbar ">
        {/*  logo  */}
        <h1>Refat</h1>
        {/*  navbar links   */}
        <div className={` `}>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            
            <li><a className="btn" href="">Resume</a></li>

        </ul>
        </div>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>

    </nav>
    
    {/* navbar section end   */}

    </div>
  )
}

export default Navbar