import axiosInstance from '../defaultClient';

export const login = (userId, userPw) => {
    return axiosInstance.post('/auth/login2', {
        userId,
        userPw,
    });
};

export default login;
