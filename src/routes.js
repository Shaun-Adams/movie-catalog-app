// Routes.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import MovieCatalog from './MovieCatalog';
import supabase from './supabaseClient'

const Routes = () => {
  const user = supabase.auth.user();

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        {user ? (
          <Route path="/movies" component={MovieCatalog} />
        ) : (
          <Redirect to="/login" />
        )}
      </Switch>
    </Router>
  );
};

export default Routes;
