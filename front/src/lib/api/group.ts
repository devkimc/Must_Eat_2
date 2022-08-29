import apiClient from './apiClient';

export const createGroup = (groupNm: string) => {
    return apiClient.post('/api/group/create', {
        GROUP_NM: groupNm,
    });
};

export const getGroupList = () => {
    return apiClient.get<GroupType[]>('/api/group/list', {});
};

export const deleteGroup = (groupId: number) => {
    return apiClient.delete('/api/group', {
        params: {
            GROUP_ID: groupId,
        },
    });
};

export type GroupType = {
    GROUP_ID: number;
    GROUP_NM: string;
    CRT_USER_ID: string;
    REST_CNT: number;
};

export const inviteGroup = (groupId: number, recvUserId: string) => {
    return apiClient.post('/api/group/invite', {
        GROUP_ID: groupId,
        RECV_USER_ID: recvUserId,
    });
};

export const getNotProcInvite = () => {
    return apiClient.get<number>('/api/group/invite/not-proc/count', {});
};

export const getInviteList = () => {
    return apiClient.get<InviteType[]>('/api/group/invite/list', {});
};

export type InviteType = {
    GROUP_ID: number;
    GROUP_NM: string;
    INVITE_ID: number;
    RECV_USER_ID: string;
    SEND_USER_ID: string;
};

export const acceptInvite = (inviteId: number) => {
    return apiClient.post('/api/group/invite/accept', {
        INVITE_ID: inviteId,
    });
};

export const rejectInvite = (inviteId: number) => {
    return apiClient.post('/api/group/invite/not-accept', {
        INVITE_ID: inviteId,
    });
};

export default createGroup;
