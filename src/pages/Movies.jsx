import React, {useEffect, useState} from 'react';


const Movies = () => {

  const API_KEY = '152cd7ac66bc4131bfa1eec447a9d82d';

  const [moviesList, setMoviesList] = useState([])
    /* const moviesList = [
        {title: 'attack on titan', id: 1},
        {title: 'john wick', id: 2},
        {title: 'pirate of the carribeans', id: 3},
        {title: 'ant man and the wasp', id: 1},
        {title: 'deep blue sea', id: 1},
        
    ]; */

    // API request to TMDB
    useEffect(()=>{
      const fetchMovies = async ()=>{
        try{
          const request = await axios.get('https://api.themoviedb.org/3/movie/157336?api_key=152cd7ac66bc4131bfa1eec447a9d82d&append_to_response=videos,images')
          const data = await request;
          console.log(data)
        }
        catch(err){
          console.log(err)
        }
      }
      fetchMovies();
    }, [])


 /* 
 
 useEffect(()=>{
    
    const fetchLyrics = async ()=>{
        try{
            //request for lyrics in musixmatch
            const request =await axios.get(`https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=dd85c85640d196139fd82e7e22b5064a`);
            const data = await request.data.message.body.lyrics.lyrics_body;
            // console.log(request.data.message.body.lyrics.lyrics_body);
            setLyrics(data);

            //request for track details in musixmatch
            const request2 = await axios.get(`https://api.musixmatch.com/ws/1.1/track.get?track_id=${id}&apikey=dd85c85640d196139fd82e7e22b5064a`);
            const data2 = await request2.data.message.body.track;
            setTrack(data2);
            
        }
        catch(err){
            console.log(err)
        }
    }
    fetchLyrics();
 }, [id]);


 */




    const displayMovies = moviesList.map(movies=>{
        return <ul><li>title: {movies.title}</li></ul>;
    })
  return (

    <div>
      {displayMovies}
    </div>
  )
}

export default Movies
