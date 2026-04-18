import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
  withCredentials: true,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // config.headers.Authorization = `Bearer ${token}`

    return config;
  },
  (error) => Promise.reject(error),
);

//Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    //all 2XX response handled here
    return response;
  },
  (error) => {
    //global error handling (401, refresh token )
    return Promise.reject(error);
  },
);

export default axiosInstance;
