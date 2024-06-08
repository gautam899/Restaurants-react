import React from "react";

import "./AboutUs.css";
import { images } from "../../constants";
const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about spoon" className="spoon__img" />
        <p className="p__opensans">
          Our dishes, crafted with love and served with warmth, transport you on
          a gastronomic journey. Join us for an unforgettable dining experience
          that delights the senses and nourishes the soul.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      {/* The knife in between */}
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="knife" />
      </div>

      {/* The our history column */}
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about spoon" className="spoon__img" />
        <p className="p__opensans">
          We are born out of a love for authentic flavors and a passion for
          culinary excellence. Our journey is a testament to our commitment to
          bringing you the finest from our kitchen.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
