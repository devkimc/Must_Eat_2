import { useMutation } from 'react-query';
import { signup } from 'lib/api/auth';

export default function useSignUp({
    inputId,
    inputPw,
    inputEmail,
    inputMobNo,
    options,
}) {
    return useMutation(() => signup(inputId, inputPw, inputEmail, inputMobNo), {
        ...options,
    });
}
