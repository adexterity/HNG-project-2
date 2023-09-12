import React from "react";

const MovieDetails = () => {
  return (
    <div className="movie-details">
      <div className="movie-image"></div>
      <div className="left-details">
        <div className="movie-header">
          <h2 className="movie-title"></h2>
          <h2 className="movie-release"></h2>
          <h2 className="movie-rating"></h2>
          <h2 className="movie-duration"></h2>
          <h2 className="movie-genre"></h2>
        </div>
        <div className="movie-plot">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            praesentium quidem beatae vero temporibus quia aut atque quis quae
            obcaecati.
          </p>
        </div>
        <div className="movie-cast">
          <div className="movie-director">Director: Joseph Kosinski </div>
          <div className="movie-director">
            Writers:Jim Begley, Robert Downey, Peter Craig
          </div>
          <div className="movie-director">
            Stars: Tom Cruise, Jennifer Lopez
          </div>
        </div>
        <div className="movie-nomination">
          <div className="movie-rating-details">Top rated movie #65</div>
          <div className="movie-awards">Awards 9 nominations</div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
