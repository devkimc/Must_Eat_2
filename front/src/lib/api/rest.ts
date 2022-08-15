import apiClient from './apiClient';

export const getFavRest = () => {
    return apiClient.get('/api/fav-rest/info', {});
};

export const addFavRest = (
    groupId: number,
    restId: number,
    placeNm: string,
    cateNm: string,
    latCdnt: number,
    lngCdnt: number,
) => {
    return apiClient.post('/api/fav-rest/add', {
        GROUP_ID: groupId,
        REST_ID: restId,
        REST_NM: placeNm,
        FOOD_CATE: cateNm,
        LAT_CDNT: latCdnt,
        LNG_CDNT: lngCdnt,
    });
};

export default getFavRest;
