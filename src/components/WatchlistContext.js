import React, { createContext, useState, useEffect } from 'react';

export const WatchlistContext = createContext({
  watchlist: [],
  addToWatchlist: () => {},
  removeFromWatchlist: () => {},
 
toggleWatched: () => {}
});

export const WatchlistProvider = ({ children }) => {
const [watchlist, setWatchlist] = useState([]);

useEffect(() => {
const storedWatchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
setWatchlist(storedWatchlist);
}, []);

const addToWatchlist = movie => {
const updatedWatchlist = [...watchlist, { ...movie, watched: false }];
localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
setWatchlist(updatedWatchlist);
};

const removeFromWatchlist = movieId => {
const updatedWatchlist = watchlist.filter(movie => movie.id !== movieId);
localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
setWatchlist(updatedWatchlist);
};

const toggleWatched = movieId => {
const updatedWatchlist = watchlist.map(movie =>
movie.id === movieId ? { ...movie, watched: !movie.watched } : movie
);
localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
setWatchlist(updatedWatchlist);
};

return (
<WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist, toggleWatched }}>
{children}
</WatchlistContext.Provider>
);
};