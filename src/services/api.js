import axios from "axios";

const API = axios.create({
    baseURL: "https://rms-backend-m3u4.onrender.com"
});

export default API;