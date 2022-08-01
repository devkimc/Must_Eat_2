import axios from 'axios';
import { errorToast } from '../utils/toast';

axios.defaults.withCredentials = true;
axios.defaults.timeout = 1000;

const baseURL = '';
// const baseURL = process.env.REACT_APP_API_URL_DEV;

const axiosInstance = axios.create({
    baseURL,
    withCredentials: true,
});

axiosInstance.interceptors.response.use(error => {
    errorToast(error.response.data.msg);
    return Promise.reject(error);
});

export default axiosInstance;
