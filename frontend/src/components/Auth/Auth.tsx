import React, { PropsWithChildren, ReactElement, ReactNode } from 'react';

import { ApplicationState } from '../../store';
import { connect } from 'react-redux';
import { AuthState } from '../../store/auth/types';
import { Redirect } from 'react-router-dom';
//FIXME: all kinds of fun stuff to fix here.

/**
 * Auth component
 *
 * Renders children if if auth.loggedIn is true, otherwise redirects
 *
 * @param props
 */

const Auth = function (
    props: PropsWithChildren<{ auth: AuthState; redirectURL: string; children: ReactNode }>
): ReactElement {
    console.log('auth', props.auth);
    if (!props.auth.loggedIn) console.log('redirect firing');
    return <>{props.auth.loggedIn ? props.children : <Redirect to={'/login'} />}</>;
};

const mapStateToProps = (state: ApplicationState) => {
    return {
        auth: state.auth
    };
};
export default connect(mapStateToProps)(Auth);
