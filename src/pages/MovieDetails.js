import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetailLayout from '../components/layouts/MovieDetailLayout';
import { fetchMovieById, fetchMovieTrailerById } from '../services/movieService';
import DetailsGrid from '../components/layouts/DetailsGrid'; 

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [movieTrailer, setMovieTrailer] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovieDetails = async () => {
      try {
        const movieData = await fetchMovieById(id);
        setMovie(movieData);
        console.log(movieData)
        const trailerId = await fetchMovieTrailerById(id);
        setMovieTrailer(trailerId);
      } catch (err) {
        setError(err.message);
      }
    };

    loadMovieDetails();
  }, [id]);

  if (error) return <div>Error loading movie details: {error}</div>;
  if (!movie) return <div>Loading...</div>;

  return (
    <MovieDetailLayout>
      <DetailsGrid videoId={movieTrailer} movieDetails={movie} />
    </MovieDetailLayout>
  );
}

export default MovieDetails;
