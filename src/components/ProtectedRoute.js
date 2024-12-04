import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, currentUser, requiredRole }) => {
  if (!currentUser) {
    return <Navigate to="/" replace />;
  }

  if (requiredRole && currentUser.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
