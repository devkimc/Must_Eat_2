import React from 'react';
import Link from 'next/link';

import AuthInput from './AuthInput';
import {
    FlexRow,
    Container,
    Title,
    TitleTxt,
    InputBox,
    SubmitBtn,
    FlexCol,
    SignUpBtn,
    SignUpTxt,
    SubmitTxt,
} from './Login.styled';

type Props = {
    inputId: string;
    inputPw: string;
    onChangeId: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangePw: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: () => void;
};

const Login = ({
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
                    <Link href="/auth/signup">
                        <SignUpTxt>SignUp</SignUpTxt>
                    </Link>
                </SignUpBtn>
            </Container>
        </FlexRow>
    );
};

export default Login;
