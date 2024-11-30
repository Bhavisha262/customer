import React, { useState } from 'react';
import './Header.scss';
import logo from "../../Assets/Logo/logov.png";
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt=''/>
      </div>
      
      <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
        <ul className="header__menu">
        <Link to="/"><li><FaHome /> &nbsp; Home</li></Link>
          <Link to="/about"><li><FaInfoCircle/> &nbsp; About</li></Link>
          <Link to="/service"><li><FaHandshake /> &nbsp; Services</li></Link>
          <Link to="/contact"><li><FaSquarePhone /> &nbsp; Contact</li></Link>
        </ul>
      </nav>

      <div className="header__toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="header__toggle-bar"></span>
        <span className="header__toggle-bar"></span>
        <span className="header__toggle-bar"></span>
      </div>
    </header>
  );
};

export default Header;
