// MovieCard.jsx
import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Button, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <Card raised sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        sx={{ height: 330 }}
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Button size="small" color="primary" onClick={handleDetailsClick}>
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
