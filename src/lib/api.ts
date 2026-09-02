import axios from "axios";

const isServer = typeof window === "undefined";

function apiRoot() {
  const raw =
    process.env.BACKEND_URL ||
    process.env.NEXT_PUBLIC_API_URL ||
    "http://localhost:5000/api";
  return raw.replace(/\/$/, "");
}

const baseURL = isServer ? `${apiRoot()}/v1` : "/api/v1";

const api = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = error.response?.data?.message || "Something went wrong";
    return Promise.reject(message);
  }
);

export default api;
