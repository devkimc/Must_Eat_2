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
    SubmitTxt,
    LoginBtn,
    LoginTxt,
} from './SignUp.styled';

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

const SignUp = ({
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
                    <Link href="/auth/login">
                        <LoginTxt>Login</LoginTxt>
                    </Link>
                </LoginBtn>
            </Container>
        </FlexRow>
    );
};

export default SignUp;
