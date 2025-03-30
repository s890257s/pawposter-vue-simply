import axios from "axios";
import { usePopupStore } from "@/stores/usePopupStore";
import { useMemberStore } from "@/stores/useMemberStore";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
  timeout: 10000,
});

// 請求攔截器，添加 JWT Token
api.interceptors.request.use((config) => {
  const memberStorage = useMemberStore();
  const token = memberStorage.token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // console.log("ERROR",error)
    // usePopupStore().showPopup(error);
    alert(error)
  }
);

export default api;
