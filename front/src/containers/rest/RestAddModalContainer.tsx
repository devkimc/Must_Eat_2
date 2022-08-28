import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { AxiosResponse, AxiosError } from 'axios';
import { useQuery, useMutation, useQueryClient } from 'react-query';

import { RestAddModal } from 'components';
import { createGroup, getGroupList } from 'lib/api/group';
import { addFavRest } from 'lib/api/rest';
import useInput from 'lib/hooks/useInput';
import { AxiosData } from 'lib/api/apiClient';

const RestAddModalContainer = ({ targetRestInfo, onClickCloseBtn }) => {
    const [addClicked, setAddClicked] = useState<boolean>(false);
    // const groupNmTag = useRef<React.MutableRefObject<undefined>>();
    const [groupNm, onChangeGroupNm, onResetGroupNm] = useInput('');
    const queryClient = useQueryClient();

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

    const { mutate } = useMutation(() => createGroup(groupNm), {
        onSuccess: () => {
            queryClient.invalidateQueries('groupList');
        },
        onError: (res: AxiosData) => {
            toast.error(res.response.data.msg);
        },
    });

    const onClickConfirmBtn = async () => {
        if (groupNm === '') {
            // groupNmTag.current.focus();
            toast.error('그룹명을 입력해 주세요.');
            return;
        }

        onClickCancleBtn();
        mutate();
    };

    const onClickRestAdd = async (groupId: number) => {
        await addFavRest({
            groupId,
            id: targetRestInfo.id,
            place_name: targetRestInfo.place_name,
            category_name: targetRestInfo.category_name,
            y: targetRestInfo.y,
            x: targetRestInfo.x,
        })
            .then(() => {
                toast.success(
                    `${targetRestInfo.place_name} 식당이 내 그룹에 담겼습니다.`,
                );
            })
            .catch((res: AxiosData) => {
                toast.error(res.response.data.msg);
            });
    };

    return (
        <RestAddModal
            addClicked={addClicked}
            groupNm={groupNm}
            groupList={groupList?.data?.result}
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
