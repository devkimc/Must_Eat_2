import { combineReducers } from 'redux';
import search, { SearchState } from './search';

export type RootState = {
    search: SearchState;
};

const rootReducer = combineReducers({ search });

export default rootReducer;
