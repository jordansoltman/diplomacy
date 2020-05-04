import { AnyAction } from 'redux';

//action types for any view action
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

//Auth state interface
export interface User {
    username: string | null;
    token: string | null;
}
export interface AuthState {
    loggedIn: boolean;
    user: User;
}

//interface for declaring auth actions
interface AuthAction extends AnyAction {
    type: string;
    payload: AuthState;
}

//export a type for this action type.
export type AuthActionType = AuthAction;
