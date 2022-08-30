import { GroupList } from 'components';
import { AxiosData } from 'lib/api/apiClient';
import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import * as queryKes from 'constants/queryKeys';
import useGroupData from './hooks/useGroupData';
import { deleteGroup } from 'lib/api/group';

const GroupListContainer = () => {
    const queryClient = useQueryClient();
    const { data: groupList } = useGroupData();

    const onDeleteGroup = useMutation(
        (groupId: number) => deleteGroup(groupId),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(queryKes.GROUP_LIST);
                toast.success('그룹을 삭제했습니다!');
            },
            onError: (res: AxiosData) => {
                toast.error(res.response.data.msg);
            },
        },
    );

    const onClickDeleteGroup = (groupId: number) => {
        onDeleteGroup.mutate(groupId);
    };

    return (
        <GroupList groupList={groupList} onClickDelete={onClickDeleteGroup} />
    );
};

export default GroupListContainer;
