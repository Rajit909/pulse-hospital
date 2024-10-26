// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../../auth';

const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/admin/signin" />;
};

export default ProtectedRoute;
