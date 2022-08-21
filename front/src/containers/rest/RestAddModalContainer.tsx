import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { AxiosResponse, AxiosError } from 'axios';
import { useQuery } from 'react-query';

import { RestAddModal } from 'components';
import createGroup, { getGroupList } from 'lib/api/group';
import { addFavRest } from 'lib/api/rest';
import useInput from 'lib/hooks/useInput';

const RestAddModalContainer = ({ targetRestInfo, onClickCloseBtn }) => {
    const [addClicked, setAddClicked] = useState<boolean>(false);
    // const groupNmTag = useRef<React.MutableRefObject<undefined>>();
    const [groupNm, onChangeGroupNm, onResetGroupNm] = useInput('');

    const { data: groupList } = useQuery<
        AxiosResponse,
        AxiosError,
        AxiosResponse
    >('groupList', getGroupList);

    const onClickGroupAdd = () => {
        setAddClicked(true);
    };

    const onClickRemoveBtn = () => {
        onResetGroupNm();
    };

    const onClickCancleBtn = () => {
        setAddClicked(false);
        onResetGroupNm();
    };

    const onClickConfirmBtn = async () => {
        if (groupNm === '') {
            // groupNmTag.current.focus();
            toast.error('그룹명을 입력해 주세요.');
            return;
        }

        await createGroup(groupNm);
        onClickCancleBtn();
        // getGroup();
    };

    const onClickRestAdd = async (groupId: number) => {
        await addFavRest(
            groupId,
            targetRestInfo.restId,
            targetRestInfo.placeNm,
            targetRestInfo.cateNm,
            targetRestInfo.latCdnt,
            targetRestInfo.lngCdnt,
        );
        toast.success(`${targetRestInfo.placeNm} 식당이 내 그룹에 담겼습니다.`);
    };

    return (
        <RestAddModal
            addClicked={addClicked}
            groupNm={groupNm}
            groupList={groupList?.data.list}
            onChange={onChangeGroupNm}
            onClickGroupAdd={onClickGroupAdd}
            onClickRemoveBtn={onClickRemoveBtn}
            onClickCancleBtn={onClickCancleBtn}
            onClickConfirmBtn={onClickConfirmBtn}
            onClickCloseBtn={onClickCloseBtn}
            onClickRestAdd={onClickRestAdd}
        />
    );
};

export default RestAddModalContainer;
