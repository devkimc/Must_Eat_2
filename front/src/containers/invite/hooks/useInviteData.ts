import { useQuery } from 'react-query';
import * as queryKeys from 'constants/queryKeys';
import { getInviteList } from 'lib/api/group';
import { AxiosResponse, AxiosError } from 'axios';

export default function useInviteData() {
    return useQuery<AxiosResponse, AxiosError, AxiosResponse>(
        queryKeys.INVITE_LIST,
        getInviteList,
        {
            select: data => data,
        },
    );
}
