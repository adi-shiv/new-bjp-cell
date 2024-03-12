import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="pre_footer">
          <div className="quick_links">
            <h4>About Us</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit.
              Repellendus doloremque <br />
              laborum porro accusantium suscipit ea <br /> tempora accusamus
              atque deserunt sint, <br /> cum corporis <br /> tenetur corrupti
              molestias hic <br /> adipisci nihil non quibusdam.
            </p>
          </div>

          <div className="high_school">
            <h4>Address</h4>
            <p>
              <i className="ri-map-pin-2-fill"></i> 100, modi 
              Nagar, Near Solapur , Solapur-413002, Maharashtra.
            </p>
          </div>

          <div className="contact">
            <h4>Contact</h4>
            <p>
              <a href="mailto:vishwalarati@gmail.com">
                <i className="ri-mail-fill"></i>
                engineerscell@gmail.com
              </a>
            </p>
            <p>
              <i className="ri-phone-fill"></i> +91 1234567890
            </p>
            <p>
              <i className="ri-phone-fill"></i> +91 9146099742
            </p>
          </div>

          <div className="quick_links">
            <h4>Quick Links</h4>
            <p>
              <a href="/">Home</a>
            </p>
            <p>
              <a href="/about">About Us</a>
            </p>
            <p>
              <a href="/services">Our Services</a>
            </p>
            <p>
              <a href="/contact">Contact</a>
            </p>
            <p>
              <a href="/career">Career</a>
            </p>
          </div>
        </div>

        <div className="main_footer">
          <p>
            <span id="currentYear"></span>
            BJP engineer's cell, Solapur District,Solapur | All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;