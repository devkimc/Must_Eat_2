import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FiUser } from 'react-icons/fi';
import { AiOutlineUnlock } from 'react-icons/ai';

import { login } from '../../lib/api/auth';
import { successToast } from '../../utils/toast';

const SignUpContainer = () => {
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');
    const navigate = useNavigate();

    const onChangeId = e => {
        setInputId(e.target.value);
    };

    const onChangePw = e => {
        setInputPw(e.target.value);
    };

    const onClickLogin = async () => {
        try {
            await login(inputId, inputPw);
            navigate('/map');
            successToast('로그인에 성공하셨습니다!');
        } catch (error) {
            setInputPw('');
        }
    };

    return (
        <FlexRow>
            <Container>
                <Title>
                    <TitleTxt>Must Eat</TitleTxt>
                </Title>
                <InputBox>
                    <Input>
                        <InputNm>Your ID</InputNm>
                        <InputLine>
                            <Icon>
                                <FiUser color="#12B886" />
                            </Icon>
                            <InputField
                                value={inputId}
                                onChange={onChangeId}
                                maxLength={16}
                            />
                        </InputLine>
                    </Input>
                    <Input>
                        <InputNm>Password</InputNm>
                        <InputLine>
                            <Icon>
                                <AiOutlineUnlock color="#12B886" />
                            </Icon>
                            <InputField
                                type="password"
                                value={inputPw}
                                onChange={onChangePw}
                                maxLength={12}
                            />
                        </InputLine>
                    </Input>

                    <SubmitBtn
                        onClick={onClickLogin}
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

export default SignUpContainer;

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

const Input = styled.div`
    margin-bottom: 1rem;
    width: 100%;
`;
const InputNm = styled.div`
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    margin-left: 0.3rem;
`;

const InputLine = styled.div`
    padding: 0.25rem 0.5rem 0.25rem 0.5rem;
    border-radius: 0.5rem;
    display: flex;
    border: 1px solid silver;
    height: 1.5rem;
`;
const Icon = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
const InputField = styled.input`
    width: 95%;
    border: none;
    margin-left: 0.5rem;
    :focus {
        outline: none;
    }
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
