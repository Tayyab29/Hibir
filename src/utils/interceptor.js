import axios from "axios";
import { logout } from "../services/users";
// import { refreshToken } from "./HelperFuctions/refreshToken";
let BASE_URL = process.env.REACT_APP_BASE_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    // config.headers["Access-Control-Allow-Origin"] = BASE_URL;
    config.headers["Accept"] = "application/json";
    config.headers["Content-Type"] = "application/json";
    // await refreshToken();
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

// Add a Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error && error.response && error.response.status === 401) {
      console.log("unauthenticated user");
      logout();
    } else {
      return error;
    }
  }
);

export default axiosInstance;
