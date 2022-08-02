import axiosInstance from '../defaultClient';

export const createGroup = groupNm => {
    return axiosInstance.post('/api/group/create', {
        GROUP_NM: groupNm,
    });
};

export default createGroup;
