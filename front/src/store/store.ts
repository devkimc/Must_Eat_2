import { configureStore } from '@reduxjs/toolkit';
import groupSlice, { GroupState } from './groupSlice';
import searchSlice, { SearchState } from './searchSlice';

export type RootState = {
    search: SearchState;
    group: GroupState;
};

const store = configureStore({
    reducer: {
        search: searchSlice.reducer,
        group: groupSlice.reducer,
    },
});

export default store;
