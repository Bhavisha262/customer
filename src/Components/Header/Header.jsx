import React from 'react';
import './Header.scss';
import logo from "../../Assets/Logo/logov.png";
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { SlMenu } from "react-icons/sl";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }
  const Navigate = useNavigate()

  return (
    <>
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt='' onClick={() => Navigate('/') }/>
      </div>
      < SlMenu onClick={toggleDrawer}  fontSize={30} className='menu'/>
      <nav className='header__nav'>
        <ul className="header__menu">
        <Link to="/"><li><FaHome /> &nbsp; Home</li></Link>
          <Link to="/about"><li><FaInfoCircle/> &nbsp; About</li></Link>
          <Link to="/service"><li><FaHandshake /> &nbsp; Services</li></Link>
          <Link to="/contact"><li><FaSquarePhone /> &nbsp; Contact</li></Link>
        </ul>
      </nav>
    </header>
    <Drawer
    open={isOpen}
    onClose={toggleDrawer}
    direction='right'
    className='bla bla bla'
    style={{padding:'30px'}}
>
        <ul className="menu_li">
       <li onClick={() => Navigate('/') || setIsOpen(false)}><FaHome/> &nbsp; Home</li>
       <li onClick={() => Navigate('/about') || setIsOpen(false)}><FaInfoCircle/> &nbsp; About</li>
       <li onClick={() => Navigate('/service') || setIsOpen(false)}><FaHandshake /> &nbsp; Services</li>
       <li onClick={() => Navigate('/contact') || setIsOpen(false)}><FaSquarePhone /> &nbsp; Contact</li>
        </ul>
</Drawer>
</>
  );
};

export default Header;