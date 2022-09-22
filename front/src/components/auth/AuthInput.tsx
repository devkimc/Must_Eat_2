import React from 'react';
import { AiOutlineLock, AiOutlineMail, AiOutlineUnlock } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { MdOutlinePhoneIphone } from 'react-icons/md';
import {
    Input,
    InputNm,
    InputLine,
    Icon,
    InputField,
} from './AuthInput.styled';

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
