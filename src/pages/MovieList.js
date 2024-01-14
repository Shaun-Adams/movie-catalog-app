import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../services/movieService';


function MovieList() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const movieData = await fetchMovies();
        setMovies(movieData);
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
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
