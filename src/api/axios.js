import axios from 'axios';

// Use environment variable for API URL, fallback to localhost for development
const API_URL = 'https://ecommerce-backend-ar5d.onrender.com/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    // Safety check: remove /api if it was accidentally added to the start of the URL
    if (config.url.startsWith('/api')) {
      config.url = config.url.replace('/api', '');
    }

    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;