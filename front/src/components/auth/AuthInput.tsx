import React from 'react';
import { AiOutlineLock, AiOutlineMail, AiOutlineUnlock } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { MdOutlinePhoneIphone } from 'react-icons/md';
import styled from 'styled-components';

/* Flex */
const InputField = styled.input`
    width: 95%;
    border: none;
    margin-left: 0.5rem;
    :focus {
        outline: none;
    }
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

type Props = {
    input: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    maxLength: number;
    type: null | string;
    autoComplete: null | string;
};

const AuthInput = ({
    input,
    value,
    onChange,
    maxLength,
    type,
    autoComplete,
}: Props) => {
    let inputNm: string;
    let icon: JSX.Element;
    const iconColor = '#12B886';

    // Filter
    if (input === 'id') {
        inputNm = 'Your ID';
        icon = <FiUser color={iconColor} />;
    } else if (input === 'pw') {
        inputNm = 'Password';
        icon = <AiOutlineUnlock color={iconColor} />;
    } else if (input === 'pwConf') {
        inputNm = 'Password Confirm';
        icon = <AiOutlineLock color={iconColor} />;
    } else if (input === 'email') {
        inputNm = 'Email';
        icon = <AiOutlineMail color={iconColor} />;
    } else if (input === 'mobNo') {
        inputNm = 'Cell phone number';
        icon = <MdOutlinePhoneIphone color={iconColor} />;
    } else {
        console.log(`Not allow input! ${input}`);
    }

    return (
        <Input>
            <InputNm>{inputNm}</InputNm>
            <InputLine>
                <Icon>{icon}</Icon>
                <InputField
                    value={value}
                    onChange={onChange}
                    maxLength={maxLength}
                    type={type}
                    autoComplete={autoComplete}
                />
            </InputLine>
        </Input>
    );
};

export default React.memo(AuthInput);
