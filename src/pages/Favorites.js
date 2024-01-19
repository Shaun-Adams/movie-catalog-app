import React, { useState, useContext  } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import MovieCard from '../components/MovieCard';
import { FavoritesContext } from '../components/FavoritesContext';
import MovieDetailLayout from '../components/layouts/MovieDetailLayout';
import { Grid } from '@mui/material';

function Favorites () {
  const [error, setError] = useState(null);
  const { favorites } = useContext(FavoritesContext);


  if (error) return <div>Error loading movies: {error}</div>;

 return (
    <MovieDetailLayout>
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
          <p>No favorite movies added yet.</p>
        )}
      </Grid>
    </MovieDetailLayout>
  );
}

export default Favorites ;
