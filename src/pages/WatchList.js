import React, { useContext } from 'react';
import { WatchlistContext } from '../components/WatchlistContext';
import MovieCard from '../components/MovieCard';
import MovieDetailLayout from '../components/layouts/MovieDetailLayout';
import { Grid } from '@mui/material';
import { Button} from '@mui/material';

const Watchlist = () => {
    const { watchlist, toggleWatched } = useContext(WatchlistContext);

    return (
        <MovieDetailLayout>
            <h1>My Watchlist</h1>
            <Grid container spacing={2}>
                {watchlist.length > 0 ? (
                    watchlist.map((movie) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
                            <div
                                style={{
                                    position: 'relative',
                                    borderRadius: '4px',
                                    padding: '8px',
                                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                    cursor: 'pointer',
                                }}
                            >
                                {movie.watched && (
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: '8px',
                                            right: '8px',
                                            borderRadius: '50%',
                                            width: '24px',
                                            height: '24px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            zIndex: '1',
                                        }}
                                    ></div>
                                )}
                                <MovieCard
                                    key={movie.id}
                                    movie={movie}
                                    style={{ opacity: movie.watched ? 0.7 : 1, zIndex: '0' }}
                                />
                                <Button
                                    onClick={() => toggleWatched(movie.id)}
                                    style={{
                                        position: 'absolute',
                                        top: '8px',
                                        right: '8px',
                                        zIndex: '2',
                                        backgroundColor: movie.watched ? 'green' : 'grey',
                                    }}
                                >
                                    {movie.watched ? (
                                        <span style={{ fontSize: '16px', color: 'white' }}>✓</span>
                                    ) : (
                                        <span style={{ fontSize: '16px', color: 'white' }}>&#9744;</span>
                                    )}
                                </Button>
                            </div>
                        </Grid>
                    ))
                ) : (
                    <p>No movies in your watchlist.</p>
                )}
            </Grid>
        </MovieDetailLayout>
    );
};

export default Watchlist;