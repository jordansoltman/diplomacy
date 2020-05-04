// import { systemReducer } from './system/reducers'
// import { chatReducer } from './chat/reducers'

// const rootReducer = combineReducers({
//   system: systemReducer,
//   chat: chatReducer
// })

// export type RootState = ReturnType<typeof rootReducer>
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
