import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { logOut } from '../../store/auth/actions';
import { ApplicationState } from '../../store';
import { connect } from 'react-redux';
import { AuthState, AuthActionType } from '../../store/auth/types';

interface HeaderProps {
    auth: AuthState;
    logOut: () => AuthActionType;
}

function Header(props: HeaderProps): ReactElement {
    const logOutHandler = (): void => {
        props.logOut();
    };

    return (
        <div className="header">
            <div className="nav">
                <Link to="/">Home</Link>
                <Link to="/diplomacy">Diplomacy</Link>
                <Link to="/publicgames">Public Games</Link>
            </div>
            <div>
                {props.auth.loggedIn ? (
                    <>
                        <button className="log-button" onClick={logOutHandler}>
                            Log Out
                        </button>
                        <Link to="/account">Account</Link>
                    </>
                ) : null}
            </div>
        </div>
    );
}

const mapStateToProps = (state: ApplicationState) => {
    return {
        auth: state.auth
    };
};

export default connect(mapStateToProps, { logOut })(Header);
