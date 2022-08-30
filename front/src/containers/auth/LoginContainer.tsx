import React from 'react';
import { useNavigate } from 'react-router-dom';

import useInput from 'lib/hooks/useInput';
import LoginComponents from 'components/auth/LoginComponent';
import { toast } from 'react-toastify';
import { AxiosData } from 'lib/api/apiClient';

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
function useMutation(
    arg0: () => any,
    arg1: { onSuccess: () => void; onError: (res: AxiosData) => void },
): { mutate: any } {
    throw new Error('Function not implemented.');
}

function login(inputId: string, inputPw: string) {
    throw new Error('Function not implemented.');
}
