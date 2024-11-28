import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import { jwtDecode } from 'jwt-decode';

// Utility function to check authentication and roles
const getAuthToken = () => localStorage.getItem('authToken');
const getRoleFromToken = () => {
  const token = getAuthToken();
  if (!token) return null;
  try {
    const decoded = jwtDecode(token);
    return decoded.role; // Assumes the token has a "role" field
  } catch (error) {
    return null;
  }
};

const App = () => {
  const isAuthenticated = !!getAuthToken();

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Login Route */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              getRoleFromToken() === 'admin' ? (
                <Navigate to="/admin" />
              ) : (
                <Navigate to="/user" />
              )
            ) : (
              <Login />
            )
          }
        />

        {/* Admin Dashboard Route */}
        <Route
          path="/admin"
          element={
            isAuthenticated && getRoleFromToken() === 'admin' ? (
              <AdminDashboard />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* User Dashboard Route */}
        <Route
          path="/user"
          element={
            isAuthenticated && getRoleFromToken() === 'user' ? (
              <UserDashboard />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* Catch-all Route for 404 */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
