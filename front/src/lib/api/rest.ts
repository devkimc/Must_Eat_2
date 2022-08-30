import apiClient from './apiClient';

export const getFavRest = (groupId: number) => {
    return apiClient.get<FavRest[]>('/api/fav-rest', {
        params: {
            GROUP_ID: groupId,
        },
    });
};

export type FavRest = {
    id: number;
    place_name: string;
    category_name: string;
    y: number;
    x: number;
};

export const addFavRest = ({
    groupId,
    id,
    place_name,
    category_name,
    y,
    x,
}: FavRestIp) => {
    return apiClient.post('/api/fav-rest', {
        GROUP_ID: groupId,
        REST_ID: id,
        REST_NM: place_name,
        FOOD_CATE: category_name,
        LAT_CDNT: y,
        LNG_CDNT: x,
    });
};

type FavRestIp = FavRest & {
    groupId: number;
};

export default getFavRest;
