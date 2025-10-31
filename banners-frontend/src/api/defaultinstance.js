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

defaultInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("API error:", error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default defaultInstance;
