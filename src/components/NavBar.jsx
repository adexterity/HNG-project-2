import React, { useState, useEffect } from "react";
import tv from "../assets/tv.png";
import axios from "axios";

const NavBar = () => {
  const [scrolling, setScrolling] = useState(false);
  /* const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]); */

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  /*  const fetchSearchMovies = async () => {
    try {
      const API_KEY = "152cd7ac66bc4131bfa1eec447a9d82d";
      const BASE_URL = "https://api.themoviedb.org/3";
      const apiUrl = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`;
      const request = await axios.get(apiUrl);
      if (request.ok) {
        const data = request;
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    }
  }; */

  /* useEffect(() => {
    if (searchQuery) {
      fetchSearchMovies();
    } else {
      fetchSearchMovies([]);
    }
  }, [searchQuery]);
 */

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
