import React from 'react';
import { FavRestList } from 'components';
import { RootState } from 'store/store';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { getFavRest, RestType } from 'lib/api/rest';

const FavRestListContainer = () => {
    const favRest = useSelector((state: RootState) => state.search.searchRes);
    return <FavRestList searchRes={favRest} />;
};

export default FavRestListContainer;
