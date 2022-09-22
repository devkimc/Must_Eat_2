import styled from 'styled-components';

export const Container = styled.div`
    width: 20rem;
`;

export const Title = styled.div`
    display: flex;
    justify-content: center;
    margin: 5rem 0 3rem 0;
`;
export const TitleTxt = styled.h1`
    font-size: 2rem;
`;

/* input */
export const InputBox = styled.div`
    padding: 2rem 3rem;
    border-radius: 1rem;
    box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.2),
        0 0.375rem 1.25rem 0 rgba(0, 0, 0, 0.19);
    margin-bottom: 1.5rem;
`;

export const SubmitBtn = styled.div`
    margin-top: 2rem;
    width: 100%;
    height: 2.2rem;
    background-color: #12b886;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    cursor: pointer;
`;
export const SubmitTxt = styled.span`
    color: #fff;
    font-weight: 300;
    font-size: 1rem;
`;

export const LoginBtn = styled.div`
    display: flex;
    justify-content: center;
`;

export const LoginTxt = styled.span`
    color: #12b886;
`;

/* Flex */
export const FlexRow = styled.div`
    display: flex;
    justify-content: center;
`;

export const FlexCol = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
