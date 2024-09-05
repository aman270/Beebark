import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style/ScrollableCards.css'; // Your custom CSS file

const ScrollableCards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust based on your design
    slidesToScroll: 1,
  };

  const imageUrls = [
    'https://unsplash.com/photos/a-white-house-with-a-red-tiled-roof-o-nn2Mn4Jlg',
    'https://unsplash.com/photos/a-bench-in-front-of-a-wooden-house-0vYWZFQ43Bc',
    'https://unsplash.com/photos/a-bench-in-front-of-a-wooden-house-0vYWZFQ43Bc',
    // Add more URLs as needed
  ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {imageUrls.map((url, index) => (
          <div key={index}>
            <img src={url} alt={`House Design ${index + 1}`} />
            <p>Design {index + 1}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ScrollableCards;
