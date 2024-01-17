// MovieCard.jsx
import React, { useState, useEffect  } from 'react';
import { Card, CardMedia, CardContent, CardActions, Button, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setIsFavorite(favorites.some(fav => fav.id === movie.id));
    }, [movie.id]);

    const handleFavoriteClick = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        if (isFavorite) {
            const newFavorites = favorites.filter(fav => fav.id !== movie.id);
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
        } else {
            localStorage.setItem('favorites', JSON.stringify([...favorites, movie]));
        }
        setIsFavorite(!isFavorite);
    };

    return (
        <Card
            raised
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                    cursor: 'pointer',
                    transform: 'translateY(-5px)',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                },
                transition: 'transform 0.3s, background-color 0.3s',
            }}
        >
            <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
                <CardMedia
                    component="img"
                    sx={{
                        height: "100%",
                        objectFit: "contain",
                        filter: !isFavorite ? 'grayscale(25%)' : 'none',
                    }}
                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                />
            </Link>
            <CardContent sx={{ fontFamily: 'Arial', fontWeight: 'bold', color: isFavorite ? 'red' : 'inherit' }}>
                {movie.title}
            </CardContent>
            <CardActions>
                <IconButton
                    aria-label="add to favorites"
                    onClick={handleFavoriteClick}
                    color={isFavorite ? 'error' : 'inherit'}
                >
                    <FavoriteIcon />
                </IconButton>
                <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
                    <Button
                        size="small"
                        color="primary"
                        sx={{
                            fontWeight: 'bold',
                            color: 'orange',
                            fontFamily: 'Arial',
                        }}
                    >
                        Details
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
};

export default MovieCard;
