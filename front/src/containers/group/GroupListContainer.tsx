import { GroupList } from 'components';
import { AxiosData } from 'lib/api/apiClient';
import React, { useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import * as queryKes from 'constants/queryKeys';
import { deleteGroup } from 'lib/api/group';
import { getFavRest, RestType } from 'lib/api/rest';
import { AxiosResponse, AxiosError } from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchRes } from 'store/searchSlice';
import { RootState } from 'store/store';
import useGroupData from './hooks/useGroupData';

const GroupListContainer = () => {
    let mounted = true;
    const dispatch = useDispatch();
    const queryClient = useQueryClient();
    const { data: groupList } = useGroupData();
    const { data: favRest } = useQuery<AxiosResponse, AxiosError, RestType[]>(
        'favRest',
        () => getFavRest(1),
        {
            staleTime: 0,
            refetchOnWindowFocus: true,
            refetchOnMount: true,

            select: data => data?.data?.result,
        },
    );
    const searchRes = useSelector((state: RootState) => state.search.searchRes);

    useEffect(() => {
        if (mounted) mounted = false;
    }, []);

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
        dispatch(changeSearchRes(favRest));
        // onDeleteGroup.mutate(groupId);
    };

    return (
        <GroupList groupList={groupList} onClickDelete={onClickDeleteGroup} />
    );
};

export default GroupListContainer;
