import React from "react";
// import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="pre_footer">
          <div className="quick_links">
            <h4>About Us</h4>
            <p>
              Lorem ipsum dolor, sit amet
              <br /> consectetur adipisicing elit. <br />
              Repellendus doloremque <br />
              laborum porro accusantium <br /> suscipit ea tempora accusamus{" "}
              <br />
              atque deserunt sint, <br /> cum corporis <br /> tenetur corrupti
              molestias hic <br /> adipisci nihil non quibusdam.
            </p>
          </div>

          <div className="high_school">
            <h4>Address</h4>
            <p>
              <i className="ri-map-pin-2-fill"></i>100, modi Nagar, Near Solapur
              , Solapur-413002, Maharashtra.
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

          <div className="quick">
            <h4>Stay Connect</h4>
            <form>
              <input type="email" placeholder="Email address" required />
              <br /> <br />
              <button id="tn">Submit</button>
            </form>

            <div className="socials">
              <a href="/">
                <i class="ri-twitter-x-line"></i>
              </a>
              <a href="/">
                <i class="ri-whatsapp-fill"></i>
              </a>
              <a href="/">
                <i class="ri-instagram-fill"></i>
              </a>
             
            </div>
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
