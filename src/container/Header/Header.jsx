import React from "react";

import "./Header.css";
import images from "../../constants/images";
import { Link } from "react-scroll";
import { SubHeading } from "../../components";
const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Where culinary passion meets the comfort of home. A destination where
        you can escape from the ordinary and dive into the extraordinary.
      </p>
      <Link to="menu" smooth={true} className="custom__button">
        Explore Menu
      </Link>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="" />
    </div>
  </div>
);

export default Header;
