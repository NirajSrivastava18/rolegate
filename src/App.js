import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './pages/Dashboard';
import RoleTable from './components/RoleTable';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  // Retrieve the current user from localStorage on app load
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setCurrentUser={setCurrentUser} />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute currentUser={currentUser}>
              <Dashboard currentUser={currentUser} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute currentUser={currentUser} requiredRole="Admin">
              <RoleTable users={[]} currentUser={currentUser} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/editor"
          element={
            <ProtectedRoute currentUser={currentUser} requiredRole="Editor">
              <RoleTable users={[]} currentUser={currentUser} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/viewer"
          element={
            <ProtectedRoute currentUser={currentUser} requiredRole="Viewer">
              <RoleTable users={[]} currentUser={currentUser} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
