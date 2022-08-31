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
    inputNm: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    maxLength: number;
    type: null | string;
    autoComplete: null | string;
};

const AuthInput = ({
    inputNm,
    value,
    onChange,
    maxLength,
    type,
    autoComplete,
}: Props) => {
    const iconColor = '#12B886';
    const filter = () => {
        switch (inputNm) {
            case 'Your ID':
                return <FiUser color={iconColor} />;
            case 'Password':
                return <AiOutlineUnlock color={iconColor} />;
            case 'Password Confirm':
                return <AiOutlineLock color={iconColor} />;
            case 'Email':
                return <AiOutlineMail color={iconColor} />;
            case 'Cell phone number':
                return <MdOutlinePhoneIphone color={iconColor} />;
            default:
                console.log('Not allow input name!');
        }
        return inputNm;
    };

    return (
        <Input>
            <InputNm>{inputNm}</InputNm>
            <InputLine>
                <Icon>{filter()}</Icon>
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
