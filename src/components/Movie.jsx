import React, { useState } from "react";
import heart from "../assets/heart.svg";
import heart2 from "../assets/heart2.svg";
import { Link } from "react-router-dom";

const Movie = ({ movie, url }) => {
  //   console.log(movie);
  const [isFav, setIsFav] = useState(false);

  const toggleIsFav = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFav(!isFav);
  };

  // const releaseDate = movie.release_date.split("-");

  /* const handleClick = () => {
    console.log(movie.id);
  }; */

  return (
    <li
      className="border col-span-1 mb-4 row-span-1 min-w-full"
      data-testid="movie-card"
      key={movie.id}
    >
      <Link to={`/movies/${movie.id}`} className="relative">
        <div
          className="heart bg-slate-100 w-8 h-8 rounded-full absolute top-2 right-2 flex justify-center items-center"
          onClick={toggleIsFav}
        >
          <img src={isFav ? heart : heart2} className="h-6 " alt="favourite" />
        </div>
        <img src={`${url}${movie.poster_path}`} data-testid="movie-poster" />
        <p
          className=" font-light text-[12px] my-2"
          data-testid="movie-release-date"
        >
          {movie.release_date}
        </p>
        <h3 className="title font-semibold" data-testid="movie-title">
          {movie.title}
        </h3>
        <div className="genre"></div>
      </Link>
    </li>
  );
};

export default Movie;
