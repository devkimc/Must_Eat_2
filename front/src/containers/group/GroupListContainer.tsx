import { AxiosResponse, AxiosError } from 'axios';
import { GroupList } from 'components';
import { AxiosData } from 'lib/api/apiClient';
import { deleteGroup, getGroupList } from 'lib/api/group';
import React from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import * as queryKes from 'constants/queryKeys';

const GroupListContainer = () => {
    const queryClient = useQueryClient();

    const { data: groupList } = useQuery<
        AxiosResponse,
        AxiosError,
        AxiosResponse
    >(queryKes.GROUP_LIST, getGroupList);

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
        <GroupList
            groupList={groupList?.data?.result}
            onClickDelete={onClickDeleteGroup}
        />
    );
};

export default GroupListContainer;
