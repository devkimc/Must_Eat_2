import { useQuery } from 'react-query';
import * as queryKeys from '@/constants/queryKeys';
import { getGroupList, GroupType } from '@/lib/api/group';
import { AxiosResponse, AxiosError } from 'axios';

export default function useGroupData() {
    return useQuery<AxiosResponse, AxiosError, GroupType[]>(
        queryKeys.GROUP_LIST,
        getGroupList,
        {
            select: data => data?.data?.result,
        },
    );
}
