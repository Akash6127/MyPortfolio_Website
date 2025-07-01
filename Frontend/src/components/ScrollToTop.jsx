import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../Styles/ScrollToTop.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className={`scroll-to-top ${isVisible ? "show" : ""}`} onClick={scrollToTop}>
      <FaArrowUp className="arrow-icon" />
    </div>
  );
};

export default ScrollToTop;
