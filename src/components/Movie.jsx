import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ movie, url }) => {
  //   console.log(movie);

  const releaseDate = movie.release_date.split("-");

  const handleClick = () => {
    console.log(movie.id);
  };

  return (
    <Link
      to={{
        pathname: `movies/${movie.id}`,
      }}
    >
      <li
        className="border col-span-1 mb-4 row-span-1"
        data-testid="movie-card"
        key={movie.id}
        onClick={() => handleClick()}
      >
        <div className="poster" data-testid="movie-poster">
          <img src={`${url}${movie.poster_path}`} />
        </div>
        <p className=" font-light text-[12px] my-2">USA, {releaseDate[0]}</p>
        <h3 className="title font-semibold" data-testid="movie-title">
          {movie.title}
        </h3>
        <div className="genre"></div>
      </li>
    </Link>
  );
};

export default Movie;
