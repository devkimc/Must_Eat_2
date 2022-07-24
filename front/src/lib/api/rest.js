import axiosInstance from '../defaultClient';

export const getFavRest = userId => {
    return axiosInstance.get('/fav-rest/info', {
        userId,
    });
};

export default getFavRest;
