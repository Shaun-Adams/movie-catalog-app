// src/components/PrivateRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../services/AuthContext'; // Create this context for auth management

const PrivateRoute = ({children}) => {
  const { currentUser } = useAuth(); // Assuming useAuth provides the current user state
    console.log(currentUser)
  return currentUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
