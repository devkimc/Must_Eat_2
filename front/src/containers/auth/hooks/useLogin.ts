import { useMutation } from 'react-query';
import { login } from 'lib/api/auth';

export default function useLogin({ inputId, inputPw, options }) {
    return useMutation(() => login(inputId, inputPw), {
        ...options,
    });
}
