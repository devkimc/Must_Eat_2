import axiosInstance from '../defaultClient';

export const getFavRest = userId => {
    return axiosInstance.post('/fav-rest/info', {
        USER_ID: userId,
    });
};

export default getFavRest;
