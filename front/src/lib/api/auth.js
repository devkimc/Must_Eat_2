import axiosInstance from '../defaultClient';

export const login = (userId, userPw) => {
    return axiosInstance.post('/auth/login', {
        userId,
        userPw,
    });
};

export default login;
