import React from 'react';
import { useNavigate } from 'react-router-dom';

import useInput from 'lib/hooks/useInput';
import SignUpComponents from 'components/auth/SignUpComponent';
import { toast } from 'react-toastify';
import { signup } from 'lib/api/auth';

const SignUpContainer = () => {
    const [inputId, onChangeId] = useInput('');
    const [inputPw, onChangePw] = useInput('');
    const [inputPwConf, onChangePwConf, onResetPwConf] = useInput('');
    const [inputEmail, onChangeEmail] = useInput('');
    const [inputMobNo, onChangeMobNo] = useInput('');
    const navigate = useNavigate();

    const onClickSignup = async () => {
        try {
            await signup(inputId, inputPw, inputEmail, inputMobNo);
            navigate('/login');
            toast.success('회원가입을 축하해요!');
        } catch (error) {
            onResetPwConf();
        }
    };

    return (
        <SignUpComponents
            inputId={inputId}
            inputPw={inputPw}
            inputPwConf={inputPwConf}
            inputEmail={inputEmail}
            inputMobNo={inputMobNo}
            onChangeId={onChangeId}
            onChangePw={onChangePw}
            onChangePwConf={onChangePwConf}
            onChangeEmail={onChangeEmail}
            onChangeMobNo={onChangeMobNo}
            onClick={onClickSignup}
        />
    );
};

export default SignUpContainer;
