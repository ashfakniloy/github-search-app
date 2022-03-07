import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const buttonVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", buttonVisibility);
    return () => {
      window.removeEventListener("scroll", buttonVisibility);
    };
  }, []);

  return (
    <div>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-5 right-3 p-3 text-lg text-slate-100 bg-gray-600 rounded-full transition-opacity active:bg-gray-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <FaArrowUp />
      </button>
    </div>
  );
}

export default ScrollToTop;
