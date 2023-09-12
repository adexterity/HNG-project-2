import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import HomePage from "./pages/HomePage";
import MovieDetails from "./pages/MovieDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movieDetails" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
