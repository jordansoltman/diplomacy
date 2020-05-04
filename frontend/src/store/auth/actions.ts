import { User, LOG_IN } from './types';

export function logIn(user: User) {
    return {
        type: LOG_IN,
        payload: {
            ...user
        }
    };
}
