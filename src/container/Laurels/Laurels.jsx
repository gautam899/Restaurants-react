import React from "react";

import "./Laurels.css";
import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";
const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-cards">
    <img src={imgUrl} alt="award" />
    <div className="app__laurels_awards-cards_content">
      <p className="p__cormorant" style={{ color: "#dcca87" }}>
        {title}
      </p>
      <p className="p__cormorant">{subtitle}</p>
    </div>
  </div>
);
const Laurels = () => (
  <div className="app__bg app__bg_parent app__wrapper section__padding" id="awards">
    <div className="app__logo_img">
      <img src={images.logo} alt="logo" />
    </div>
    <div className="app__wrapper_info">
      {/* This is the left side of our page */}
      <SubHeading title="Awards and Recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>

      <div className="app__laurels_awards">
        {data.awards.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>
    <div className="app__wrapper_img">
      {/* This is the right side of our section which will contain our image */}
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
