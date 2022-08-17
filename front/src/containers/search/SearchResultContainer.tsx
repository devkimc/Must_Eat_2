import React, { useEffect, useState } from 'react';
import { SearchResult } from 'components';
import { RootState } from 'modules';
import { useSelector } from 'react-redux';
import RestAddModalContainer from 'containers/rest/RestAddModalContainer';

type Rest = {
    restId: number | null;
    placeNm: string | null;
    cateNm: string | null;
    latCdnt: number | null;
    lngCdnt: number | null;
};

const SearchResultContainer = () => {
    const allSearchRes = useSelector(
        (state: RootState) => state.search.allSearchRes,
    );
    const [restAddModal, setRestAddModal] = useState<boolean>(false);
    const [targetRestInfo, setTargetRestInfo] = useState<Rest>();

    const splitCateNm = (cateNm: string): string[] => {
        const cateNmWord = cateNm.split(' > ');
        cateNmWord.shift();
        return cateNmWord;
    };

    const onClickFolderAdd = (
        restId: number,
        placeNm: string,
        cateNm: string,
        latCdnt: number,
        lngCdnt: number,
    ) => {
        setRestAddModal(true);
        setTargetRestInfo({
            restId,
            placeNm,
            cateNm,
            latCdnt,
            lngCdnt,
        });
    };

    const onClickCloseBtn = () => {
        setRestAddModal(false);
    };

    useEffect(() => {
        if (allSearchRes.length >= 1) {
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
