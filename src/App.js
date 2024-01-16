import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
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
      </Routes>
    </Router>
  );
}

export default App;
