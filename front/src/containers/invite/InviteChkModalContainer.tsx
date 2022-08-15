import React, { useState, useEffect } from 'react';
import { InviteChkModal } from 'components';
import { acceptInvite, getInviteList, rejectInvite } from '../../lib/api/group';
import { successToast } from '../../utils/toast';

type InViteList = {
    INVITE_ID: number;
    SEND_USER_ID: string;
    GROUP_NM: string;
};

const InviteChkModalContainer = () => {
    const [inviteList, setInviteList] = useState<InViteList[]>([]);

    const getInviteInfo = async () => {
        const resList = await getInviteList();
        setInviteList(resList.data.result);
    };

    useEffect(() => {
        getInviteInfo();
    }, []);

    const onClickAccept = async (inviteId: number) => {
        await acceptInvite(inviteId);
        await getInviteInfo();
        successToast('그룹에 참여했습니다!');
    };

    const onClickReject = async (inviteId: number) => {
        await rejectInvite(inviteId);
        await getInviteInfo();
        successToast('초대를 거절했습니다!');
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
