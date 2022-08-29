import { useQuery } from 'react-query';
import * as queryKeys from 'constants/queryKeys';
import { getGroupList } from 'lib/api/group';
import { AxiosResponse, AxiosError } from 'axios';

export default function useGroupData() {
    return useQuery<AxiosResponse, AxiosError, AxiosResponse>(
        queryKeys.GROUP_LIST,
        getGroupList,
        {
            select: data => data,
        },
    );
}
