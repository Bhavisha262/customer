import React from 'react'
import "./Home.scss"
import Slider from '../Slider/Slider'
import slide1 from "../../Assets/Slider/slide1.png";
import slide2 from "../../Assets/Slider/slide2.png";
import slide3 from "../../Assets/Slider/slide3.png";
import slide4 from "../../Assets/Slider/slide4.png";
import slide5 from "../../Assets/Slider/slide5.png";
import ImageGallery from '../ImageGallery/ImageGallery';
import Countup from '../Countup/Countup';


const Home = () => {
  const slides = [
    {
      image: slide1,
      title: "LED Boards",
      description: "Our premium LED boards come with a one-year free service. Brighten your storefront with energy-efficient, eye-catching technology.",
    },
    {
      image: slide2,
      title: "ACP Work",
      description: "High-quality Aluminum Composite Panel (ACP) work to give your brand a sleek, modern look. Durable and aesthetically pleasing.",
    },
    {
      image: slide3,
      title: "Frosted Print",
      description: "Elevate your space with frosted film printing! Personalize designs for windows, doors, or glass surfaces.",
    },
    {
      image: slide4,
      title: "Acrylic box lettering",
      description: "Our custom acrylic lettering options are perfect for both indoor and outdoor signage. Durable, weather-resistant, and sophisticated.",
    },
    {
      image: slide5,
      title: "Rolling Standee",
      description: "Make a lasting impression with standee banner printing! These roll up standee banner are easy to set up, waterproof, and perfect for tradeshows and conferences.",
    },
  ];
  return (
    <div>
        <Slider slides={slides} /><br/>
        <ImageGallery/><br/>
        <Countup/><br/>
    </div>
  )
}

export default Home