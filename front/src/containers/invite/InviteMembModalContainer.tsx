import React, { useEffect, useState } from 'react';
import { InviteMembModal } from 'components';
import { useQuery } from 'react-query';

import { getGroupList, inviteGroup } from 'lib/api/group';
import useInput from 'lib/hooks/useInput';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

type GroupType = {
    GROUP_ID: number;
    GROUP_NM: string;
};

const InviteMembModalContainer = ({ closeInviteMemb }) => {
    const [selectedGroupId, setSelectedGroupId] = useState<number>();
    // const [groupList, setGroupList] = useState<GroupType[]>([]);

    const [userId, onChangeUserId, onResetUserId] = useInput('');

    const { data } = useQuery<number, AxiosError, number>(
        'groupList',
        getGroupList,
        {
            staleTime: 5 * 1000,
        },
    );

    // const getGroup = () => {
    //     getGroupList().then(res => {
    //         setGroupList(res.data.list);
    //     });
    // };

    // useEffect(() => {
    //     getGroup();
    // }, []);

    const onClickGroup = (index: number) => {
        setSelectedGroupId(data[index].GROUP_ID);
    };

    const onClickRemoveBtn = () => {
        onResetUserId();
    };

    const onClickCancleBtn = () => {
        onResetUserId();
    };

    const onClickConfirmBtn = async () => {
        if (userId === '') {
            // userNmTag.current.focus();
            toast.error('유저 이름을 입력해 주세요!');
            return;
        }

        await inviteGroup(selectedGroupId, userId);
        toast.success(`${userId} 님을 초대했습니다!`);
        onClickCancleBtn();
        // getGroup();
    };

    return (
        <InviteMembModal
            groupList={data}
            userId={userId}
            onChange={onChangeUserId}
            onClickGroup={onClickGroup}
            onClickRemoveBtn={onClickRemoveBtn}
            onClickCancleBtn={onClickCancleBtn}
            onClickConfirmBtn={onClickConfirmBtn}
            closeInviteMemb={closeInviteMemb}
        />
    );
};

export default InviteMembModalContainer;
