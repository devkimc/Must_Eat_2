import React from 'react';
import { SearchInput } from '@/components';
import { RootState } from '@/store/store';
import * as Constants from '@/constants/mapConstants';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import {
    changeSearchRes,
    changeSearchIp,
    changeTab,
    resetSearchRes,
    SearchState,
} from '@/store/searchSlice';

const SearchInputContainer = () => {
    const searchIp = useSelector((state: RootState) => state.search.input);
    const tab = useSelector((state: RootState) => state.search.tab);
    const dispatch = useDispatch();

    const searchOption = {
        page: 1,
        x: Constants.SEARCH_OPT_X,
        y: Constants.SEARCH_OPT_Y,
        category_group_code: Constants.SEARCH_OPT_CATEGORY_FOOD,
    };

    const onSearchCB = (result: SearchState['searchRes'], status: string) => {
        const resStatus = window.kakao.maps.services.Status;
        if (status === resStatus.OK) {
            dispatch(changeSearchRes(result));
        } else if (status === resStatus.ZERO_RESULT) {
            toast.warning('검색 결과가 없습니다!');
        } else {
            toast.error('서버 응답에 문제가 있습니다!');
        }
    };

    const onSearch = () => {
        if (!searchIp) {
            toast.warning('검색어를 입력해주세요');
        }

        if (!tab) {
            dispatch(changeTab());
        }
        dispatch(resetSearchRes());
        const places = new window.kakao.maps.services.Places();
        places.keywordSearch(searchIp, onSearchCB, searchOption);
    };

    const onChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        dispatch(changeSearchIp(e.target.value));
    };
    const onEnterPress = (e: React.KeyboardEvent<HTMLImageElement>) => {
        if (e.key === 'Enter') onSearch();
    };

    return (
        <SearchInput
            searchIp={searchIp}
            onChange={onChange}
            onSearch={onSearch}
            onEnterPress={onEnterPress}
        />
    );
};

export default React.memo(SearchInputContainer);
