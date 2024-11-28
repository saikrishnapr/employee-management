import jwtDecode from 'jwt-decode';

export const getRoleFromToken = () => {
  const token = localStorage.getItem('authToken');
  if (!token) return null;
  try {
    const decoded = jwtDecode(token);
    return decoded.role; // Assumes the token has a "role" field
  } catch (error) {
    return null;
  }
};
