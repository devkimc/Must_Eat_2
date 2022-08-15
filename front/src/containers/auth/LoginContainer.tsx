import React from 'react';
import { useNavigate } from 'react-router-dom';

import useInput from 'lib/hooks/useInput';
import LoginComponents from 'components/auth/LoginComponents';
import { login } from 'lib/api/auth';
import { successToast } from '../../utils/toast';

const LoginContainer = () => {
    const [inputId, onChangeId] = useInput('');
    const [inputPw, onChangePw, onResetPw] = useInput('');
    const navigate = useNavigate();

    const onClickLogin = async () => {
        try {
            await login(inputId, inputPw);
            navigate('/map');
            successToast('로그인에 성공하셨습니다!');
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
