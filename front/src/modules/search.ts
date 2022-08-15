const CHANGE_SEARCH_IP = 'search/CHANGE_SEARCH_IP';

export interface SearchState {
    input: string;
}

export const changeSearchIp = input => ({ type: CHANGE_SEARCH_IP, input });

// getState를 쓰지 않는다면 굳이 파라미터로 받아올 필요 없습니다.
// export const increaseAsync = () => dispatch => {
//     setTimeout(() => dispatch(increase()), 1000);
// };

const initialState: SearchState = {
    input: '',
};

// eslint-disable-next-line @typescript-eslint/default-param-last
export default function search(state = initialState, action) {
    switch (action.type) {
        case CHANGE_SEARCH_IP:
            return {
                ...state,
                input: action.input,
            };
        default:
            return state;
    }
}
