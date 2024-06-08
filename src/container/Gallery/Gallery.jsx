import React, { useRef } from "react";

import "./Gallery.css";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { SubHeading } from "../../components";
import { images } from "../../constants";
const Gallery = () => {
  const scrollRef = useRef(null);

  // Implemnet the scroll function to scorll the gallery images in the left or right direction.
  const scroll = (direction) => {
    // const { current } = scrollRef;
    // if (direction === "left") {
    //   current.scrollLeft -= 300;
    // } else {
    //   current.scrollLeft += 300;
    // }
    const { current } = scrollRef;
    if (direction === "left") {
      if (current.scrollLeft <= 0) {
        // If at the start of the list
        current.scrollLeft = current.scrollWidth; // Go to the end
      } else {
        current.scrollLeft -= 300;
      }
    } else {
      if (current.scrollLeft >= current.scrollWidth - current.offsetWidth) {
        // If at the end of the list
        current.scrollLeft = 0; // Go to the start
      } else {
        current.scrollLeft += 300;
      }
    }
  };

  const galleryImages = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
    images.gallery05,
    images.gallery06,
    images.gallery07,
  ];
  return (
    <div className="app__gallery flex__center">
      {/* Here we will be having two divs. First one will be the heading and some para content. The second div
    will be having the scrollable galary. */}
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#AAA" }}>
          Welcome to our Photo Gallery! Here, you’ll find a visual feast that
          showcases the vibrant atmosphere, exquisite dishes, and memorable
          moments.Each image tells a story of our culinary journey, inviting you
          to experience the magic of our restaurant. Enjoy the tour!
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>

      <div className="app__gallery-images">
        {/* Here we will have 3 divs. The first div contains the actual images and the second div in here
      will contain the actual buttons to move the image left and right. */}
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="gallery" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
