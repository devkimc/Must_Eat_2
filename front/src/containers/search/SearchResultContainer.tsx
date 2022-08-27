import React, { useEffect, useState } from 'react';
import { SearchResult } from 'components';
import { RootState } from 'store/store';
import { useSelector } from 'react-redux';
import RestAddModalContainer from 'containers/rest/RestAddModalContainer';

export type Rest = {
    id: number | null;
    place_name: string | null;
    category_name: string | null;
    y: number | null;
    x: number | null;
};

const SearchResultContainer = () => {
    const allSearchRes = useSelector(
        (state: RootState) => state.search.searchRes,
    );
    const [restAddModal, setRestAddModal] = useState<boolean>(false);
    const [targetRestInfo, setTargetRestInfo] = useState<Rest>();

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
    }: Rest) => {
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
        if (allSearchRes?.length >= 1) {
            /* 카카오톡 공유하기 */
            allSearchRes.forEach((el, i) => {
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
    }, [allSearchRes]);

    return (
        <>
            <SearchResult
                allSearchRes={allSearchRes}
                onClickFolderAdd={onClickFolderAdd}
                splitCateNm={splitCateNm}
            />
            {restAddModal && (
                <RestAddModalContainer
                    targetRestInfo={targetRestInfo}
                    onClickCloseBtn={onClickCloseBtn}
                />
            )}
        </>
    );
};

export default SearchResultContainer;
