import React from 'react';
import { useNavigate } from 'react-router-dom';

import useInput from 'lib/hooks/useInput';
import LoginComponents from 'components/auth/LoginComponent';
import { login } from 'lib/api/auth';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';
import { AxiosError } from 'axios';

type AxiosData = AxiosError & {
    response: {
        data: {
            code: number;
            list: [];
            msg: string;
        };
    };
};

const LoginContainer = () => {
    const [inputId, onChangeId] = useInput('');
    const [inputPw, onChangePw, onResetPw] = useInput('');
    const navigate = useNavigate();

    const { mutate } = useMutation(() => login(inputId, inputPw), {
        onSuccess: () => {
            navigate('/map');
            toast.success('로그인에 성공하셨습니다!');
        },
        onError: (res: AxiosData) => {
            toast.error(res.response.data.msg);
        },
    });

    const onClickLogin = async () => {
        try {
            mutate();
        } catch (error) {
            onResetPw();
        }
    };

    return (
        <LoginComponents
            inputId={inputId}
            inputPw={inputPw}
            onChangeId={onChangeId}
            onChangePw={onChangePw}
            onClick={onClickLogin}
        />
    );
};

export default LoginContainer;
