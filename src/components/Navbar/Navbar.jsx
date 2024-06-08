import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";

import "./Navbar.css";

const Navbar = () => {
  //Now we create a state to toggle the hamburger menu
  const [toggleMenu, setToggleMenu] = useState(false);

  // We want the navbar to reappear when we scroll down the screen by 500px.
  const [scrolled, setScrolled] = useState(false); //if we havescorlled 500px down the scree.

  // Add a side effect in which we will add a event listner to the scroll state.
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 500; //True or false
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      //cleanup
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  return (
    <>
      <nav className={`app__navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="app__navbar-logo">
          <img src={images.gericht} alt="app__logo" />
        </div>
        <ul className="app__navbar-links">
          <li className="p__opensans">
            <a href="#home">Home</a>
          </li>
          <li className="p__opensans">
            <a href="#about">About</a>
          </li>
          <li className="p__opensans">
            <a href="#menu">Menu</a>
          </li>
          <li className="p__opensans">
            <a href="#awards">Awards</a>
          </li>
          <li className="p__opensans">
            <a href="#contacts">Contact</a>
          </li>
        </ul>
        <div className="app__navbar-login">
          <a href="#login" className="p__opensans">
            Log In / Register
          </a>
          <div />
          <a href="#book" className="p__opensans">
            Book Table
          </a>
        </div>
        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu
            color="#fff"
            fontSize={27}
            onClick={() => setToggleMenu(true)}
            className="app__hamburger"
          />
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu
                fontSize={27}
                className="overlay__close"
                onClick={() => setToggleMenu(false)}
              />
              <ul className="app__navbar-smallscreen_links">
                <li className="p__opensans">
                  <a href="#home">Home</a>
                </li>
                <li className="p__opensans">
                  <a href="#about">About</a>
                </li>
                <li className="p__opensans">
                  <a href="#menu">Menu</a>
                </li>
                <li className="p__opensans">
                  <a href="#awards">Awards</a>
                </li>
                <li className="p__opensans">
                  <a href="#contacts">Contact</a>
                </li>
                <li className="p__opensans">
                  <a href="#login">Login/Register</a>
                </li>
                <li className="p__opensans">
                  <a href="#book">Book-Table</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
