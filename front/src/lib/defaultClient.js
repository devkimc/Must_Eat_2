import axios from 'axios';

axios.defaults.withCredentials = false;
axios.defaults.timeout = 1000;

const baseURL = process.env.REACT_APP_API_URL_DEV;

const axiosInstance = axios.create({
    baseURL,
    withCredentials: false,
});

export default axiosInstance;
