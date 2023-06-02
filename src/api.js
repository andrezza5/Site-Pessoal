import axios from "axios";

const api = axios.create({
    baseURL: "https://site-pessoal-api-1f0o.onrender.com/api",
});

export default api;