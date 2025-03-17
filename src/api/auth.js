import axiosInstance from './axios';

// Funcție pentru înregistrare
export const register = async userData => {
  try {
    const response = await axiosInstance.post('/api/auth/register', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Funcție pentru autentificare
export const login = async userData => {
  try {
    const response = await axiosInstance.post('/api/auth/login', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};