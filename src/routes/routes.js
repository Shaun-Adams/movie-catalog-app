// routes/Routes.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
// import Layout from '../pages/common/Layout';
import Home from '../pages/Home.js';
import Login from '../pages/Login';
import Register from '../pages/Register';
import MovieCatalog from '../pages/MovieList.js';
import { supabase } from '../services/supabaseClient';


const PrivateRoute = ({ element: Element, ...rest }) => {
  const user = supabase.auth.user();
  return (
    <Route
      {...rest}
      element={user ? Element : <Navigate to="/login" />}
    />
  );
};

const routes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <PrivateRoute path="/movies" element={<MovieCatalog />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default routes;
