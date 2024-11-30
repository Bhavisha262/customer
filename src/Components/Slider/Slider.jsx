import React, { useState, useEffect } from "react";
import "./Slider.scss";

const Slider = ({ slides, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, interval);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, [currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 0.8s ease-in-out",
        }}
      >
        {slides.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            <div
              className="carousel-image"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
            <div className="carousel-text">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-arrow left" onClick={goToPrev}>
        ❮
      </button>
      <button className="carousel-arrow right" onClick={goToNext}>
        ❯
      </button>
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${
              currentIndex === index ? "active" : ""
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
