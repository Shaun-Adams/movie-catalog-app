import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import WatchList from './pages/WatchList';
import PrivateRoute from './components/PrivateRoute';
import Favorites from './pages/Favorites';
import { FavoritesProvider } from './components/FavoritesContext';
import { WatchlistProvider } from './components/WatchlistContext';

function App() {
  return (
    <WatchlistProvider>
    <FavoritesProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/movies" element={ 
          <PrivateRoute>       
            <MovieList />
          </PrivateRoute>   
        }/>
        <Route path="/movie/:id" element={
          <PrivateRoute>
            <MovieDetails />
          </PrivateRoute>
        }/>
        <Route path="/favorites" element={ 
          <PrivateRoute>       
            <Favorites />
          </PrivateRoute>   
        }/>
        <Route path="/watchlist" element={ 
          <PrivateRoute>       
            <WatchList />
          </PrivateRoute>   
        }/>
      </Routes>
    </Router>
    </FavoritesProvider>
    </WatchlistProvider>
  );
}

export default App;
