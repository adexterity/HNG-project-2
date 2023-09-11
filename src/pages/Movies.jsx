import React from 'react'

const Movies = () => {
    const moviesList = [
        'attack on titan',
        'john wick',
        'pirate of the carribeans',
        'ant man and the wasp',
        'deep blue sea'
    ];

    const displayMovies = moviesList.map(movies=>{
        return <ul><li>{movies}</li></ul>;
    })
  return (

    <div>
      {displayMovies}
    </div>
  )
}

export default Movies
