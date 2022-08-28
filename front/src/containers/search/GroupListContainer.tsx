import { AxiosResponse, AxiosError } from 'axios';
import { GroupList } from 'components';
import { getGroupList } from 'lib/api/group';
import React from 'react';
import { useQuery } from 'react-query';

const GroupListContainer = () => {
    const { data: groupList } = useQuery<
        AxiosResponse,
        AxiosError,
        AxiosResponse
    >('groupList', getGroupList);
    return <GroupList groupList={groupList?.data?.result} />;
};

export default GroupListContainer;
