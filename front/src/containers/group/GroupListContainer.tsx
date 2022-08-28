import { AxiosResponse, AxiosError } from 'axios';
import { GroupList } from 'components';
import { getGroupList } from 'lib/api/group';
import getFavRest from 'lib/api/rest';
import React from 'react';
import { useQuery } from 'react-query';

const GroupListContainer = () => {
    const { data: groupList } = useQuery<
        AxiosResponse,
        AxiosError,
        AxiosResponse
    >('groupList', getGroupList);

    const onClickGroup = () => {
        getFavRest
    }

    return <GroupList groupList={groupList?.data?.result} />;
};

export default GroupListContainer;
