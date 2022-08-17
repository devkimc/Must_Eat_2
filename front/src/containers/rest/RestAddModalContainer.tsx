import React, { useEffect, useRef, useState } from 'react';
import { RestAddModal } from 'components';
import createGroup, { getGroupList } from 'lib/api/group';
import { addFavRest } from 'lib/api/rest';
import useInput from 'lib/hooks/useInput';
import { toast } from 'react-toastify';

const RestAddModalContainer = ({ targetRestInfo, onClickCloseBtn }) => {
    const [addClicked, setAddClicked] = useState<boolean>(false);
    const [groupList, setGroupList] = useState([]);
    // const groupNmTag = useRef<React.MutableRefObject<undefined>>();
    const [groupNm, onChangeGroupNm, onResetGroupNm] = useInput('');

    const getGroup = () => {
        getGroupList().then(res => {
            setGroupList(res.data.list);
        });
    };

    useEffect(() => {
        getGroup();
    }, []);

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

        createGroup(groupNm).then(() => {
            onClickCancleBtn();
            getGroup();
        });
    };

    const onClickRestAdd = (groupId: number) => {
        addFavRest(
            groupId,
            targetRestInfo.restId,
            targetRestInfo.placeNm,
            targetRestInfo.cateNm,
            targetRestInfo.latCdnt,
            targetRestInfo.lngCdnt,
        ).then(() => {
            toast.success(
                `${targetRestInfo.placeNm} 식당이 내 그룹에 담겼습니다.`,
            );
        });
    };

    return (
        <RestAddModal
            addClicked={addClicked}
            groupNm={groupNm}
            groupList={groupList}
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
