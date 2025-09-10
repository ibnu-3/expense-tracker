import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://crispy-guacamole-x5q45qwxq7xqhp4g-8080.app.github.dev/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercept requests to add the JWT token to the Authorization header
axiosInstance.interceptors.request.use(
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

export default axiosInstance;