import axios from "axios";

const authApi = axios.create({
  baseURL: import.meta.env.VITE_AUTH_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default authApi;
