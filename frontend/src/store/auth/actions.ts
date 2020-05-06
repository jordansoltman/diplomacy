import { User, LOG_IN, AuthActionType, LOG_OUT } from './types';

/**
 *
 * Dispatches a log in action to the store.
 *
 * @param user type User {username: string, token: string}
 * @returns @AuthActionType
 */

export function logIn(user: User): AuthActionType {
    return {
        type: LOG_IN,
        payload: {
            loggedIn: true,
            user: user
        }
    };
}

export function logOut(): AuthActionType {
    return {
        type: LOG_OUT,
        payload: {
            loggedIn: false,
            user: { username: null, token: null }
        }
    };
}
