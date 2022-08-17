const CHANGE_SEARCH_IP = 'search/CHANGE_SEARCH_IP';
const CHANGE_SINGLE_SEARCH_RES = 'search/CHANGE_SINGLE_SEARCH_RES';
const ADD_SEARCH_RES = 'search/ADD_SEARCH_RES';
const RESET_SEARCH_RES = 'search/RESET_SEARCH_RES';

export type SearchState = {
    input: string;
    singleSearchRes: {
        id: number | null;
        place_name: string | null;
        category_name: string | null;
        y: number | null;
        x: number | null;
        address_name: string | null;
        phone: string | null;
    }[];
    allSearchRes: {
        id: number | null;
        place_name: string | null;
        category_name: string | null;
        y: number | null;
        x: number | null;
        address_name: string | null;
        phone: string | null;
    }[];
};

export const changeSearchIp = (input: string) => ({
    type: CHANGE_SEARCH_IP,
    input,
});

export const changeSingleSearchRes = (
    result: SearchState['singleSearchRes'],
) => ({
    type: CHANGE_SINGLE_SEARCH_RES,
    result,
});

export const addSearchRes = (result: SearchState['allSearchRes']) => ({
    type: ADD_SEARCH_RES,
    result,
});

export const resetSearchRes = () => ({
    type: RESET_SEARCH_RES,
});

const initialState: SearchState = {
    input: '',
    singleSearchRes: [],
    allSearchRes: [],
};

// eslint-disable-next-line @typescript-eslint/default-param-last
export default function search(state = initialState, action) {
    switch (action.type) {
        case CHANGE_SEARCH_IP:
            return {
                ...state,
                input: action.input,
            };
        case CHANGE_SINGLE_SEARCH_RES:
            return {
                ...state,
                singleSearchRes: action.result,
            };
        case ADD_SEARCH_RES:
            return {
                ...state,
                allSearchRes: state.allSearchRes.concat(action.result),
            };
        case RESET_SEARCH_RES:
            return {
                ...state,
                allSearchRes: [],
            };
        default:
            return state;
    }
}
