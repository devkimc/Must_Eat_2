import axiosInstance from '../defaultClient';

export const getFavRest = userId => {
    return axiosInstance.get('/api/fav-rest/info', {
        params: {
            USER_ID: userId,
        },
    });
};

export default getFavRest;
