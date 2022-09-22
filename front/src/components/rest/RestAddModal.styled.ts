import styled from 'styled-components';

export const Container = styled.div`
    z-index: 501;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
`;

export const Visible = styled.div`
    z-index: 3001;
    visibility: visible;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    ::after {
        background: rgba(0, 0, 0, 0.6);
        content: '';
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
`;

export const Modal = styled.div`
    position: absolute;
    width: 21rem;
    border-radius: 0.28rem;
    box-shadow: 0 4px 20px 0 rgb(0 0 0 / 10%);
    background: #fff;
    z-index: 2000;
    position: fixed;
    top: 50%;
    left: 50%;
    height: auto;
    padding: 2.4rem 2.4rem 3rem 2.4rem;
    transform: translate(-50%, -50%);
`;

export const Title = styled.div`
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 2rem;
`;

/* 그룹 생성 - 클릭 전 */
export const GroupAdd = styled.div`
    display: flex;
    padding-bottom: 0.5rem;
    cursor: pointer;
`;

export const GroupAddImg = styled.div`
    display: flex;
    justify-content: center;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 0.5rem;
    background-color: #f4f5f7;
`;

export const GroupAddTxt = styled.div`
    color: #e91e63;
    display: flex;
    padding-left: 0.5rem;
    justify-content: center;
    flex-direction: column;
`;

/* 그룹 생성 - 클릭 후  */
export const GroupAddClicked = styled.div`
    margin-bottom: 1.5rem;
`;

export const InputBox = styled.div`
    display: flex;
    border-bottom: 1px solid;
    padding-bottom: 0.5rem;
`;

export const GroupAddInput = styled.input`
    width: 100%;
`;

export const RemoveBtn = styled.div`
    cursor: pointer;
`;

export const BottomBtn = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-top: 1.5rem;
    padding-right: 0.3rem;
`;

export const CancleBtn = styled.div`
    cursor: pointer;
    color: #a8a7a8;
`;

export const ConfirmBtn = styled.div`
    cursor: pointer;
    margin-left: 0.5rem;

    :hover {
        color: #e91e63;
    }
`;

/* 그룹 리스트 */
export const GroupBlock = styled.ul`
    height: 20rem;
    overflow-y: scroll;
    padding-right: 0.5rem;

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

export const Group = styled.li`
    border-bottom: 1px solid silver;
    padding: 0.5rem 0;
    cursor: pointer;

    &:hover {
        background-color: #f5f6f8;
    }
`;

export const GroupList = styled.div`
    display: flex;
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

/* 닫기 */
export const CloseBtn = styled.button`
    border: none;
    position: absolute;
    top: -2rem;
    right: -0.5rem;
`;

/* Flex */
export const FlexCol = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
