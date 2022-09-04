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

const SubmitBtn = styled.div`
    margin-top: 2rem;
    width: 100%;
    height: 2.2rem;
    background-color: #12b886;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    cursor: pointer;
`;
const SubmitTxt = styled.span`
    color: #fff;
    font-weight: 300;
    font-size: 1rem;
`;

const LoginBtn = styled.div`
    display: flex;
    justify-content: center;
`;

const LoginTxt = styled.span`
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
`;

type Props = {
    inputId: string;
    inputPw: string;
    inputPwConf: string;
    inputEmail: string;
    inputMobNo: string;
    onChangeId: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangePw: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangePwConf: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeMobNo: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: () => void;
};

const SignUpComponents = ({
    inputId,
    inputPw,
    inputPwConf,
    inputEmail,
    inputMobNo,
    onChangeId,
    onChangePw,
    onChangePwConf,
    onChangeEmail,
    onChangeMobNo,
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
                        maxLength={null}
                        type="text"
                        autoComplete={null}
                    />
                    <AuthInput
                        input="pw"
                        value={inputPw}
                        onChange={onChangePw}
                        maxLength={null}
                        type="password"
                        autoComplete="new-password"
                    />
                    <AuthInput
                        input="pwConf"
                        value={inputPwConf}
                        onChange={onChangePwConf}
                        maxLength={null}
                        type="password"
                        autoComplete="new-password"
                    />
                    <AuthInput
                        input="email"
                        value={inputEmail}
                        onChange={onChangeEmail}
                        maxLength={null}
                        type="email"
                        autoComplete={null}
                    />
                    <AuthInput
                        input="mobNo"
                        value={inputMobNo}
                        onChange={onChangeMobNo}
                        maxLength={null}
                        type="text"
                        autoComplete={null}
                    />
                    <SubmitBtn onClick={onClick}>
                        <FlexCol>
                            <SubmitTxt>Sign up</SubmitTxt>
                        </FlexCol>
                    </SubmitBtn>
                </InputBox>
                <LoginBtn>
                    <Link to="/login">
                        <LoginTxt>Login</LoginTxt>
                    </Link>
                </LoginBtn>
            </Container>
        </FlexRow>
    );
};

export default SignUpComponents;
