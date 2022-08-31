import { useQuery } from 'react-query';
import * as queryKeys from 'constants/queryKeys';
import { getNotProcInvite } from 'lib/api/group';
import { AxiosResponse, AxiosError } from 'axios';

export default function useNotProcData() {
    return useQuery<AxiosResponse, AxiosError, number>(
        queryKeys.NOT_PROC_CNT,
        getNotProcInvite,
        {
            select: data => data?.data?.result[0].count,
        },
    );
}
