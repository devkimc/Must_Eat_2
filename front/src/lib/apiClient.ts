import axios from 'axios';
import { errorToast } from '../utils/toast';
import errProc from './error/configErr';

axios.defaults.withCredentials = true;
axios.defaults.timeout = 1000;

const baseURL = '';
// const baseURL = process.env.REACT_APP_API_URL_DEV;

const apiClient = axios.create({
    baseURL,
    withCredentials: true,
});

// 응답 인터셉터 추가하기
apiClient.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.code === 'ECONNABORTED') {
            errorToast('timeout exception');
        } else {
            errProc(error.response.data);
        }
        return Promise.reject(error);
    },
);
export default apiClient;
