import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../services/movieService';
import YouTube from 'react-youtube';


function MovieList() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const movieData = await fetchMovies();
        setMovies(movieData);
        console.log("movie-details " + movieData)
      } catch (err) {
        setError(err.message);
      }
    };

    loadMovies();
  }, []);

  if (error) return <div>Error loading movies: {error}</div>;

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
        {movies
        .map(movie => (
          <li key={movie.id}>
            {movie.title},
            {/* {movie.release_date},
            {movie.overview},
            {movie.vote_average},
            {movie.vote_count},
            {movie.popularity}, */}
            {/* {movie.poster_path}, */}
            {/* {movie.original_language},
            {movie.original_title},
            {movie.backdrop_path}, */}
            {/* {movie.adult},
            {movie.video},
            {movie.genre_ids},
            {movie.media_type}, */}
            {/* {movie.name}, */}
            {/* {movie.first_air_date},
            {movie.origin_country},
            {movie.original_name},
            {movie.profile_path},
            {movie.known_for},
            {movie.known_for_department}, */}
            {/* <button onClick={()=>handleClick(movie)}>Details</button> */}
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
            {/* <iframe src={`https://video.tmdb.org/t/p/w500${movie.video}`} alt={movie.title} > </iframe> */}
            {/* <YouTube videoId={movie.video}></YouTube> */}
          </li>
        ))
        }
      </ul>
    </div>
  );
}

export default MovieList;
