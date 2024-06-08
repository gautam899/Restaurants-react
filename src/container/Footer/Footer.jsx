import React from "react";

import "./Footer.css";
import { images } from "../../constants";
import { FooterOverlay, Newsletter } from "../../components";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
const Footer = () => (
  <div className="app__footer section__padding" id="contacts">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">B-2 Civil Lines Behind D.C Residence</p>
        <p className="p__opensans">+1234567890</p>
        <p className="p__opensans">+1234567890</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="logo" />
        <p className="p__opensans">
          The best way to find your self is to loose youself in the service of
          others
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon_img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
        </div>
      </div>
      <div className="app__footer-links_work">
        {/* Working Hours */}
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am-12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am-11:00 am</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2024 Bhavya. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
