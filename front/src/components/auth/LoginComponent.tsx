import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import AuthInput from './AuthInput';

const Container = styled.div`
    width: 20rem;
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    margin: 5rem 0 3rem 0;
`;
const TitleTxt = styled.h1`
    font-size: 2rem;
`;

/* input */
const InputBox = styled.div`
    padding: 2rem 3rem;
    border-radius: 1rem;
    box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.2),
        0 0.375rem 1.25rem 0 rgba(0, 0, 0, 0.19);
    margin-bottom: 1.5rem;
`;

const SubmitBtn = styled.button`
    margin-top: 2rem;
    width: 100%;
    height: 2.2rem;
    background-color: ${props => (props.disable ? '#b8b8b8' : '#12B886')};
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    border: none;
    cursor: pointer;
`;
const SubmitTxt = styled.span`
    color: #fff;
    font-weight: 300;
    font-size: 1rem;
`;

const SignUpBtn = styled.div`
    display: flex;
    justify-content: center;
`;

const SignUpTxt = styled.span`
    color: #12b886;
`;

/* Flex */
const FlexRow = styled.div`
    display: flex;
    justify-content: center;
`;

const FlexCol = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
`;

type Props = {
    inputId: string;
    inputPw: string;
    onChangeId: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangePw: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: () => void;
};

const LoginComponents = ({
    inputId,
    inputPw,
    onChangeId,
    onChangePw,
    onClick,
}: Props) => {
    return (
        <FlexRow>
            <Container>
                <Title>
                    <TitleTxt>Must Eat</TitleTxt>
                </Title>
                <InputBox>
                    <AuthInput
                        input="id"
                        value={inputId}
                        onChange={onChangeId}
                        maxLength={16}
                        type="text"
                        autoComplete={null}
                    />
                    <AuthInput
                        input="pw"
                        value={inputPw}
                        onChange={onChangePw}
                        maxLength={12}
                        type="password"
                        autoComplete={null}
                    />

                    <SubmitBtn
                        onClick={onClick}
                        disabled={inputId.length < 1 || inputPw.length < 1}
                        disable={inputId.length < 1 || inputPw.length < 1}
                    >
                        <FlexCol>
                            <SubmitTxt>Login</SubmitTxt>
                        </FlexCol>
                    </SubmitBtn>
                </InputBox>
                <SignUpBtn>
                    <Link to="/signup">
                        <SignUpTxt>SignUp</SignUpTxt>
                    </Link>
                </SignUpBtn>
            </Container>
        </FlexRow>
    );
};

export default LoginComponents;
