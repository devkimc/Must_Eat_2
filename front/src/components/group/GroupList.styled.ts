import styled from 'styled-components';

export const GroupListBlock = styled.div`
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

export const GroupBox = styled.div`
    display: flex;
    padding-left: 1.5rem;
`;

export const GroupImg = styled.div`
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 0.5rem;
    background-color: ${props => props.imgColor};
`;

export const GroupInfo = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 0.7rem;
`;

export const GroupRestCount = styled.div`
    padding-top: 0.4rem;
    font-size: 0.9rem;
    color: #969696;
`;

export const GroupNm = styled.div`
    font-size: 1rem;
    color: #333;
`;

export const Group = styled.li`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid silver;
    padding: 0.5rem 0;
    cursor: pointer;

    &:hover {
        background-color: #f5f6f8;
    }
`;

export const GroupExit = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 2rem;
`;
