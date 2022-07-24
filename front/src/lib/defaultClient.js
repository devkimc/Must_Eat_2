import axios from 'axios';

axios.defaults.withCredentials = false;

const baseURL = process.env.REACT_APP_API_URL_DEV;

const defaultClient = axios.create({
    baseURL,
    withCredentials: false,
});

export default defaultClient;
