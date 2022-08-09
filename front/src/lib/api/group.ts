import axiosInstance from '../defaultClient';

export const createGroup = (groupNm: string) => {
    return axiosInstance.post('/api/group/create', {
        GROUP_NM: groupNm,
    });
};

export const getGroupList = () => {
    return axiosInstance.get('/api/group/list', {});
};

export const inviteGroup = (groupId: number, recvUserId: string) => {
    return axiosInstance.post('/api/group/invite', {
        GROUP_ID: groupId,
        RECV_USER_ID: recvUserId,
    });
};

export const getNotProcInvite = () => {
    return axiosInstance.get('/api/group/invite/not-proc/count', {});
};

export const getInviteList = () => {
    return axiosInstance.get('/api/group/invite/list', {});
};

export const acceptInvite = (inviteId: number) => {
    return axiosInstance.post('/api/group/invite/accept', {
        INVITE_ID: inviteId,
    });
};

export const rejectInvite = (inviteId: number) => {
    return axiosInstance.post('/api/group/invite/not-accept', {
        INVITE_ID: inviteId,
    });
};

export default createGroup;
