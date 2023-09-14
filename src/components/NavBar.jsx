import React, { useState, useEffect } from "react";
import tv from "../assets/tv.png";

const NavBar = () => {
  const [scrolling, setScrolling] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`py-3 fixed  w-full text-white z-10 ${
        scrolling ? "bg-black" : "bg-none"
      }`}
    >
      <ul className="flex justify-between items-center container">
        <li className="flex items-center">
          <span className="inline-block md:mr-5">
            <img src={tv} alt="tv icon" className="h-10 max-w-10" />
          </span>
          <span className="hidden md:block">Movie Box</span>
        </li>
        <li className="relative">
          <input
            type="search"
            placeholder="what do you want to watch?"
            className=" px-2 md:px-5 py-1 md:py-3 w-[200px] md:w-[500px] lg:w-[550px] bg-transparent border-2 border-white rounded-lg text-[10px] sm:text-lg"
          />
          <span className="absolute top-[10%] sm:top-[10px] right-3">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </li>
        <li className=" md:flex items-center">
          <span className="hidden md:block">Sign in</span>
          <span className="w-10 h-10 rounded-full bg-[#BE123C] md:ml-5 flex items-center justify-center">
            <i className="fa-solid fa-equals text-[25px] text-white"></i>
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
