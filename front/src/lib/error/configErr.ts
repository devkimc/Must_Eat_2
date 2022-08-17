import { toast } from 'react-toastify';
import errCodeMsg from './errCodeMsg';

const errProc = errData => {
    const errCode = String(errData.code);
    // const errStatus = errData.status;
    if (errCode === '20001') {
        window.location.href = '/login';
        return;
    }

    for (let i = 0; i < errCodeMsg.length; i += 1) {
        if (errCodeMsg[i].code === errCode) {
            toast.error(errCodeMsg[i].msg);
        }
    }
};

export default errProc;
