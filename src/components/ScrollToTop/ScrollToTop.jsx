import React, { useEffect, useState } from "react";
import "./ScrollToTop.css";
const ScrollToTop = () => {
  //   For the component to appear we need to add state to keep track if we have scrolled down by 500px
  const [show, setShow] = useState(false);
  useEffect(() => {
    const checkScrollTop = () => {
      if (!show && window.scrollY > 500) {
        setShow(true);
      } else if (show && window.scrollY <= 500) {
        setShow(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [show]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // console.log(show); //This is working that means the component is getting called.
  return (
    show && (
      <button
        title="scroll to top"
        onClick={scrollToTop}
        className={`app__scrollToTop ${show ? "show" : ""}`}
      >
        ↑
      </button>
    )
  );
};

export default ScrollToTop;
