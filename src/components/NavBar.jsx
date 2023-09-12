import React from "react";
import tv from "../assets/tv.png";

const NavBar = () => {
  return (
    <nav className=" mt-5 bg-none fixed w-full text-white">
      <ul className="flex justify-between items-center container">
        <li className="flex items-center">
          <span className="inline-block mr-5">
            <img src={tv} alt="tv icon" />
          </span>
          Movie Box
        </li>
        <li className="relative">
          <input
            type="search"
            placeholder="what do you want to watch?"
            className="px-5 py-3 w-[550px] bg-transparent border-2 border-white rounded-lg"
          />
          <span className="absolute top-[10px] right-3">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </li>
        <li className="flex items-center">
          Sign in
          <span className="w-10 h-10 rounded-full bg-[#BE123C] ml-5 flex items-center justify-center">
            <i className="fa-solid fa-equals text-[25px] text-white"></i>
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
