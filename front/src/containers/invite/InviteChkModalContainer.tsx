import React from 'react';
import { InviteChkModal } from 'components';
import { toast } from 'react-toastify';
import { acceptInvite, getInviteList, rejectInvite } from 'lib/api/group';
import { AxiosResponse, AxiosError } from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';

type InViteList = {
    INVITE_ID: number;
    SEND_USER_ID: string;
    GROUP_NM: string;
};

const InviteChkModalContainer = () => {
    const queryClient = useQueryClient();

    const { data: inviteList } = useQuery<
        AxiosResponse,
        AxiosError,
        AxiosResponse
    >('getInviteList', getInviteList);

    const onAccept = (inviteId: number) =>
        useMutation(() => acceptInvite(inviteId), {
            onSuccess: () => {
                queryClient.invalidateQueries('getInviteList');
                toast.success('그룹에 참여했습니다!');
            },
        });

    const onReject = (inviteId: number) =>
        useMutation(() => rejectInvite(inviteId), {
            onSuccess: () => {
                queryClient.invalidateQueries('getInviteList');
                toast.success('초대를 거절했습니다!');
            },
        });

    const onClickAccept = (inviteId: number) => {
        onAccept(inviteId).mutate();
    };

    const onClickReject = (inviteId: number) => {
        onReject(inviteId).mutate();
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
