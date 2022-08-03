import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import ReactLoading from 'react-loading';

import { BiMap } from 'react-icons/bi';
import { IoIosCall } from 'react-icons/io';
import { FiShare, FiFolderPlus } from 'react-icons/fi';

import RestAddModal from './RestAddModal';

const SearchResult = ({ allSearchRes }) => {
    const [restAddModal, setRestAddModal] = useState(false);
    const [targetRestInfo, setTargetRestInfo] = useState({});

    const [ref] = useInView();
    const colorArr = [
        '#c5d9ed',
        '#72aee6',
        '#dcdcde',
        '#a7aaad',
        '#facfd2',
        '#ff8085',
        '#f5e6ab',
        '#f0c33c',
        '#b8e6bf',
        '#1ed14b',
    ];

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

    /* global Kakao */
    useEffect(() => {
        if (allSearchRes.length >= 1) {
            /* 카카오톡 공유하기 */
            allSearchRes.forEach((el, i) => {
                Kakao.Share.createDefaultButton({
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
        <Wrapper>
            <Result>
                {allSearchRes.length ? (
                    allSearchRes.map((res, i) => (
                        <ResultList key={res.id}>
                            <FlexRow>
                                <RadiusBox>
                                    <Title>
                                        <PlaceNmTxt>
                                            {res.place_name}
                                        </PlaceNmTxt>
                                        <PlaceBtn>
                                            <FolderAddBtn
                                                onClick={() =>
                                                    onClickFolderAdd(
                                                        res.id,
                                                        res.place_name,
                                                        splitCateNm(
                                                            res.category_name,
                                                        )[0],
                                                        res.y,
                                                        res.x,
                                                    )
                                                }
                                            >
                                                <FiFolderPlus
                                                    size={14}
                                                    color="silver"
                                                />
                                            </FolderAddBtn>
                                            <KakaoShareBtn
                                                id={`create-kakaotalk-sharing-btn${i}`}
                                                type="button"
                                            >
                                                <FiShare
                                                    size={13}
                                                    color="silver"
                                                />
                                            </KakaoShareBtn>
                                        </PlaceBtn>
                                    </Title>

                                    <Badges>
                                        {splitCateNm(res.category_name).map(
                                            (cateNm, z) => (
                                                <Badge
                                                    key={cateNm}
                                                    randomColor={colorArr[z]}
                                                >
                                                    <CateNmTxt>
                                                        {cateNm}
                                                    </CateNmTxt>
                                                </Badge>
                                            ),
                                        )}
                                    </Badges>

                                    <BorderLine />

                                    <Info>
                                        <AddrNm>
                                            <AddrNmIcon>
                                                <BiMap size={12} />
                                            </AddrNmIcon>

                                            <AddrNmTxt>
                                                &nbsp;{res.address_name}
                                            </AddrNmTxt>
                                        </AddrNm>

                                        {res.phone && (
                                            <PhoneNum>
                                                <PhoneNumIcon>
                                                    <IoIosCall size={12} />
                                                </PhoneNumIcon>

                                                <PhoneNumTxt>
                                                    &nbsp;{res.phone}
                                                </PhoneNumTxt>
                                            </PhoneNum>
                                        )}
                                    </Info>
                                </RadiusBox>
                            </FlexRow>
                        </ResultList>
                    ))
                ) : (
                    <RequestSearch>
                        <FlexCol>검색 결과가 없습니다.</FlexCol>
                    </RequestSearch>
                )}

                <LoaderTarget ref={ref}>
                    <LoaderWrap>
                        <ReactLoading type="spin" color="#A593E0" />
                    </LoaderWrap>
                </LoaderTarget>
            </Result>
            {restAddModal && (
                <RestAddModal
                    onClickCloseBtn={onClickCloseBtn}
                    targetRestInfo={targetRestInfo}
                />
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    height: 100vh;
    overflow: hidden;
    overflow-y: auto;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Result = styled.ul``;

const ResultList = styled.li`
    padding: 1rem 1.5rem 1.2rem;
    border-top: 1px solid #eee;
`;

const RadiusBox = styled.div`
    width: 19rem;
    box-shadow: 0 0.1rem 0.2rem rgb(0 0 0 / 20%), 0 -0.1rem 0 rgb(0 0 0 / 2%);
    border-radius: 0.6rem;

    padding: 1rem 0.6rem 1rem 0.6rem;
`;

const Title = styled.div`
    display: flex;
    justify-content: space-between;
`;

const PlaceBtn = styled.div`
    display: flex;
`;

const BorderLine = styled.div`
    border-bottom: 1px solid silver;
    border-style: dashed;
    margin-bottom: 0.75rem;
    margin-top: 0.6rem;
`;

const Info = styled.div``;

const PlaceNmTxt = styled.span`
    font-size: 1rem;
`;

const PhoneNum = styled.div`
    display: flex;
`;

const PhoneNumTxt = styled.span`
    font-size: 0.75rem;
`;

const PhoneNumIcon = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const AddrNm = styled.div`
    display: flex;
    margin-bottom: 0.4rem;
`;

const AddrNmIcon = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const AddrNmTxt = styled.span`
    font-size: 0.75rem;
`;

const CateNmTxt = styled.span`
    font-size: 0.6rem;
    font-weight: 700;
`;

const Badges = styled.div`
    display: flex;
    padding-top: 0.6rem;
`;

const Badge = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    background-color: ${props => props.randomColor};
    padding: 0.3rem 0.35rem;
    border-radius: 0.3rem;
    margin-right: 0.35rem;
`;

/* 카카오톡 공유하기 */
const KakaoShareBtn = styled.button`
    border: none;
    background-color: #fff;
    cursor: pointer;
`;

const FolderAddBtn = styled.button`
    border: none;
    background: none;
    cursor: pointer;
`;

/* 검색 결과 없을 시 */
const RequestSearch = styled.div`
    display: flex;
    justify-content: center;
    height: 90vh;
`;

/* Loading */
const LoaderTarget = styled.div`
    height: 6.25rem;
`;

const LoaderWrap = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
`;

/* flex */
const FlexRow = styled.div`
    display: flex;
    justify-content: center;
`;

const FlexCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export default SearchResult;
