import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel1 from '../images/images/shivaji (2) (1).jpg';
import Carousel2 from '../images/images/H20240112149561 (1).jpg';
import Carousel3 from '../images/images/H202401121496067.jpg';
import React from 'react'

function HeroCarousel() {
  return (
    <Carousel fade>
    <Carousel.Item interval={2500}>
      <img className="d-block w-100 hero" src={Carousel1} alt="First slide" />
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img className="d-block w-100 hero" src={Carousel2} alt="Second slide" />
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img className="d-block w-100 hero" src={Carousel3} alt="Third slide" />
    </Carousel.Item>
  </Carousel>
  )
}

export default HeroCarousel