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
    width: 19rem;
    box-shadow: 0 0.1rem 0.2rem rgb(0 0 0 / 20%), 0 -0.1rem 0 rgb(0 0 0 / 2%);
    border-radius: 0.6rem;

    padding: 1rem 0.6rem 1rem 0.6rem;
`;

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const PlaceBtn = styled.div`
    display: flex;
`;

export const BorderLine = styled.div`
    border-bottom: 1px solid silver;
    border-style: dashed;
    margin-bottom: 0.75rem;
    margin-top: 0.6rem;
`;

export const Info = styled.div``;

export const PlaceNmTxt = styled.span`
    font-size: 1rem;
`;

export const PhoneNum = styled.div`
    display: flex;
`;

export const PhoneNumTxt = styled.span`
    font-size: 0.75rem;
`;

export const PhoneNumIcon = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const AddrNm = styled.div`
    display: flex;
    margin-bottom: 0.4rem;
`;

export const AddrNmIcon = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const AddrNmTxt = styled.span`
    font-size: 0.75rem;
`;

export const CateNmTxt = styled.span`
    font-size: 0.6rem;
    font-weight: 700;
`;

export const Badges = styled.div`
    display: flex;
    padding-top: 0.6rem;
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

/* 카카오톡 공유하기 */
export const KakaoShareBtn = styled.button`
    border: none;
    background-color: #fff;
    cursor: pointer;
`;

export const FolderAddBtn = styled.button`
    border: none;
    background: none;
    cursor: pointer;
`;

/* 검색 결과 없을 시 */
export const RequestSearch = styled.div`
    display: flex;
    justify-content: center;
    height: 90vh;
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
