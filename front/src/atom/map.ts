import { atom } from 'recoil';

const searchIpState = atom({
    key: 'searchIpState',
    default: '',
});

export default searchIpState;
