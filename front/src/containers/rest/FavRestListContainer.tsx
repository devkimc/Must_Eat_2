import React from 'react';
import { FavRestList } from 'components';
import { RootState } from 'store/store';
import { useSelector } from 'react-redux';
import { AxiosResponse, AxiosError } from 'axios';
import { RestType, getFavRest } from 'lib/api/rest';
import { useQuery } from 'react-query';

const FavRestListContainer = () => {
    const searchRes = useSelector((state: RootState) => state.search.searchRes);

    return <FavRestList searchRes={searchRes} />;
};

export default FavRestListContainer;
