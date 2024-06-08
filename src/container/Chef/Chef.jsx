import React from "react";

import "./Chef.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";
const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What we Belive In</h1>
      <div className="app__chef-content">
        <div className="app__chef-quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">Welcome to our culinary journey</p>
        </div>
        <p className="p__opensans">
          As the head chef, I’m committed to bringing you dishes that are both
          innovative and rooted in tradition. Our menu is a testament to our
          love for fine ingredients and authentic flavors. Join us, and let’s
          celebrate the joy of dining together.
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
