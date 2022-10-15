import React from 'react';
import styled from 'styled-components';

import { SearchState } from '@/store/searchSlice';
import { RiDeleteBin6Line } from 'react-icons/ri';

const Wrapper = styled.div`
    height: 87%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

/* 검색 결과 */
const Result = styled.ul`
    overflow: hidden;
    overflow-y: scroll;
    height: 44rem;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        width: 0.44rem;
        height: 3rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: rgba(175, 175, 175, 0.72);
        border-radius: 10px;
        height: 1rem;
    }
    &::-webkit-scrollbar-track {
        background-color: #e4e4e4;
        border-radius: 100px;
    }
`;

const ResultList = styled.li`
    padding: 1rem 1.5rem 1.2rem;
    border-top: 1px solid #eee;
`;

const RadiusBox = styled.div`
    width: 13rem;
    box-shadow: 0 0.1rem 0.2rem rgb(0 0 0 / 20%), 0 -0.1rem 0 rgb(0 0 0 / 2%);
    border-radius: 0.6rem;

    padding: 1rem 0.6rem 1rem 0.6rem;
`;

const Title = styled.div`
    display: flex;
    justify-content: space-between;
`;

const PlaceNmTxt = styled.span`
    font-size: 1rem;
`;

const CateNmTxt = styled.span`
    font-size: 0.6rem;
    font-weight: 700;
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

/* 검색 결과 없을 시 */
const RequestSearch = styled.div`
    display: flex;
    justify-content: center;
    height: 90vh;
`;

const GroupExit = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 2rem;
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
