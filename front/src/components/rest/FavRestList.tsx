import React from 'react';
import { SearchState } from 'store/searchSlice';
import { RiDeleteBin6Line } from 'react-icons/ri';
import {
    Badge,
    CateNmTxt,
    FlexCol,
    FlexRow,
    GroupExit,
    PlaceNmTxt,
    RadiusBox,
    RequestSearch,
    Result,
    ResultList,
    Title,
    Wrapper,
} from './FavRestList.styled';

type Props = {
    searchRes: SearchState['searchRes'];
};

const FavRestList = ({ searchRes }: Props) => {
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
                                <RadiusBox wide={res.address_name}>
                                    <Title>
                                        <PlaceNmTxt>
                                            {res.place_name}
                                        </PlaceNmTxt>
                                        <Badge
                                            randomColor={
                                                colorArr[
                                                    res.category_name.charCodeAt(
                                                        0,
                                                    ) % 10
                                                ]
                                            }
                                        >
                                            <CateNmTxt>
                                                {res.category_name}
                                            </CateNmTxt>
                                        </Badge>
                                        <GroupExit>
                                            <RiDeleteBin6Line
                                                // onClick={() =>
                                                //     onClickDelete(el.GROUP_ID)
                                                // }
                                                color="#FF6B6B"
                                                size={18}
                                            />
                                        </GroupExit>
                                    </Title>
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

export default FavRestList;
