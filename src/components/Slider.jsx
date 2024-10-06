// components/Slider.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from '/img1.jpg'; // Image imports
import img2 from '/img2.jpg';
import img3 from '/img3.webp';

const SliderSection = () => {
  const settings = {
    dots: true, // Enable dots navigation
    infinite: true, // Loop the slides
    speed: 1000, // Transition speed in milliseconds
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 3000, // Change slide every 3 seconds
    cssEase: "ease-in-out", // Add smooth transition effect
    arrows: false, // Hide navigation arrows
    pauseOnHover: false, // Disable pausing on hover
  };

  return (
    <div className="h-screen bg-background">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="h-screen flex justify-center items-center">
          <img src={img1} alt="Slide 1" className="object-cover h-full w-full" />
        </div>

        {/* Slide 2 */}
        <div className="h-screen flex justify-center items-center">
          <img src={img2} alt="Slide 2" className="object-cover h-full w-full" />
        </div>

        {/* Slide 3 */}
        <div className="h-screen flex justify-center items-center">
          <img src={img3} alt="Slide 3" className="object-cover h-full w-full" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderSection;
