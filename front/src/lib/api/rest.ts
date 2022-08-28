import apiClient from './apiClient';

export const getFavRest = () => {
    return apiClient.get('/api/fav-rest/info', {});
};

export const addFavRest = ({
    groupId,
    id,
    place_name,
    category_name,
    y,
    x,
}: FavRest) => {
    return apiClient.post('/api/fav-rest', {
        GROUP_ID: groupId,
        REST_ID: id,
        REST_NM: place_name,
        FOOD_CATE: category_name,
        LAT_CDNT: y,
        LNG_CDNT: x,
    });
};

type FavRest = {
    groupId: number;
    id: number;
    place_name: string;
    category_name: string;
    y: number;
    x: number;
};

export default getFavRest;
