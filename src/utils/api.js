import axios from "axios";
import { useMemberStorage } from "@/stores/useMemberStorage";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
  timeout: 10000,
});

// 請求攔截器，添加 JWT Token
api.interceptors.request.use(
  (config) => {
    const memberStorage = useMemberStorage();
    const token = memberStorage.token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error)
  }
);

export default api;
