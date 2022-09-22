import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 87%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

/* 검색 결과 */
export const Result = styled.ul`
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

export const ResultList = styled.li`
    padding: 1rem 1.5rem 1.2rem;
    border-top: 1px solid #eee;
`;

export const RadiusBox = styled.div`
    width: 13rem;
    box-shadow: 0 0.1rem 0.2rem rgb(0 0 0 / 20%), 0 -0.1rem 0 rgb(0 0 0 / 2%);
    border-radius: 0.6rem;

    padding: 1rem 0.6rem 1rem 0.6rem;
`;

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const PlaceNmTxt = styled.span`
    font-size: 1rem;
`;

export const CateNmTxt = styled.span`
    font-size: 0.6rem;
    font-weight: 700;
`;

export const Badge = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    background-color: ${props => props.randomColor};
    padding: 0.3rem 0.35rem;
    border-radius: 0.3rem;
    margin-right: 0.35rem;
`;

/* 검색 결과 없을 시 */
export const RequestSearch = styled.div`
    display: flex;
    justify-content: center;
    height: 90vh;
`;

export const GroupExit = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 2rem;
`;

/* flex */
export const FlexRow = styled.div`
    display: flex;
    justify-content: center;
`;

export const FlexCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
