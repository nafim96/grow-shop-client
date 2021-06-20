import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import testImage from "../../../image.config";

const Carousel = () => {
  return (
    <OwlCarousel className="owl-theme" items="3" autoplay dots loop margin={10}>
      {testImage.map((pic) => (
        <div class="item">
          <img src={pic.pic} alt="" />
        </div>
      ))}
    </OwlCarousel>
  );
};

export default Carousel;
