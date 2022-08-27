import React from 'react';
import { InviteChkModal } from 'components';
import { toast } from 'react-toastify';
import { acceptInvite, getInviteList, rejectInvite } from 'lib/api/group';
import { AxiosResponse, AxiosError } from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { AxiosData } from 'lib/api/apiClient';

const InviteChkModalContainer = () => {
    const queryClient = useQueryClient();

    const { data: inviteList } = useQuery<
        AxiosResponse,
        AxiosError,
        AxiosResponse
    >('inviteList', getInviteList);

    const onAccept = useMutation((inviteId: number) => acceptInvite(inviteId), {
        onSuccess: () => {
            queryClient.invalidateQueries('inviteList');
            queryClient.invalidateQueries('groupList');
            toast.success('그룹에 참여했습니다!');
        },
        onError: (res: AxiosData) => {
            toast.error(res.response.data.msg);
        },
    });

    const onReject = useMutation((inviteId: number) => rejectInvite(inviteId), {
        onSuccess: () => {
            queryClient.invalidateQueries('inviteList');
            toast.success('초대를 거절했습니다!');
        },
        onError: (res: AxiosData) => {
            toast.error(res.response.data.msg);
        },
    });

    const onClickAccept = (inviteId: number) => {
        onAccept.mutate(inviteId);
    };

    const onClickReject = (inviteId: number) => {
        onReject.mutate(inviteId);
    };

    return (
        <InviteChkModal
            inviteList={inviteList?.data?.result}
            onClickAccept={onClickAccept}
            onClickReject={onClickReject}
        />
    );
};

export default InviteChkModalContainer;
