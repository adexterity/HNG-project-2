import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import Movie from "./Movie";

const Movies = () => {
  const API_KEY = "152cd7ac66bc4131bfa1eec447a9d82d";
  const BASE_URL = "https://api.themoviedb.org/3";
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  // moviesList will be populated with the response from the API
  const [moviesList, setMoviesList] = useState([]);

  // API request to TMDB when the component first render
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const request = await axios.get(
          `${BASE_URL}/movie/popular?api_key=${API_KEY}`
        );
        if (request.status === 200) {
          const data = request.data.results;
          // console.log(data);
          setMoviesList(data);
        } else {
          throw new Error("Request failed with status: " + response.status);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchMovies();
  }, []);

  const displayMoviesUI = () => {
    const moviesListSelected = moviesList.slice(0, 10);

    if (moviesList === undefined || moviesList.length < 1) {
      return <Spinner />;
    } else {
      return moviesListSelected.map((movie, index) => {
        return <Movie movie={movie} url={IMAGE_BASE_URL} key={index} />;
      });
    }
  };

  return (
    <div className="container pt-7">
      <div className="flex justify-between items-center pt-3 pb-7">
        <h2 className="text-[20px] sm:text-[30px] font-bold">Featured Movie</h2>
        <p className="text-[#BE123C]">
          <a href="#">See more</a> <span>&gt;</span>
        </p>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 grid-rows-2 gap-4">
        {displayMoviesUI()}
      </ul>
    </div>
  );
};

export default Movies;
