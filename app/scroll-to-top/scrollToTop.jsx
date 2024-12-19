"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import "./scrollToTop.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [borderWidth, setBorderWidth] = useState(0);

  // Show the button when the user scrolls down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const newBorderWidth = Math.min(100, window.scrollY); // Ensure border width doesn't exceed 100%
    setBorderWidth(newBorderWidth);

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-top-top-btn">
      {isVisible && (
        <button onClick={scrollToTop} className="scrollToTopButton">
          <i className="fal fa-long-arrow-up"></i>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
