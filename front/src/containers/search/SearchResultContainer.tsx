import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { OptionTab, SearchResult } from '@/components';
import { RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import RestAddModalContainer from '@/containers/rest/RestAddModalContainer';
import { changeTab } from '@/store/searchSlice';
import { FavRestType } from '@/lib/api/rest';
import FavRestListContainer from '@/containers/rest/FavRestListContainer';
import GroupListContainer from '../group/GroupListContainer';

const SearchResultBlock = styled.div``;

const SearchResultContainer = () => {
    const [restAddModal, setRestAddModal] = useState<boolean>(false);
    const [targetRestInfo, setTargetRestInfo] = useState<FavRestType>();

    const searchRes = useSelector((state: RootState) => state.search.searchRes);
    const tab = useSelector((state: RootState) => state.search.tab);
    const dispatch = useDispatch();

    const onclickTab = () => {
        dispatch(changeTab());
    };

    const splitCateNm = (cateNm: string): string[] => {
        const cateNmWord = cateNm.split(' > ');
        cateNmWord.shift();
        return cateNmWord;
    };

    const onClickFolderAdd = ({
        id,
        place_name,
        category_name,
        y,
        x,
    }: FavRestType) => {
        setRestAddModal(true);
        setTargetRestInfo({
            id,
            place_name,
            category_name,
            y,
            x,
        });
    };

    const onClickCloseBtn = () => {
        setRestAddModal(false);
    };

    useEffect(() => {
        if (searchRes?.length >= 1 && searchRes[0]?.address_name) {
            /* 카카오톡 공유하기 */
            searchRes.forEach((el, i) => {
                window.Kakao.Share.createDefaultButton({
                    container: `#create-kakaotalk-sharing-btn${i}`,
                    objectType: 'location',
                    address: el.address_name,
                    addressTitle: el.place_name,
                    content: {
                        title: el.place_name,
                        description: el.category_name,
                        imageUrl:
                            'http://k.kakaocdn.net/dn/bSbH9w/btqgegaEDfW/vD9KKV0hEintg6bZT4v4WK/kakaolink40_original.png',
                        link: {
                            mobileWebUrl: `https://place.map.kakao.com/${el.id}`,
                            webUrl: `https://place.map.kakao.com/${el.id}`,
                        },
                    },
                });
            });
        }
    }, [searchRes]);

    return (
        <SearchResultBlock>
            <OptionTab tab={tab} onClickTab={onclickTab} />
            {tab && (
                <SearchResult
                    searchRes={searchRes}
                    onClickFolderAdd={onClickFolderAdd}
                    splitCateNm={splitCateNm}
                />
            )}
            {/* {tab && !searchRes[0]?.address_name && searchRes.length && (
                <FavRestListContainer />
            )} */}

            {!tab && <GroupListContainer />}

            {restAddModal && (
                <RestAddModalContainer
                    targetRestInfo={targetRestInfo}
                    onClickCloseBtn={onClickCloseBtn}
                />
            )}
        </SearchResultBlock>
    );
};

export default SearchResultContainer;
