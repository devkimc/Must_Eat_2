import React, { useState } from 'react';
import { InviteMembModal } from 'components';
import { useMutation } from 'react-query';

import { inviteGroup } from 'lib/api/group';
import useInput from 'lib/hooks/useInput';
import { toast } from 'react-toastify';
import { AxiosData } from 'lib/api/apiClient';
import useGroupData from 'containers/group/hooks/useGroupData';

const InviteMembModalContainer = ({ closeInviteMemb }) => {
    const [selectedGroupId, setSelectedGroupId] = useState<number>();
    const [userId, onChangeUserId, onResetUserId] = useInput('');

    const { data: groupList } = useGroupData();

    const { mutate } = useMutation(() => inviteGroup(selectedGroupId, userId), {
        onSuccess: () => {
            toast.success(`${userId} 님을 초대했습니다!`);
            onResetUserId();
        },
        onError: (res: AxiosData) => {
            toast.error(res.response.data.msg);
        },
    });

    const onClickGroup = (index: number) => {
        setSelectedGroupId(index);
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
        mutate();
    };

    return (
        <InviteMembModal
            groupList={groupList?.data?.result}
            userId={userId}
            selectedGroupId={selectedGroupId}
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
