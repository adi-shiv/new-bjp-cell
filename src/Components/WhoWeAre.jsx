import React from "react";
import WhoWeAreImg from "../images/images/download.jpg";
// import { Link } from "react-router-dom";

function WhoWeAre() {
  return (
    <div className="whoweare_container">
      <div className="whoweare_content">
        <h1 data-aos="fade-in" data-aos-duration="1000">
          Who We Are?
        </h1>
        <p data-aos="fade-in" data-aos-duration="2000">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quisquam
          sunt doloremque odio, quod corrupti accusantium tempora soluta dicta
          vero totam incidunt exercitationem perspiciatis voluptatem veniam,
          asperiores iusto consectetur expedita similique. Eos recusandae nemo
          sequi aliquam hic id nulla? Vel quo corrupti esse beatae earum unde
          eius molestiae praesentium perspiciatis vero facilis est obcaecati,
          hic et quasi architecto? Fugiat, voluptatibus.
        </p>
        <div
          className="know_more_btn"
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          {/* <Link to="/about">Know More</Link> */}
          {/* <button className="know-btn">know more</button> */}
        </div>
      </div>

      <div
        className="whoweare_image"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        <img src={WhoWeAreImg} alt="" />
      </div>
    </div>
  );
}

export default WhoWeAre;