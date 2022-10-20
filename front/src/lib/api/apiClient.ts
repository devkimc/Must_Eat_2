import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import errProc from '../error/configErr';

axios.defaults.withCredentials = true;
axios.defaults.timeout = 1000;

const baseURL = '';

const apiClient = axios.create({
    baseURL,
    withCredentials: true,
});

export type AxiosData = AxiosError & {
    response: {
        data: {
            code: number;
            list: [];
            msg: string;
        };
    };
};

// 응답 인터셉터 추가하기
apiClient.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response.status === 504) {
            toast.error('에러! 관리자에게 문의하세요.');
        } else {
            errProc(error.response.data);
        }
        return Promise.reject(error);
    },
);
export default apiClient;
