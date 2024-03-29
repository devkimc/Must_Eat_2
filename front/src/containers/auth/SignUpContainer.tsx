import React from 'react';
import { useNavigate } from 'react-router-dom';

import useInput from '@/lib/hooks/useInput';
import SignUpComponents from '@/components/auth/SignUpComponent';
import { toast } from 'react-toastify';
import { AxiosData } from '@/lib/api/apiClient';
import { useMutation } from 'react-query';
import { signup } from '@/lib/api/auth';

const SignUpContainer = () => {
    const [inputId, onChangeId] = useInput('');
    const [inputPw, onChangePw] = useInput('');
    const [inputPwConf, onChangePwConf, onResetPwConf] = useInput('');
    const [inputEmail, onChangeEmail] = useInput('');
    const [inputMobNo, onChangeMobNo] = useInput('');
    const navigate = useNavigate();

    const { mutate } = useMutation(
        () => signup(inputId, inputPw, inputEmail, inputMobNo),
        {
            onSuccess: () => {
                navigate('/login');
                toast.success('회원가입을 축하해요!');
            },
            onError: (res: AxiosData) => {
                onResetPwConf();
                toast.error(res.response.data.msg);
            },
        },
    );

    const onClickSignup = async () => {
        mutate();
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
