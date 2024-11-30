import React from 'react';
import './About.scss';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1 className="fade-in">About &nbsp; Us</h1>
        <p className="slide-in">
        Since 2002, with over 22 years of experience, Vallabh Enterprises has been dedicated to delivering exceptional, tailor-made printing solutions. Our passionate team combines creativity and expertise to bring your vision to life with precision and excellence.
        </p>
      </div>
      <div className="about-sections">
        <div className="about-card zoom-in">
          <h2>Our Mission</h2>
          <p>
          To innovate and deliver exceptional printing solutions that combine creativity, precision, and quality, leaving a lasting impression with every project.
          </p>
        </div>
        <div className="about-card zoom-in">
          <h2>Our Vision</h2>
          <p>
          Our goal is to lead the industry by continuously evolving, embracing cutting-edge technologies, and fostering innovative ideas. We strive to set new standards in printing, delivering exceptional quality and creativity to our clients.
          </p>
        </div>
        <div className="about-card zoom-in">
          <h2>Our Team</h2>
          <p>
          A dedicated team of professionals united by a passion for delivering exceptional quality and unparalleled customer satisfaction in the printing industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
