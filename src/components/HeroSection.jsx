import React from "react";
import Poster from "../assets/Poster.png";

const HeroSection = () => {
  return (
    <div
      className=" flex items-center bg-hero-poster bg-center bg-cover h-[70vh] text-white"
      style={{ backgroundImage: `url(${Poster})` }}
    >
      <div className="hero-text container">
        <h1 className="w-[300px] text-[45px] font-[700]">
          John Wick 3: <br /> Parabellum
        </h1>
        <div className="rating"></div>
        <p className="hero-sub-text w-[400px] my-4">
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>
        <button className="bg-[#BE123C] px-10 py-3 text-xl rounded-xl">
          <span className="play-icon">
            <i className="fa-solid fa-circle-play mr-4"></i>
          </span>{" "}
          WATCH TRAILER
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
