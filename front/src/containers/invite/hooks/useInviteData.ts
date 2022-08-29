import { useQuery } from 'react-query';
import * as queryKeys from 'constants/queryKeys';
import { getInviteList, InviteType } from 'lib/api/group';
import { AxiosResponse, AxiosError } from 'axios';

export default function useInviteData() {
    return useQuery<AxiosResponse, AxiosError, InviteType[]>(
        queryKeys.INVITE_LIST,
        getInviteList,
        {
            select: data => data?.data?.result,
        },
    );
}
