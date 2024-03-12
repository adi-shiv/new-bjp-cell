import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel1 from '../images/images/Honble Union Home.jpg';
import Carousel2 from '../images/images/know_the_pm (1).jpg';
import Carousel3 from '../images/images/group (2).jpg';
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