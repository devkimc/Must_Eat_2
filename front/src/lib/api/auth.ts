import axiosInstance from '../defaultClient';

export const login = (userId, userPw) => {
    return axiosInstance.post('/api/auth/login', {
        USER_ID: userId,
        USER_PW: userPw,
    });
};

export const signup = (userId, userPw, userEmail, mobNo) => {
    return axiosInstance.post('/api/auth/signup', {
        USER_ID: userId,
        USER_PW: userPw,
        USER_EMAIL: userEmail,
        MOB_NO: mobNo,
    });
};

export default login;
