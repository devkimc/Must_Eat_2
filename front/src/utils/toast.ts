import { toast } from 'react-toastify';

export const infoToast = (text: string) => {
    toast.info(text, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
        closeOnClick: true,
        progress: undefined,
    });
};

export const successToast = (text: string) => {
    toast.success(text, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
        closeOnClick: true,
        progress: undefined,
    });
};

export const warningToast = (text: string) => {
    toast.warning(text, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
        closeOnClick: true,
        progress: undefined,
    });
};

export const errorToast = (text: string) => {
    toast.error(text, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
        closeOnClick: true,
        progress: undefined,
    });
};
