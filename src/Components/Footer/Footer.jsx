import React from 'react';
import './Footer.scss';
import mp4 from "../../Assets/Gallery/print.gif"
import Link from '../Pages/Link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__waves">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="footer__wave-svg"
        >
          <path
            fill="#f39c12"
            fillOpacity="1"
            d="M0,96L60,128C120,160,240,224,360,229.3C480,235,600,181,720,160C840,139,960,149,1080,138.7C1200,128,1320,96,1380,80L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="footer__container">
        <div className="footer__section">
          <h3>About &nbsp; Us</h3>
          <p>
            Your one-stop shop for all printing needs! From business cards to
            large banners, we bring your ideas to life with vibrant colors and
            quality.
          </p>
        </div>
        <div className="footer__section">
          <h3>Contact &nbsp; Us</h3>
          <ul>
            <li>Email: <a href="mailto:chetangandhrva@gmail.com?subject=Subject%20Here&body=Body%20Here">chetangandhrva@gmail.com</a></li>
            <li>Phone: <a href='tel:9023476540'>+919023476540</a></li>
            <li>Location: &nbsp; 75, New Heaven Complex, Nr. Ayurvedi Teen Rasta, Out side Panigate, Waghodia Road, Vadodara - 390019, Gujarat, India</li>
          </ul>
        </div>
        <div className="footer__section">
          <h3>Follow &nbsp; Us</h3>
          <div className="footer__social">
           <Link/>
          </div>
        </div>

      </div>
      <div className="footer__bottom">
        <p>
          &copy; {new Date().getFullYear()} Vallabh Enterprises. Crafted with care and
          creativity.
        </p>
      </div>
      
    </footer>
  );
};

export default Footer;
