import React, { useContext, useEffect, useState } from 'react';
import { FavoritesContext } from './FavoritesContext';
import { Card, CardMedia, CardContent, CardActions, Button, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Link } from 'react-router-dom';
import { WatchlistContext } from './WatchlistContext';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const MovieCard = ({ movie }) => {
    const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);
    const [isFavorite, setIsFavorite] = useState(false);
    const { watchlist, addToWatchlist, removeFromWatchlist } = useContext(WatchlistContext);
    const inWatchlist = watchlist.some(watchlistMovie => watchlistMovie.id === movie.id);


    useEffect(() => {
        setIsFavorite(favorites.some(fav => fav.id === movie.id));
    }, [favorites, movie.id]);

    const handleFavoriteClick = () => {
        if (isFavorite) {
            removeFavorite(movie.id);
        } else {
            addFavorite(movie);
        }
    };

    const handleWatchlistClick = () => {
        inWatchlist ? removeFromWatchlist(movie.id) : addToWatchlist(movie
);
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
                <IconButton
                aria-label="add to watchlist"
                onClick={handleWatchlistClick}
                color={inWatchlist ? 'error' : 'inherit'}
            >
                {/* Change icon based on whether the movie is in the watchlist */}
                {inWatchlist ? <PlaylistAddCheckIcon /> : <PlaylistAddIcon />}
            </IconButton>
            </CardActions>
        </Card>
    );
};

export default MovieCard;
