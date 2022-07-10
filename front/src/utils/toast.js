import { toast } from 'react-toastify';

export const infoToast = text => {
    toast.info(text, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
        closeOnClick: true,
        progress: undefined,
    });
};

export const successToast = text => {
    toast.success(text, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
        closeOnClick: true,
        progress: undefined,
    });
};

export const warningToast = text => {
    toast.warning(text, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
        closeOnClick: true,
        progress: undefined,
    });
};

export const errorToast = text => {
    toast.error(text, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
        closeOnClick: true,
        progress: undefined,
    });
};
