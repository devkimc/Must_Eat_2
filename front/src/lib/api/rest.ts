import axiosInstance from '../defaultClient';

export const getFavRest = () => {
    return axiosInstance.get('/api/fav-rest/info', {});
};

export const addFavRest = (
    groupId: number,
    restId: number,
    placeNm: string,
    cateNm: string,
    latCdnt: number,
    lngCdnt: number,
) => {
    return axiosInstance.post('/api/fav-rest/add', {
        GROUP_ID: groupId,
        REST_ID: restId,
        REST_NM: placeNm,
        FOOD_CATE: cateNm,
        LAT_CDNT: latCdnt,
        LNG_CDNT: lngCdnt,
    });
};

export default getFavRest;