//combine all reducers and export the interface for the application state, which is the combination of all of the slices of state.

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/reducers';
import { AuthState } from './auth/types';

const rootReducer = combineReducers({ authReducer });
export type RootState = ReturnType<typeof rootReducer>;

export interface ApplicationState {
    auth: AuthState;
}

const store = configureStore({
    reducer: {
        auth: authReducer
    }
});

export default store;
