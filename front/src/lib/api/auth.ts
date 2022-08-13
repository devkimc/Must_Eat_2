import axiosInstance from '../defaultClient';

export const login = (userId: string, userPw: string) => {
    return axiosInstance.post('/api/auth/login', {
        USER_ID: userId,
        USER_PW: userPw,
    });
};

export const signup = (
    userId: string,
    userPw: string,
    userEmail: string,
    mobNo: string,
) => {
    return axiosInstance.post('/api/auth/signup', {
        USER_ID: userId,
        USER_PW: userPw,
        USER_EMAIL: userEmail,
        MOB_NO: mobNo,
    });
};

export default login;