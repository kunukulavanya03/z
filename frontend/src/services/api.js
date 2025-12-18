import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Unauthorized - clear token and redirect to login
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Authentication
export const login = async (email, password) => {
  const response = await api.post('/auth/login', { email, password });
  if (response.data.access_token) {
    localStorage.setItem('token', response.data.access_token);
  }
  return response.data;
};

export const register = async (email, username, password) => {
  const response = await api.post('/auth/register', { email, username, password });
  if (response.data.access_token) {
    localStorage.setItem('token', response.data.access_token);
  }
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('token');
  window.location.href = '/login';
};

// API Endpoints
export const api_users_register = async (data) => {
  const response = await api.post('/api/users/register', data);
  return response.data;
};
export const api_users_login = async (data) => {
  const response = await api.post('/api/users/login', data);
  return response.data;
};
export const api_users_password_reset = async (data) => {
  const response = await api.post('/api/users/password_reset', data);
  return response.data;
};
export const api_users_profile = async (params = {}) => {
  const response = await api.get('/api/users/profile', { params });
  return response.data;
};
export const api_users_profile = async (id, data) => {
  const response = await api.put(`/api/users/profile/${id}`, data);
  return response.data;
};
export const api_users_profile = async (id) => {
  const response = await api.delete(`/api/users/profile/${id}`);
  return response.data;
};
export const api_resources = async (params = {}) => {
  const response = await api.get('/api/resources', { params });
  return response.data;
};
export const api_resources_{resource_id} = async (params = {}) => {
  const response = await api.get('/api/resources/{resource_id}', { params });
  return response.data;
};
export const api_resources = async (data) => {
  const response = await api.post('/api/resources', data);
  return response.data;
};
export const api_resources_{resource_id} = async (id, data) => {
  const response = await api.put(`/api/resources/{resource_id}/${id}`, data);
  return response.data;
};
export const api_resources_{resource_id} = async (id) => {
  const response = await api.delete(`/api/resources/{resource_id}/${id}`);
  return response.data;
};

export default api;
