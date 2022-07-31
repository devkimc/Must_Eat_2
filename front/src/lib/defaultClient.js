import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.timeout = 1000;

const baseURL = '/';
// const baseURL = process.env.REACT_APP_API_URL_DEV;

const axiosInstance = axios.create({
    baseURL,
    withCredentials: true,
});

export default axiosInstance;
