import React from 'react';
import { useNavigate } from 'react-router-dom';

import useInput from '@/lib/hooks/useInput';
import LoginComponents from '@/components/auth/LoginComponent';
import { toast } from 'react-toastify';
import { AxiosData } from '@/lib/api/apiClient';
import { login } from '@/lib/api/auth';
import { useMutation } from 'react-query';

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
            onResetPw();
            toast.error(res.response.data.msg);
        },
    });

    const onClickLogin = async () => {
        mutate();
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
