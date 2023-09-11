import React from 'react'

const Movies = () => {
    const moviesList = [
        {title: 'attack on titan', id: 1},
        {title: 'john wick', id: 2},
        {title: 'pirate of the carribeans', id: 3},
        {title: 'ant man and the wasp', id: 1},
        {title: 'deep blue sea', id: 1},
        
    ];

    const displayMovies = moviesList.map(movies=>{
        return <ul><li>title: {movies.title} <br></br></li></ul>;
    })
  return (

    <div>
      {displayMovies}
    </div>
  )
}

export default Movies
