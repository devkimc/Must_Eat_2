import { createSlice } from '@reduxjs/toolkit';

export type GroupState = {
    groupId: number;
};

const groupSlice = createSlice({
    name: 'groupSlice',
    initialState: {
        groupId: -1,
    },
    reducers: {
        changeGroupId: (state, action) => {
            state.groupId = action.payload;
        },
    },
});

export default groupSlice;

export const { changeGroupId } = groupSlice.actions;
