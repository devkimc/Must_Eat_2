import React, { useEffect, useState } from 'react';
import { SearchResult } from 'components';
import { RootState } from 'modules';
import { useSelector } from 'react-redux';

declare global {
    interface Window {
        kakao: any;
        Kakao: any;
    }
}

const SearchResultContainer = () => {
    const allSearchRes = useSelector(
        (state: RootState) => state.search.allSearchRes,
    );
    const [restAddModal, setRestAddModal] = useState(false);
    const [targetRestInfo, setTargetRestInfo] = useState({});

    const splitCateNm = cateNm => {
        const cateNmWord = cateNm.split(' > ');
        cateNmWord.shift();
        return cateNmWord;
    };

    const onClickFolderAdd = (restId, placeNm, cateNm, latCdnt, lngCdnt) => {
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
        <SearchResult
            allSearchRes={allSearchRes}
            restAddModal={restAddModal}
            targetRestInfo={targetRestInfo}
            onClickFolderAdd={onClickFolderAdd}
            splitCateNm={splitCateNm}
            onClickCloseBtn={onClickCloseBtn}
        />
    );
};

export default SearchResultContainer;
