import React from 'react';
import { BiMap } from 'react-icons/bi';
import { IoIosCall } from 'react-icons/io';
import { FiShare, FiFolderPlus } from 'react-icons/fi';
import { SearchState } from 'store/searchSlice';
import { FavRestType, RestType } from 'lib/api/rest';
import {
    AddrNm,
    AddrNmIcon,
    AddrNmTxt,
    Badge,
    Badges,
    BorderLine,
    CateNmTxt,
    FlexCol,
    FlexRow,
    FolderAddBtn,
    Info,
    KakaoShareBtn,
    PhoneNum,
    PhoneNumIcon,
    PhoneNumTxt,
    PlaceBtn,
    PlaceNmTxt,
    RadiusBox,
    RequestSearch,
    Result,
    ResultList,
    Title,
    Wrapper,
} from './SearchResult.styled';

type Props = {
    searchRes: SearchState['searchRes'];
    onClickFolderAdd: ({
        id,
        place_name,
        category_name,
        y,
        x,
    }: FavRestType) => void;
    splitCateNm: (cateNm: string) => string[];
};

const SearchResult = ({ searchRes, onClickFolderAdd, splitCateNm }: Props) => {
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

    return (
        <Wrapper>
            <Result>
                {searchRes?.length ? (
                    searchRes.map((res, i) => (
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
                                                    onClickFolderAdd({
                                                        id: res.id,
                                                        place_name:
                                                            res.place_name,
                                                        category_name:
                                                            splitCateNm(
                                                                res.category_name,
                                                            )[0],
                                                        y: res.y,
                                                        x: res.x,
                                                    })
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
                                                    randomColor={
                                                        colorArr[
                                                            cateNm[0].charCodeAt(
                                                                0,
                                                            ) % 10
                                                        ]
                                                    }
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
            </Result>
        </Wrapper>
    );
};

export default SearchResult;
