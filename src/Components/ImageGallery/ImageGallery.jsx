import React, { useState } from 'react';
import './ImageGallery.scss';
import img1 from "../../Assets/Gallery/g1.jpg";
import img2 from "../../Assets/Gallery/g2.jpg";

import img4 from "../../Assets/Gallery/g4.jpg";
import img5 from "../../Assets/Gallery/g5.jpg";
import img6 from "../../Assets/Gallery/g6.jpg";
import img7 from "../../Assets/Gallery/g7.jpg";
import img8 from "../../Assets/Gallery/g8.jpg";
import img9 from "../../Assets/Gallery/g9.jpg";
import img10 from "../../Assets/Gallery/g10.jpg";
import img11 from "../../Assets/Gallery/g11.jpg";
import img12 from "../../Assets/Gallery/g12.jpg";
import img13 from "../../Assets/Gallery/g13.jpg";
import img14 from "../../Assets/Gallery/g14.jpg";
import img15 from "../../Assets/Gallery/g15.jpg";
import img16 from "../../Assets/Gallery/g16.jpeg";
import img17 from "../../Assets/Gallery/g17.png";
import img18 from "../../Assets/Gallery/g18.png";
import img19 from "../../Assets/Gallery/g19.png";


const images = [
 img1,
 img2,
 img4,
 img5,
 img6,
 img7,
 img8,
 img9,
 img10,
 img11,
 img12,
 img13,
 img14,
 img15,
 img16,
 img17,
 img18,
 img19,
];

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 3 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= images.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider-container">
       <div className="wavy-heading-container">
      <h1 className="wavy-heading">Our &nbsp; Work &nbsp; Gallery</h1>
    </div>
      <div className="slider-wrapper">
     
        <div
          className="slider"
          style={{
            transform: `translateX(-${currentIndex * 33.33}%)`,
          }}
        >
          {images.map((image, index) => (
            <div className="slide" key={index}>
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
      </div><br/><br/><br/>
      <div className="arrows">
        <button onClick={prevSlide} className="arrow left-arrow" color='#00005a'>
        &#x25C0;
        </button>
        <button onClick={nextSlide} className="arrow right-arrow" color='#00005a'>
        &#x25B6;
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
