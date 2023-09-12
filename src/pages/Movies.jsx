import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";

const Movies = () => {
  const API_KEY = "152cd7ac66bc4131bfa1eec447a9d82d";
  const BASE_URL = "https://api.themoviedb.org/3";
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  // moviesList will be populated with the response from the API
  const [moviesList, setMoviesList] = useState([]);
  // console.log(moviesList);

  // API request to TMDB when the component first render
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const request = await axios.get(
          `${BASE_URL}/discover/movie?api_key=${API_KEY}`
        );
        const data = request.data.results;
        console.log(data);
        setMoviesList(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMovies();
  }, []);

  let displayMovies;

  // display spinner while waiting to get data from the API
  if (moviesList === undefined || moviesList.length < 1) {
    return <Spinner />;
  } else {
    displayMovies = moviesList.map((movies) => {
      return (
        <li className="border col-span-1 mb-4 row-span-1" key={movies.id}>
          <div className="card">
            <div className="poster">
              <img src={`${IMAGE_BASE_URL}${movies.poster_path}`} />
            </div>

            <h3 className="title font-semibold">{movies.title}</h3>
            <div className="rating"></div>
            <div className="genre"></div>
          </div>
        </li>
      );
    });
  }
  return (
    <div className="container pt-7">
      <div className="flex justify-between pt-3 pb-7">
        <h2 className="text-[30px] font-bold">Featured Movie</h2>
        <p className="text-[#BE123C]">
          <a href="#">See more</a> <span>&gt;</span>
        </p>
      </div>
      <ul className="grid grid-cols-5 grid-rows-2 gap-4">{displayMovies}</ul>
    </div>
  );
};

export default Movies;
