import React from 'react';
import './Service.scss';

const Service = () => {
  const services = [
    'Digital Flex Boards : Durable, high-quality printed advertising boards.',
    'Glow Sign Boards : Illuminated boards for enhanced night visibility.',
    'LED Boards : Bright, energy-efficient digital display boards.',
    'One Way Vision : Perforated film for see-through window graphics.',
    'Backlit - Frontlit Boards : Lighted displays for impactful advertising.',
    'Vinyl Stickers : Custom adhesive designs for branding and decor.',
    'Hoardings : Large-scale outdoor billboards for promotions.',
    'Exhibitions Branding Rolling Standee : Portable stands for event marketing.',
    'Pamphlet Printing & Distribution : Handouts for targeted promotion.',
    'Invoice - Letter Head : Branded stationery for professional use.',
    'Visiting Cards : Compact cards for business networking.',
    'Receipt Book : Custom printed for transaction records.',
    'Computer Stationery Printing : Pre-printed paper for office use.',
    'Booklet-Brochure Printing : Informative, multi-page marketing materials.',
    'ID - Card Printing : Personalized identification cards.',
    'File Printing : Customized office files for documents.',
    'Folder Form Printing : Branded folders for organized paperwork.',
    'Invitation Cards - Envelope - Sticker - Calendar : Custom designs for events and branding.'
  ];

  return (
    <section className="services">
      <div className="container">
        <h2 className="services-title">Our &nbsp; Services</h2>
        <ul className="services-list">
          {services.map((service, index) => (
            <li key={index} className="service-item" style={{ '--i': index }}>
              <span className="bullet-icon">✔</span>
              {service}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Service;
