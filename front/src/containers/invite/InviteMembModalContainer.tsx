import React, { useEffect, useState } from 'react';
import { InviteMembModal } from 'components';
import { getGroupList, inviteGroup } from 'lib/api/group';
import useInput from 'lib/hooks/useInput';
import { toast } from 'react-toastify';

type GroupType = {
    GROUP_ID: number;
    GROUP_NM: string;
};

const InviteMembModalContainer = ({ closeInviteMemb }) => {
    const [selectedGroupId, setSelectedGroupId] = useState<number>();
    const [groupList, setGroupList] = useState<GroupType[]>([]);

    const [userId, onChangeUserId, onResetUserId] = useInput('');

    const getGroup = () => {
        getGroupList().then(res => {
            setGroupList(res.data.list);
        });
    };

    useEffect(() => {
        getGroup();
    }, []);

    const onClickGroup = (index: number) => {
        setSelectedGroupId(groupList[index].GROUP_ID);
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
        getGroup();
    };

    return (
        <InviteMembModal
            groupList={groupList}
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
