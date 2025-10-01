import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://effective-engine-r4vx4vgwv99435x6p-8080.app.github.dev",
  withCredentials: true,
});
axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default axiosInstance;
