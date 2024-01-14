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
        <Route path="/movies" element={ <PrivateRoute>       <MovieList />    </PrivateRoute>   }/>

        {/* </Route> */}
        {/* <Route path="/movies" element={<PrivateRoute />}>
          <Route path="" element={<MovieList />} />
          <Route path=":id" element={<MovieDetails />} /> */}
        {/* </Route> */}

      </Routes>
    </Router>
  );
}

export default App;
