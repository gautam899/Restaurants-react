import React from "react";
import { SubHeading, MenuItem } from "../../components";
import "./SpecialMenu.css";
import { images, data } from "../../constants";
const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    {/* A div to contain all of our  title and subtitle*/}
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>
    {/* Actual menu div */}
    <div className="app__specialMenu-menu">
      {/* left side */}
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Wine & Beer</p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>

      {/* image div */}
      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menuimg" />
      </div>

      {/* Right side div */}
      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>

    {/* One button */}
    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
