import { AuthState, AuthActionType, LOG_IN, LOG_OUT } from './types';
import { Reducer, AnyAction } from 'redux';

const initialState: AuthState = {
    loggedIn: false,
    user: {
        username: null,
        token: null
    }
};

const viewReducer: Reducer<AuthState, AnyAction> = (state: AuthState = initialState, action: AnyAction): AuthState => {
    switch ((action as AuthActionType).type) {
        case LOG_IN:
            return action.payload;
        case LOG_OUT:
            return action.payload;
        default: {
            return state;
        }
    }
};

export default viewReducer;
