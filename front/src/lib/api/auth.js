import axiosInstance from '../defaultClient';

export const login = (userId, userPw) => {
    return axiosInstance.post('/auth/login', {
        USER_ID: userId,
        USER_PW: userPw,
    });
};

export default login;
