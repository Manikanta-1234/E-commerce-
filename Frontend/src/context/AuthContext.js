import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check if user is logged in on mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      fetchUser();
    } else {
      setLoading(false);
    }
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get('/api/auth/me');
      setUser(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user:', error);
      localStorage.removeItem('token');
      delete axios.defaults.headers.common['Authorization'];
      setUser(null);
      setLoading(false);
    }
  };

  const login = async (username, password) => {
    try {
      const response = await axios.post('/api/auth/login', {
        username,
        password,
      });
      const { token, ...userData } = response.data;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setUser(userData);
      setError(null);
      return { success: true };
    } catch (error) {
      const message =
        error.response?.data?.message || 'Login failed. Please try again.';
      setError(message);
      return { success: false, message };
    }
  };

  const signup = async (userData) => {
    try {
      const response = await axios.post('/api/auth/register', userData);
      const { token, ...user } = response.data;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setUser(user);
      setError(null);
      return { success: true };
    } catch (error) {
      const message =
        error.response?.data?.message || 'Signup failed. Please try again.';
      setError(message);
      return { success: false, message };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        login,
        signup,
        logout,
        setError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

