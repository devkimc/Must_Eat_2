import { GroupList } from 'components';
import { AxiosData } from 'lib/api/apiClient';
import React, { useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import * as queryKes from 'constants/queryKeys';
import { deleteGroup } from 'lib/api/group';
import { AxiosResponse, AxiosError } from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { changeGroupId } from 'store/groupSlice';
import { getFavRest, RestType } from 'lib/api/rest';
import useGroupData from './hooks/useGroupData';

const GroupListContainer = () => {
    const dispatch = useDispatch();

    const queryClient = useQueryClient();
    const { data: groupList } = useGroupData();
    const onSuccess = () => {
        console.log('perform side effect after data fetching');
    };
    const selectedGroupId = useSelector(
        (state: RootState) => state.group.groupId,
    );
    console.log(`groupId: ${selectedGroupId}`);

    const { refetch } = useQuery<AxiosResponse, AxiosError, RestType[]>(
        ['favRest', selectedGroupId],
        () => getFavRest(selectedGroupId),
        {
            onSuccess: () => onSuccess(),
            select: data => data?.data?.result,
        },
    );

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

    const onClickGroup = (groupId: number) => {
        dispatch(changeGroupId(groupId));
        refetch();
    };

    return (
        <GroupList
            groupList={groupList}
            onClickGroup={onClickGroup}
            onClickDelete={onClickDeleteGroup}
        />
    );
};

export default GroupListContainer;
