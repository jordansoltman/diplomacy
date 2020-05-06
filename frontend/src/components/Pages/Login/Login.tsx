import React, { ReactElement, Props, Dispatch } from 'react';
import { connect, DispatchProp, MapDispatchToPropsParam } from 'react-redux';
import { logIn, logOut } from '../../../store/auth/actions';
import { AuthActionType, User, AuthState } from '../../../store/auth/types';
import { ApplicationState } from '../../../store';
import { RouteComponentProps } from 'react-router-dom';
import './Login.scss';

interface LoginProps /*extends RouteComponentProps*/ {
    logIn: (user: User) => AuthActionType;
    logOut: () => AuthActionType;
    auth: AuthState;
}

const Login: React.FunctionComponent<LoginProps> = (props): ReactElement => {
    /**
     * Fetch username and token from cookie.
     *
     * Dispatch a log in action.
     *
     * Route the user to the Home page.
     */
    const logInHandler = (): void => {
        const user: User = {
            username: 'Tyler',
            token: 'a;klhci39839nf'
        };
        props.logIn(user);
        // props.history.replace('/');
    };

    /**
     * Dispatch a log out action.
     */

    const logOutHandler = (): void => {
        props.logOut();
    };

    const content = props.auth.loggedIn
        ? {
              message: 'Welcome User',
              buttonHandler: logOutHandler,
              buttonMessage: 'Log Out'
          }
        : {
              message: 'Welcome to Diplomacy Game',
              buttonHandler: logInHandler,
              buttonMessage: 'Log In'
          };

    return (
        <div className="login-container sub-container">
            <span>{content.message}</span>
            <button className="login-button" onClick={content.buttonHandler}>{content.buttonMessage}</button>
        </div>
    );
};

const mapStateToProps = (state: ApplicationState) => {
    return {
        auth: state.auth
    };
};
export default connect(mapStateToProps, { logIn, logOut })(Login);
