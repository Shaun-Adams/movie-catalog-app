import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../services/movieService';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import YouTube from 'react-youtube';
import MovieCard from '../components/MovieCard';
import MainLayout from '../components/layouts/MainLayout';
import { Grid } from '@mui/material';
import SearchBar from '../components/SearchBar';

function Favorites () {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [favorites, setFavorites] = useState([]);


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

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  const handleSearch = (event) => {
    setQuery(event.target.value); // Update the query state
  };

  if (error) return <div>Error loading movies: {error}</div>;

 return (
    <MainLayout onSearch={handleSearch}>
      <h1>Favorite Movies</h1>
      <Grid container spacing={2}>
        {favorites.length > 0 ? (
          favorites.map(movie => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
              <MovieCard 
                 key={movie.id} movie={movie} />
            </Grid>
          ))
        ) : (
          <div>No movies found</div>
        )}
      </Grid>
    </MainLayout>
  );
}

export default Favorites ;
