import { createSlice } from '@reduxjs/toolkit';

export type SearchState = {
    input: string;
    place: {
        id: number | null;
        place_name: string | null;
        category_name: string | null;
        y: number | null;
        x: number | null;
        address_name: string | null;
        phone: string | null;
    };
    searchRes: {
        id: number | null;
        place_name: string | null;
        category_name: string | null;
        y: number | null;
        x: number | null;
        address_name: string | null;
        phone: string | null;
    }[];
};

const searchSlice = createSlice({
    name: 'searchSlice',
    initialState: {
        input: '',
        singleSearchRes: [],
        allSearchRes: [],
    },
    reducers: {
        changeSearchIp: (state, action) => {
            state.input = action.payload;
        },
        changeSingleSearchRes: (state, action) => {
            state.singleSearchRes = action.payload;
        },
        addSearchRes: (state, action) => {
            state.allSearchRes = state.allSearchRes.concat(action.payload);
        },
        resetSearchRes: state => {
            state.allSearchRes = [];
        },
    },
});

export default searchSlice;

export const {
    changeSearchIp,
    changeSingleSearchRes,
    addSearchRes,
    resetSearchRes,
} = searchSlice.actions;
