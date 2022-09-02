import React from 'react';
import { FavRestList } from 'components';
import { RootState } from 'store/store';
import { useSelector } from 'react-redux';

const FavRestListContainer = () => {
    const searchRes = useSelector((state: RootState) => state.search.searchRes);

    return <FavRestList searchRes={searchRes} />;
};

export default FavRestListContainer;
