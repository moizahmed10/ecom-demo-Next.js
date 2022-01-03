import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerCard from "./BannerCard";

const Banner = () => {
  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <BannerCard
            imageUrl="/banner1.jpg"
            title="Womens Summer Collection 2021"
            slug="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore "
            catagory="women's clothing"
          />
        </div>
        <div>
          <BannerCard
            imageUrl="/banner2.jpg"
            title="Mens Summer Collection 2021"
            slug="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore "
            catagory="men's clothing"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
