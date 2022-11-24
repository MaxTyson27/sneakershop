import React from 'react';
import cl from './MainSlider.module.sass';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SliderItem from './SliderItem';


const MainSlider = (props) => {

  const settings = {
    dots: false,
    fade: true,
    speed: 1000,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className={cl.inner}>
      <Slider {...settings}>
        <SliderItem/>
        <SliderItem/>
      </Slider>
    </div>
  );
}

export default MainSlider;
