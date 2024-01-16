// src/components/PrivateRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../services/AuthContext'; // Ensure you have this context

const PrivateRoute = ({children}) => {
  const { currentUser } = useAuth(); // Assuming useAuth provides the current user
  return currentUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
