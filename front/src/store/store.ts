import { configureStore } from '@reduxjs/toolkit';
import searchSlice, { SearchState } from './searchSlice';

export type RootState = {
    search: SearchState;
};

const store = configureStore({
    reducer: {
        search: searchSlice.reducer,
    },
});

export default store;
