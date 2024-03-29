import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../services/movieService';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import MovieCard from '../components/MovieCard';
import MainLayout from '../components/layouts/MainLayout';
import { Grid } from '@mui/material';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');


  useEffect(() => {
    const loadMovies = async () => {
      try {
        const movieData = await fetchMovies(query);
        setMovies(movieData);
      } catch (err) {
        setError(err.message);
      }
    };

    if (query.length === 0 || query.length > 2) {
      loadMovies();
    }
  }, [query]);

  const handleSearch = (event) => {
    setQuery(event.target.value); 
  };

  if (error) return <div>Error loading movies: {error}</div>;

 return (
    <MainLayout onSearch={handleSearch}>
      <h1>Movies</h1>
      <Grid container spacing={2}>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
              <MovieCard movie={movie} />
            </Grid>
          ))
        ) : (
          <div>No movies found</div>
        )}
      </Grid>
    </MainLayout>
  );
}

export default MovieList;
