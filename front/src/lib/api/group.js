import axiosInstance from '../defaultClient';

export const createGroup = groupNm => {
    return axiosInstance.post('/api/group/create', {
        GROUP_NM: groupNm,
    });
};

export const getGroupList = () => {
    return axiosInstance.get('/api/group/list', {});
};

export const inviteGroup = (groupId, recvUserId) => {
    return axiosInstance.post('/api/group/invite', {
        GROUP_ID: groupId,
        RECV_USER_ID: recvUserId,
    });
};

export default createGroup;
