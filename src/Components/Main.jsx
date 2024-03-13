import React from "react";


function Main() {
  return (
    <div className="whychooseus_container">
      <div
        className="whychooseus_heading"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        <h1>What we do?</h1>
      </div>

      <div className="whychooseus_content">
        <div
          className="whychooseus_content_icon"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          {/* <i class="fa-solid fa-code"></i> */}
        </div>
        <div
          className="whychooseus_content_text"
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quis,
            incidunt repellat dicta quibusdam repudiandae eligendi, et mollitia
            laudantium magnam id. Aliquid animi obcaecati maiores, itaque
            doloremque ex aperiam sapiente earum iure ad voluptas natus
            aspernatur, libero accusamus totam dolor.
          </p>
        </div>
      </div>

      <div className="whychooseus_content">
        <div
          className="whychooseus_content_icon"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          {/* <i class="fa-solid fa-person-chalkboard"></i> */}
        </div>
        <div
          className="whychooseus_content_text"
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          <h3>Lorem ipsum dolor sit amet </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
            corporis dicta, facere iste sequi mollitia eveniet unde provident
            laudantium facilis. Quo temporibus voluptate facere explicabo, earum
            nobis cupiditate laudantium, modi dolorem necessitatibus corporis.
            Quasi laborum, deserunt totam deleniti laudantium impedit.
          </p>
        </div>
      </div>

      <div
        className="read_more_btn"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
       
        {/* <button className="ReadMore">Read More</button> */}
      </div>
    </div>
  );
}

export default Main;