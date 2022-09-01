import apiClient from './apiClient';

export const getFavRest = (groupId: number) => {
    return apiClient.get<RestType[]>('/api/fav-rest', {
        params: {
            GROUP_ID: groupId,
        },
    });
};

export type RestType = {
    id: number | null;
    place_name: string | null;
    category_name: string | null;
    y: number | null;
    x: number | null;
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

type FavRestIp = RestType & {
    groupId: number;
};
