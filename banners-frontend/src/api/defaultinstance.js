import axios from "axios";

const token = localStorage.getItem('token');
if (token) {
    defaultInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

const defaultInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    withCredentials: false,
});

defaultInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("auth_token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default defaultInstance;
