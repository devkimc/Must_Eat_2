import { createSlice } from '@reduxjs/toolkit';

export type SearchState = {
    tab: boolean;
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
        tab: true,
        searchRes: [],
    },
    reducers: {
        changeSearchIp: (state, action) => {
            state.input = action.payload;
        },
        changeTab: state => {
            state.tab = !state.tab;
        },
        addSearchRes: (state, action) => {
            state.searchRes = [...state.searchRes, ...action.payload];
        },
        resetSearchRes: state => {
            state.searchRes = [];
        },
    },
});

export default searchSlice;

export const { changeSearchIp, changeTab, addSearchRes, resetSearchRes } =
    searchSlice.actions;
