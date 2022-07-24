import defaultClient from '../defaultClient';

export const login = (userId, userPw) => {
    defaultClient.post('/auth/login', {
        userId,
        userPw,
    });
};

export default login;
