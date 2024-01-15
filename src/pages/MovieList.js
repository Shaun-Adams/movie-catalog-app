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
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
            {/* <YouTube videoId={movie.video}></YouTube> */}
          </li>
        ))
        }
      </ul>
    </div>
  );
}

export default MovieList;
