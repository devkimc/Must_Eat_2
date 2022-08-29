import React from 'react';
import { useNavigate } from 'react-router-dom';

import useInput from 'lib/hooks/useInput';
import LoginComponents from 'components/auth/LoginComponent';
import { toast } from 'react-toastify';
import { AxiosData } from 'lib/api/apiClient';
import useLogin from './hooks/useLogin';

const LoginContainer = () => {
    const [inputId, onChangeId] = useInput('');
    const [inputPw, onChangePw, onResetPw] = useInput('');
    const navigate = useNavigate();

    const { mutate } = useLogin({
        inputId,
        inputPw,
        options: {
            onSuccess: () => {
                navigate('/map');
                toast.success('로그인에 성공하셨습니다!');
            },
            onError: (res: AxiosData) => {
                toast.error(res.response.data.msg);
            },
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
