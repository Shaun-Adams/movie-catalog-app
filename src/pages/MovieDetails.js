// MovieDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from '../services/movieService'; // Assume you create this function
import MovieDetailLayout from '../components/layouts/MovieDetailLayout';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const loadMovieDetails = async () => {
      try {
        const movieData = await fetchMovieById(id);
        setMovie(movieData);
      } catch (err) {
        setError(err.message);
      }
    };

    loadMovieDetails();
  }, [id]);

  if (error) return <div>Error loading movie details: {error}</div>;
  if (!movie) return <div>Loading...</div>;

  return <MovieDetailLayout movie={movie} />;
}

export default MovieDetails;
