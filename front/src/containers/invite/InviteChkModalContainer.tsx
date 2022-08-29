import React from 'react';
import { InviteChkModal } from 'components';
import { toast } from 'react-toastify';
import { useQueryClient } from 'react-query';
import { AxiosData } from 'lib/api/apiClient';
import * as queryKeys from 'constants/queryKeys';
import useInviteData from './hooks/useInviteData';
import useAcceptInvite from './hooks/useAcceptInvite';
import useRejectInvite from './hooks/useRejectInvite';

const InviteChkModalContainer = () => {
    const queryClient = useQueryClient();
    const { data: inviteList } = useInviteData();

    const onAccept = useAcceptInvite({
        options: {
            onSuccess: () => {
                queryClient.invalidateQueries(queryKeys.INVITE_LIST);
                queryClient.invalidateQueries(queryKeys.GROUP_LIST);
                toast.success('그룹에 참여했습니다!');
            },
            onError: (res: AxiosData) => {
                toast.error(res.response.data.msg);
            },
        },
    });

    const onReject = useRejectInvite({
        options: {
            onSuccess: () => {
                queryClient.invalidateQueries(queryKeys.INVITE_LIST);
                toast.success('초대를 거절했습니다!');
            },
            onError: (res: AxiosData) => {
                toast.error(res.response.data.msg);
            },
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
            inviteList={inviteList}
            onClickAccept={onClickAccept}
            onClickReject={onClickReject}
        />
    );
};

export default InviteChkModalContainer;
